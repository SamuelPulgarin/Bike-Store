import React from 'react';
import { useState } from 'react';


export const TextBox = () => {

  const [bgColor, setBgColor] = useState('indigo');

  return (
    <div>
        <article 
        title='parrafo'
        style={{ backgroundColor: bgColor}}
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perferendis culpa quasi quam architecto deleniti blanditiis molestiae. Laborum odio veritatis dolorum assumenda quas fuga accusantium! Consequatur facere assumenda id doloribus.
        </article>

        <button
        onClick={() => setBgColor(bgColor === 'indigo' ? 'tomato' : 'indigo')}
        >Pulsa para modificar</button>
    </div>
  )
}