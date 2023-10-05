import AcceptCookies from "../components/PruebasUnitarias/AcceptCookies";
import { render, screen, fireEvent, getByLabelText } from "@testing-library/react";

//variables para acceder a los componentes
let checkbox;
let article;

describe('AcceptCookies Component', ()=>{

    beforeEach(() =>{
        render(<AcceptCookies/>);
        checkbox = screen.getByLabelText('acepta las cookies');
        article = screen.getByRole('article', { name: 'confirmar cookies'})
    });

    test('Si el checkbox esta en el componente y esta desactivado', ()=>{
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    test('Si cambia el texto al pulsar el checkbox', ()=>{
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(article.textContent).toBe('Cookies aceptadas');
    });
})