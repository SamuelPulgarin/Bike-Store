import React from 'react';
import OficialBanner from '../../assets/img/BannerOficial.png';
import '../../assets/CSS/Banner_search_styles.css';

const Banner_search = () => {
    return (
        <>

            <div className='MainBanner'>
                <img src={OficialBanner} alt="Banner" />
            </div>
            <div className='Search'>
                <input type="text" placeholder='Buscar' />
            </div>
        </>
    )
}

export default Banner_search