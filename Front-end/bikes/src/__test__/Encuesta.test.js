import { Bolivia } from "../components/PruebasUnitarias/Encuesta";

describe('Funciones dentro del componente Bolivia.jsx', ()=>{

    describe('Pruebas sobre la funcion Bolivia', ()=>{

        test('Si el numero recibido es 1 el genero sera masculino', ()=>{
            expect(Bolivia(1)).toBe('Masculino');
        })

        test('Si el numero recibido es 2 el genero sera femenino', () =>{
            expect(Bolivia(2)).toBe('Femenino');
        })

        test('Si el valor es 1  debera ser true porque el usuario trabaja', ()=>{
            expect(Bolivia(undefined, 1)).toBeTruthy();
        })

        test('Si el valor es 2 debera ser false porque el usuario no trabaja', ()=>{
            expect(Bolivia(undefined, 2)).toBeFalsy();
        })

        test('Si el usuario tiene un trabajo el sueldo debera ser 1000000', ()=>{
            expect(Bolivia(undefined, undefined, true)).toBe(1000000);
        })

        test('Si el usuario No tiene trabajo el sueldo debera ser 0', () =>{
            expect(Bolivia(undefined, undefined, false)).toBe(0);
        })
    })
})