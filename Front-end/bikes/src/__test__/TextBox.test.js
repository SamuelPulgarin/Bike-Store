import { TextBox } from "../components/PruebasUnitarias/TextBox";
import { render, screen, fireEvent } from "@testing-library/react";

//variables para acceder a los componentes
let article;
let button;

describe('Pruebas unitarias para componentes en react js', ()=>{

    beforeEach(()=>{
        //Funcion que permite ejecutar todas las sentencias que esten dentro antes de cada test
        render(<TextBox/>);
        article = screen.getByRole('article', { name: 'parrafo'});
        button = screen.getByRole( 'button', { name: 'Pulsa para modificar' });
    });

    test('La caja de texto se encuentra en el documento', ()=>{
        expect(article).toBeInTheDocument();
    });

    test('La caja con el texto tiene un color inicial', ()=>{
        expect(article).toHaveStyle({
            backgroundColor: 'indigo'
        });
    })

    test('Si al pulsar el boton cambia el color de fondo', ()=>{
        fireEvent.click(button);
        expect(article).toHaveStyle({
            backgroundColor: 'tomato'
        });
    });
})