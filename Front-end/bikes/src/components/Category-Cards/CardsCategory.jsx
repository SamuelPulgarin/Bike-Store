import React from 'react';
import '../../assets/css/cardsC.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



/*ja */
export const CardsCategory = () => {
    return (
        <>
            <h2 className="titulo1">Categorías:</h2>
            <main className='main-cards'>
                {/* categoria bicicleta ruta */}
                <Link to={"/productos"}>
                    <div className="Carta1">
                        <div className="content1">
                            <h2 className="texto1">Ruta</h2>
                        </div>
                    </div>
                </Link>

                {/* categoria bicicleta montaña */}
                <Link to={"/productos"}>
                    <div className="Carta2">
                        <div className="content1">
                            <h2 className="texto1">Montaña</h2>
                        </div>
                    </div>
                </Link>

                {/* categoria bicicleta bmx */}
                <Link to={"/productos"}>
                    <div className="Carta3">
                        <div className="content1">
                            <h2 className="texto1">BMX</h2>
                        </div>
                    </div>
                </Link>
                {/* categoria bicicleta hibrida */}
                <Link to={"/productos"}>
                    <div className="Carta4">
                        <div className="content1">
                            <h2 className="texto1">Hibridas</h2>
                        </div>
                    </div>
                </Link>
            </main>
        </>
    )
}
