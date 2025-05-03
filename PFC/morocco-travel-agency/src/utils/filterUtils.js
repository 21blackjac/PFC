// Filtre les destinations par caractéristiques
export const filterDestinations = (destinations, filters) => {
    return destinations.filter(destination => {
      return (
        (!filters.price || destination.price <= filters.price) &&
        (!filters.rating || destination.rating >= filters.rating) &&
        (!filters.type || destination.tags.includes(filters.type))
      );
    });
  };
  
  // Trie les résultats
  export const sortDestinations = (destinations, sortBy) => {
    switch(sortBy) {
      case 'price-asc':
        return [...destinations].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...destinations].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...destinations].sort((a, b) => b.rating - a.rating);
      default:
        return destinations;
    }
  };