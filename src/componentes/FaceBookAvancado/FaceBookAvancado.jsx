import React, { useState } from 'react';
import profilesJSON from "../../data/berlin.json";
import FacebookUser from '../FaceBookAvancado/FacebookUser';

function FaceBookAvancado() {
  const [profiles] = useState(profilesJSON);
  const [filter, setFilter] = useState("All");
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handleClick = (e) => {
    setFilter(e.target.dataset.country); 
  };

  const handleSearch = (e) => {
    setTermoPesquisa(e.target.value.toLowerCase()); 
  };


  const filteredProfiles = profiles.filter(profile => {
    //const matchCountry = filter === "All" || profile.country === filter;
    const matchName = profile.firstName.toLowerCase().includes(termoPesquisa) || 
                      profile.lastName.toLowerCase().includes(termoPesquisa);
    return matchName;
  });

  return (
    <div>
      <div className='actions'>
        <input 
          type="text" 
          placeholder="Pesquisar por nome..." 
          value={termoPesquisa} 
          onChange={handleSearch} 
        />

        <button 
          onClick={handleClick} 
          className={filter === "All" ? "selected" : ""} 
          data-country="All"
        >
          All
        </button>
        <button 
          onClick={handleClick} 
          className={filter === "England" ? "selected" : ""} 
          data-country="England"
        >
          England
        </button>
        <button 
          onClick={handleClick} 
          className={filter === "USA" ? "selected" : ""} 
          data-country="USA"
        >
          USA
        </button>
        <button 
          onClick={handleClick} 
          className={filter === "Malaysia" ? "selected" : ""} 
          data-country="Malaysia"
        >
          Malaysia
        </button>
        <button 
          onClick={handleClick} 
          className={filter === "Germany" ? "selected" : ""} 
          data-country="Germany"
        >
          Germany
        </button>
        <button 
          onClick={handleClick} 
          className={filter === "Rest" ? "selected" : ""} 
          data-country="Rest"
        >
          ...
        </button>
      </div>

      {filteredProfiles.map((profile, index) => 
        <FacebookUser key={index} profile={profile} filter={filter} />
      )}
    </div>
  );
}

export default FaceBookAvancado;
