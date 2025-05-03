// Conversion et formatage des prix
export const formatPrice = (amount, currency = 'EUR') => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  // Calcul du prix avec réduction
  export const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    const discountAmount = originalPrice * (discountPercent / 100);
    return originalPrice - discountAmount;
  };