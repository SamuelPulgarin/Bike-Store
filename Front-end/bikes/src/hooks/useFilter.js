import $ from 'jquery';

export const filterBrandAndSize = () => {
    // Arrays para rastrear las marcas y tallas seleccionadas
    const selectedBrands = [];
    const selectedSizes = [];

    $(document).ready(function () {
        // Filtro de marca
        $('.category_item').click(function () {
            var catProduct = $(this).attr('category');
            
            // Verifica si la categoría ya está seleccionada
            const index = selectedBrands.indexOf(catProduct);
            if (index === -1) {
                // Si no está seleccionada, agrégala al array
                selectedBrands.push(catProduct);
            } else {
                // Si ya está seleccionada, quítala del array
                selectedBrands.splice(index, 1);
            }

            filterProducts(); // Llama a la función para aplicar los filtros
        });


        // Filtro de talla
        $('.size_item').click(function () {
            var sizeProduct = $(this).attr('type');
            
            // Verifica si la talla ya está seleccionada
            const index = selectedSizes.indexOf(sizeProduct);
            if (index === -1) {
                // Si no está seleccionada, agrégala al array
                selectedSizes.push(sizeProduct);
            } else {
                // Si ya está seleccionada, quítala del array
                selectedSizes.splice(index, 1);
            }

            filterProducts(); // Llama a la función para aplicar los filtros
        });

        // Función para aplicar los filtros y mostrar/ocultar elementos
        function filterProducts() {
            // Oculta todos los elementos
            $(`.cartap`).hide();

            // Filtra los elementos por marca y talla
            const brandFilteredProducts = selectedBrands.length === 0 ?
                $(`.cartap`) :
                $(`.cartap[category="${selectedBrands.join(' ')}"]`)
                selectedBrands.forEach(category => {
                    $(`.cartap[category="${category}"]`).show();
                });
            
            const sizeFilteredProducts = selectedSizes.length === 0 ?
                $(`.cartap`) :
                $(`.cartap[type="${selectedSizes.join(' ')}"]`);
            
            // Intersección de los resultados de marca y talla
            const intersection = brandFilteredProducts.filter(sizeFilteredProducts);

            // Muestra los elementos que cumplen con ambos filtros
            intersection.show();
        }

        // Restablecer todos los filtros cuando se hace clic en un elemento con clase "cartap"
        $(`.cartap`).click(function () {
            $(`.cartap`).show();
            selectedBrands.length = 0;
            selectedSizes.length = 0;
        });
    });
};



export const filterBrand = () => {
    // Array para rastrear las categorías seleccionadas
    const selectedCategories = [];
    
    $(document).ready(function () {
        $('.category_item').click(function () {
            var catProduct = $(this).attr('category');
            
            // Verifica si la categoría ya está seleccionada
            const index = selectedCategories.indexOf(catProduct);
            if (index === -1) {
                // Si no está seleccionada, agrégala al array
                selectedCategories.push(catProduct);
            } else {
                // Si ya está seleccionada, quítala del array
                selectedCategories.splice(index, 1);
            }

            // Filtra los elementos según las categorías seleccionadas
            if (selectedCategories.length === 0) {
                // Si no hay categorías seleccionadas, muestra todos los elementos
                $(`.cartap`).show();
            } else {
                // Oculta todos los elementos
                $(`.cartap`).hide();
                // Muestra los elementos relacionados con las categorías seleccionadas
                selectedCategories.forEach(category => {
                    $(`.cartap[category="${category}"]`).show();
                });
            }
        });

        $(`.cartap`).click(function () {
            // Restablece todos los filtros cuando se hace clic en un elemento con clase "cartap"
            $(`.cartap`).show();
            selectedCategories.length = 0; // Borra las categorías seleccionadas
        });
    });
};



// export const filterSizes = () => {
//     $(document).ready(function () {
//         $('.size_item').click(function () {
//             var catProduct = $(this).attr('type');
//             console.log(catProduct);
//             $(`.cartap`).hide();
//             $(`.cartap[type="${catProduct}"]`).show();
//         });
//         $(`.cartap`).click(function(){
//             $(`.cartap`).show();
//         });
//     });
// }

export const filterType = () => {
    $(document).ready(function () {
        $('.type_item').click(function () {
            var catProduct = $(this).attr('itemType');
            console.log(catProduct);
            $(`.cartap`).hide();
            $(`.cartap[itemType="${catProduct}"]`).show();
        });
        $(`.cartap`).click(function(){
            $(`.cartap`).show();
        });
    });
}

export const filterColor = () => {
    $(document).ready(function () {
        $('.color_item').click(function () {
            var catProduct = $(this).attr('typeof');
            console.log(catProduct);
            $(`.cartap`).hide();
            $(`.cartap[typeof="${catProduct}"]`).show();
        });
        $(`.cartap`).click(function(){
            $(`.cartap`).show();
        });
    });
}