import { titleCase, mayorDeEdad } from "../components/PruebasUnitarias/Funciones";


describe('Funciones dentro del componente "Funciones"', () => { 
    
    describe('Pruebas sobre la funcion titleCase', ()=>{

        test('Debe retornar un string', ()=>{

            const result = titleCase('Un valor');
            expect(typeof result).toBe('string');
        });

        test('Debe retornar el string transformado', () =>{

            expect(titleCase('en un lugar de la mancha')).toBe('En Un Lugar De La Mancha');
        });

        test('Debe devolver un string vacio', ()=>{
            expect(titleCase('')).toBe('');
        })
    });

    describe('Pruebas sobre la funcion mayorDeEdad', ()=>{

        test('Debe devolver un booleano', ()=>{
            expect(typeof mayorDeEdad(19)).toBe('boolean');
        });

        test('Si es mayor de edad devuelve true', ()=>{
            expect(mayorDeEdad(34)).toBeTruthy();
        })

        test('Si la edad es 18 debe devolver true', () =>{
            expect(mayorDeEdad(18)).toBeTruthy();
        });

        test('Si la edad es menor de 18 devuelve false', () =>{
            expect(mayorDeEdad(4)).toBeFalsy();
        });

        test('Si la edad es negativa nos devuelve un null', ()=>{
            expect(mayorDeEdad(-21)).toBeNull();
        })
    });
})
