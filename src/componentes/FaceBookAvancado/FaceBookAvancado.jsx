import React from 'react'
import profiles from "../../data/berlin.json";
import { useState } from 'react';
import styles from './FaceBookAvancado.module.css'

function FaceBookAvancado() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);

  // Lista única de países
  const countries = [...new Set(profiles.map((profile) => profile.country))];
  const displayedCountries = showAllCountries ? countries : countries.slice(0, 5);

  // Filtrar perfis por nome
  let filteredProfiles = profiles.filter((profile) =>
    profile.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCountry) {
    filteredProfiles = filteredProfiles.filter(
      (profile) => profile.country === selectedCountry
    );
  }

  // Ordenar por nome
  if (sorted) {
    filteredProfiles.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  return (
    <div>
      {/* Entrada de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.search}
      />

      {/* Botões de país */}
      <div className={styles.buttons}>
        <button onClick={() => setSelectedCountry(null)}>All</button>
        {displayedCountries.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={selectedCountry === country ? styles.active : ""}
          >
            {country}
          </button>
        ))}

        {/* Botão para expandir países */}
        {!showAllCountries && (
          <button onClick={() => setShowAllCountries(true)} className={styles.moreButton}>
            ...
          </button>
        )}
      </div>

      {/* Botão de ordenação */}
      <button onClick={() => setSorted(!sorted)} className={styles.sortButton}>
        {sorted ? "Ordenar Z-A" : "Ordenar A-Z"}
      </button>

      {/* Perfis */}
      <div className={styles.container}>
        {filteredProfiles.map((profile, index) => (
          <div
            key={index}
            className={`${styles.card} ${expandedCard === index ? styles.expanded : ""}`}
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <div className={styles.imageWrapper}>
              <img
                src={profile.img}
                alt={profile.firstName}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <p><strong>First Name:</strong> {profile.firstName}</p>
              <p><strong>Last Name:</strong> {profile.lastName}</p>
              <p><strong>Country:</strong> {profile.country}</p>
              <p><strong>Type:</strong> {profile.isStudent ? "Student" : "Teacher"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceBookAvancado;