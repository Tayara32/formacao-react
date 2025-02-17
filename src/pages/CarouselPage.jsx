import React from 'react'
import Carousel from '../componentes/Carousel/Carousel'

function CarouselPage() {
  return (
    <div>
         <h2>Carousel</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  )
}

export default CarouselPage