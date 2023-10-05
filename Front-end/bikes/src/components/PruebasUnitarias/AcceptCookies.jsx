import React, { useState } from 'react';

const AcceptCookies = () => {

    const [cookies, setCookies] = useState(false);

  return (
    <>
        <label htmlFor="cookieCheckbox">acepta las cookies</label>
        <input 
            type="checkbox" 
            id="cookieCheckbox" 
            onClick={() => setCookies(!cookies)} 
        />
        <article title='confirmar cookies' >
            {cookies ? 'Cookies aceptadas': 'Debes aceptar las cookies'}
        </article>
    </>
  )
}

export default AcceptCookies;