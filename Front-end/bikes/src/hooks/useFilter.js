import $ from 'jquery';


 

export const filterBrandSizeColorAndType = () => {

    // Arrays para rastrear las marcas, tallas, colores y tipos seleccionados
    const selectedBrands = [];
    const selectedSizes = [];
    const selectedColors = [];
    const selectedTypes = [];

    $(document).ready(function () {
        // Filtro de marca
        $('.category_item').click(function () {
            var catProduct = $(this).attr('category');
            toggleFilter(selectedBrands, catProduct);

        });

        // Filtro de talla
        $('.size_item').click(function () {
            var sizeProduct = $(this).attr('type');
            toggleFilter(selectedSizes, sizeProduct);
        });

        // Filtro de color
        $('.color_item').click(function () {
            var colorProduct = $(this).attr('color');
            toggleFilter(selectedColors, colorProduct);
        });

        // Filtro de tipo de bicicleta
        $('.type_item').click(function () {
            var typeProduct = $(this).attr('itemType');
            toggleFilter(selectedTypes, typeProduct);
        });

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

        // Función para alternar la selección en los arrays de filtros
        function toggleFilter(filterArray, filterValue) {
            const index = filterArray.indexOf(filterValue);
            if (index === -1) {
                filterArray.push(filterValue);
            } else {
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