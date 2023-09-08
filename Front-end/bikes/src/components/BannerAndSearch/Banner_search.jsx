import React from 'react';
import '../../assets/CSS/Banner_search_styles.css';
import Lupa from '../../assets/img/Lupa.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
/*ja */
const Banner_search = () => {

    const [bikes, setBikes] = useState([]);
    const [search, setSearch] = useState("");

    const peticiónGet = async() => {
        await axios.get("http://localhost:3060")
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleChange = e => {
        setSearch(e.target.value);
        console.log("Busqueda: " + e.target.value);
    }

    useEffect(() => {
        peticiónGet();
    }, [])


    return (
        <>
            <div className='Container'>
                <div className='Search'>
                    <input type="text" 
                    placeholder='Buscar' 
                    className='search' 
                    value={search} 
                    onChange={handleChange}/>
                    <button id='lupa'><img src={Lupa} alt="Lupa" /></button>
                </div>
            </div>
        </>
    )
}

export default Banner_search