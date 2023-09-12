import $ from 'jquery';


export const filterBrandSizeColorAndType = () => {
    // Arrays para rastrear las marcas, tallas, colores y tipos seleccionados
    const selectedBrands = [];
    const selectedSizes = [];
    const selectedColors = [];
    const selectedTypes = [];

    function updateBrandFilters() {
        const selectedCategories = selectedBrands;
        const brandFilteredProducts = filterByCategory(selectedCategories);
        brandFilteredProducts.show();
    }
 
    //Acumulación de las marcas 
    $(document).ready(function () {
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

            // Filtra los elementos según las categorías seleccionadas
            if (selectedBrands.length === 0) {
                // Si no hay categorías seleccionadas, muestra todos los elementos
                $(`.cartap`).show();
            } else {
                // Oculta todos los elementos
                $(`.cartap`).hide();
                // Muestra los elementos relacionados con las categorías seleccionadas
                selectedBrands.forEach(category => {
                    $(`.cartap[category="${category}"]`).show();
                });
            }
            updateBrandFilters();
        });

        $(`.cartap`).click(function () {
            // Restablece todos los filtros cuando se hace clic en un elemento con clase "cartap"
            $(`.cartap`).show();
            selectedBrands.length = 0; // Borra las categorías seleccionadas
        });
    });

    //Acumulación de las tallas
    $(document).ready(function () {
        $('.size_item').click(function () {
            var sizeProduct = $(this).attr('type');
            
            // Verifica si la categoría ya está seleccionada
            const index = selectedSizes.indexOf(sizeProduct);
            if (index === -1) {
                // Si no está seleccionada, agrégala al array
                selectedSizes.push(sizeProduct);
            } else {
                // Si ya está seleccionada, quítala del array
                selectedSizes.splice(index, 1);
            }

            // Filtra los elementos según las categorías seleccionadas
            if (selectedSizes.length === 0) {
                // Si no hay categorías seleccionadas, muestra todos los elementos
                $(`.cartap`).show();
            } else {
                // Oculta todos los elementos
                $(`.cartap`).hide();
                // Muestra los elementos relacionados con las categorías seleccionadas
                selectedSizes.forEach(type => {
                    $(`.cartap[type="${type}"]`).show();
                });
            }
            updateBrandFilters();
        });

        $(`.cartap`).click(function () {
            // Restablece todos los filtros cuando se hace clic en un elemento con clase "cartap"
            $(`.cartap`).show();
            selectedSizes.length = 0; // Borra las categorías seleccionadas
        });
    });

    //Acumulación de las tipos
    $(document).ready(function () {
        $('.type_item').click(function () {
            var typeProduct = $(this).attr('itemType');
            
            // Verifica si la categoría ya está seleccionada
            const index = selectedTypes.indexOf(typeProduct);
            if (index === -1) {
                // Si no está seleccionada, agrégala al array
                selectedTypes.push(typeProduct);
            } else {
                // Si ya está seleccionada, quítala del array
                selectedTypes.splice(index, 1);
            }

            // Filtra los elementos según las categorías seleccionadas
            if (selectedTypes.length === 0) {
                // Si no hay categorías seleccionadas, muestra todos los elementos
                $(`.cartap`).show();
            } else {
                // Oculta todos los elementos
                $(`.cartap`).hide();
                // Muestra los elementos relacionados con las categorías seleccionadas
                selectedTypes.forEach(itemType => {
                    $(`.cartap[itemType="${itemType}"]`).show();
                });
            }
            updateBrandFilters();
        });

        $(`.cartap`).click(function () {
            // Restablece todos los filtros cuando se hace clic en un elemento con clase "cartap"
            $(`.cartap`).show();
            selectedTypes.length = 0; // Borra las categorías seleccionadas
        });
    });

    //Acumulación de colores
    $(document).ready(function () {
        $('.color_item').click(function () {
            var colorProduct = $(this).attr('color');
            
            // Verifica si la categoría ya está seleccionada
            const index = selectedColors.indexOf(colorProduct);
            if (index === -1) {
                // Si no está seleccionada, agrégala al array
                selectedColors.push(colorProduct);
            } else {
                // Si ya está seleccionada, quítala del array
                selectedColors.splice(index, 1);
            }

            // Filtra los elementos según las categorías seleccionadas
            if (selectedColors.length === 0) {
                // Si no hay categorías seleccionadas, muestra todos los elementos
                $(`.cartap`).show();
            } else {
                // Oculta todos los elementos
                $(`.cartap`).hide();
                // Muestra los elementos relacionados con las categorías seleccionadas
                selectedColors.forEach(color => {
                    $(`.cartap[color="${color}"]`).show();
                });
            }
             updateBrandFilters();
        });

        $(`.cartap`).click(function () {
            // Restablece todos los filtros cuando se hace clic en un elemento con clase "cartap"
            $(`.cartap`).show();
            selectedColors.length = 0; // Borra las categorías seleccionadas
        });
    });


    $(document).ready(function () {
        // Función para aplicar los filtros y mostrar/ocultar elementos
        function filterProducts() {
            // Oculta todos los elementos
            $(`.cartap`).hide();

            // Filtra los elementos por marca, talla, color y tipo
            const brandFilteredProducts = filterByCategory(selectedBrands);
            const sizeFilteredProducts = filterByType(selectedSizes);
            const colorFilteredProducts = filterByColor(selectedColors);
            const typeFilteredProducts = filterByBikeType(selectedTypes);

            // Intersección de los resultados de marca, talla, color y tipo
            const intersection = brandFilteredProducts
                .filter(sizeFilteredProducts)
                .filter(colorFilteredProducts)
                .filter(typeFilteredProducts);

            // Muestra los elementos que cumplen con todos los filtros
            intersection.show();
        }

        if(selectedBrands >= 1 && selectedSizes >= 1 && selectedTypes >= 1 && selectedColors >= 1){
            $('.cartap').show()
        }

        // Función para alternar la selección en los arrays de filtros
        function toggleFilter(filterArray, filterValue) {
            const index = filterArray.indexOf(filterValue);
            if (index === -1) {
                filterArray.push(filterValue);
            }else {
                // Si ya está seleccionada, quítala del array
                filterArray.splice(index, 1);
            }

            filterProducts(); // Llama a la función para aplicar los filtros
        }

        // Función para filtrar por marca
        function filterByCategory(selectedCategories) {
            return selectedCategories.length === 0 ?
                $(`.cartap`) :
                $(`.cartap[category="${selectedCategories.join(' ')}"]`);
        }

        // Función para filtrar por talla
        function filterByType(selectedTypes) {
            return selectedTypes.length === 0 ?
                $(`.cartap`) :
                $(`.cartap[type="${selectedTypes.join(' ')}"]`);
        }

        // Función para filtrar por color
        function filterByColor(selectedColors) {
            return selectedColors.length === 0 ?
                $(`.cartap`) :
                $(`.cartap[color="${selectedColors.join(' ')}"]`);
        }

        // Función para filtrar por tipo de bicicleta
        function filterByBikeType(selectedBikeTypes) {
            return selectedBikeTypes.length === 0 ?
                $(`.cartap`) :
                $(`.cartap[itemType="${selectedBikeTypes.join(' ')}"]`);
        }

        //Filtros de marca
        $('.category_item').click(function () {
            var catProduct = $(this).attr('category');
            toggleFilter(selectedBrands, catProduct);
        });


        //Filtros de talla
        $('.size_item').click(function () {
            var sizeProduct = $(this).attr('type');
            toggleFilter(selectedSizes, sizeProduct);
        });


        //Filtros de tipo
        $('.type_item').click(function () {
            var typeProduct = $(this).attr('color');
            toggleFilter(selectedTypes, typeProduct);
        });


        // Filtro de color
        $('.color_item').click(function () {
            var colorProduct = $(this).attr('color');
            toggleFilter(selectedColors, colorProduct);
        });

        // Restablecer todos los filtros cuando se hace clic en un elemento con clase "cartap"
        $(`.cartap`).click(function () {
            $(`.cartap`).show();
            selectedBrands.length = 0;
            selectedSizes.length = 0;
            selectedColors.length = 0;
            selectedTypes.length = 0;
        });
    });
};
