import '../../assets/CSS/Banner_search_styles.css';
import Lupa from '../../assets/img/Lupa.png'
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Banner_search = () => {

    const [search, setSearch] = useState('');
    // const history = useHistory(); // Instancia useHistory para redirección

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    // Redirige a la página de resultados de búsqueda con el término de búsqueda como parámetro
    history.push(`/search-results?query=${encodeURIComponent(search)}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Si se presiona Enter, realiza la búsqueda
      handleSearch();
    }
  };

    return (
        <>
            <div className="Container">
                <div className="Search">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="search"
                        value={search}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button id="lupa" onClick={handleSearch}>
                        <img src={Lupa} alt="Lupa" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner_search