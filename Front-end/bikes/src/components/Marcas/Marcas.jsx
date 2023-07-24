import React from 'react'
import '../../assets/css/marcas.css'
import scott from '../../assets/img/Marcas/scott.png'
import gw from '../../assets/img/Marcas/gw.png'
import giant from '../../assets/img/Marcas/giant.png'
import trek from '../../assets/img/Marcas/trek.png'

export const Marcas = () => {
    return (
        <>
            <h2 className='titulo-marcas'>Marcas:</h2>

            <main className='section-marcas'>
                <div className='marca1'>
                    <img src={scott} alt="Scott" id='cot' />
                </div>
                <div className='marca2'>
                    <img src={gw} alt="GW" className='GW' />
                </div>
                <div className='marca3'>
                    <img src={giant} alt="Giant" className='giant'/>
                </div>
                <div className='marca4'>
                    <img src={trek} alt="Trek" className='trek'/>
                </div>
            </main>
        </>
    )
}
