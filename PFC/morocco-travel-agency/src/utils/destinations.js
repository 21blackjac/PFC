// src/utils/destinations.js
import marrakechImage from '../assets/images/marrakech.jpg';
 const destinations = [
    {
      id: 1,
      name: "Marrakech",
      description: "La ville ocre aux mille et une nuits",
      image: marrakechImage,
      price: "À partir de €450",
      rating: 4.8,
      tag: "Populaire"
    },
    {
      id: 2,
      name: "Chefchaouen",
      description: "La perle bleue du Rif marocain",
      image: "/assets/images/chefchaouen.jpg",
      price: "À partir de €380",
      rating: 4.7,
      tag: "Tendance"
    },
    {
      id: 3,
      name: "Tétouan",
      description: "Joyau andalou au pied des montagnes",
      image: "/assets/images/tetouan.jpg",
      price: "À partir de €320",
      rating: 4.5,
      tag: "Authentique"
    }
  ];
  
  // Alternative si vous préférez un export par défaut :
  // export default destinations;
  export default destinations;