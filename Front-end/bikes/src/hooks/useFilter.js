import $ from 'jquery';

export const filterBrand = () => {
    $(document).ready(function () {
        $('.category_item').click(function () {
            var catProduct = $(this).attr('category');
            console.log(catProduct);
            $(`.cartap`).hide();
            $(`.cartap[category="${catProduct}"]`).show();
        });
        $(`.cartap`).click(function(){
            $(`.cartap`).show();
        });
    });
}

export const filterSizes = () => {
    $(document).ready(function () {
        $('.size_item').click(function () {
            var catProduct = $(this).attr('type');
            console.log(catProduct);
            $(`.cartap`).hide();
            $(`.cartap[type="${catProduct}"]`).show();
        });
        $(`.cartap`).click(function(){
            $(`.cartap`).show();
        });
    });
}

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