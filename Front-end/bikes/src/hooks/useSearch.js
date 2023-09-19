import { useNavigate } from 'react-router-dom';

export const useNavigateSearch = () => {
  const navigate = useNavigate();

  const searchBicycles = (searchTerm) => {
    // Redirige a la página de resultados de búsqueda con el término de búsqueda como parámetro
    const encodedSearchTerm = encodeURIComponent(searchTerm.toLowerCase());
    navigate(`/search-results?query=${encodedSearchTerm}`);
  };

  return { searchBicycles, navigate };
};