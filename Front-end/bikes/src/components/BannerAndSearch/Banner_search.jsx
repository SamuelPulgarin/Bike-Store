import React from 'react';
import '../../assets/CSS/Banner_search_styles.css';
import Lupa from '../../assets/img/Lupa.png'

const Banner_search = () => {
    return (
        <>
            <div className='Container'>
                <div className='Search'>
                    <input type="text" placeholder='Buscar' className='search' />
                    <button id='lupa'><img src={Lupa} alt="Lupa" /></button>
                </div>
            </div>
        </>
    )
}

export default Banner_search