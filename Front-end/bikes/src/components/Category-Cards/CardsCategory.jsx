import React from 'react';
import '../../assets/css/cardsC.css';
import { useNavigate } from 'react-router-dom';




export const CardsCategory = () => {
    return (
        <>
            <h2 className="titulo1">Categorías:</h2>
            <main className='main-cards'>
                {/* categoria bicicleta ruta */}
                <a href="/productos">
                    <div className="Carta1">
                        <div className="content1">
                            <h2 className="texto1">Ruta</h2>
                        </div>
                    </div>
                </a>

                {/* categoria bicicleta montaña */}
                <a href="/productos">
                    <div className="Carta2">
                        <div className="content1">
                            <h2 className="texto1">Montaña</h2>
                        </div>
                    </div>
                </a>

                {/* categoria bicicleta bmx */}
                <a href="/productos">
                    <div className="Carta3">
                        <div className="content1">
                            <h2 className="texto1">BMX</h2>
                        </div>
                    </div>
                </a>
                {/* categoria bicicleta hibrida */}
                <a href="/productos">
                    <div className="Carta4">
                        <div className="content1">
                            <h2 className="texto1">Hibridas</h2>
                        </div>
                    </div>
                </a>
            </main>
        </>
    )
}
