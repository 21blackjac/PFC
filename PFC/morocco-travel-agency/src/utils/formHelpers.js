// Validation des formulaires de réservation
export const validateBookingForm = (formData) => {
    const errors = {};
    
    if (!formData.destination) {
      errors.destination = "Veuillez sélectionner une destination";
    }
    
    if (!formData.checkInDate || new Date(formData.checkInDate) < new Date()) {
      errors.checkInDate = "Date invalide";
    }
    
    if (formData.adults < 1) {
      errors.adults = "Nombre d'adultes requis";
    }
    
    return errors;
  };
  
  // Formatage des dates pour l'affichage
  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };