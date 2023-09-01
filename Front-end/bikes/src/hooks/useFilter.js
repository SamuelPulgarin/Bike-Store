import $ from 'jquery';

export const filter = () => {
    $(document).ready(function () {
        $('.category_item').click(function () {
            var catProduct = $(this).attr('category');
            console.log(catProduct);

            $('{data.categoria}').hide();
            $('{data.categoria}[category="' + catProduct + '"]').show();
        })
    });

}
















// export function bikeList(){
//     const bikes = [
//         /*1*/    {name: 'Giant Revolt Advanced Pro 1 23', category: 'Ruta'},
//         /*2*/    {name: 'Giant Reign 1 23', category: 'Montaña'},
//         /*3*/    {name: 'Giant Xtc Advanced Sl 29 1 23', category: 'Montaña'},
//         /*4*/    {name: 'Giant Tcr Advanced Pro Disc 1-AR 23', category: 'Ruta'},
//         /*5*/    {name: 'Giant Propel Advanced 2 23', category: 'Ruta'},
//         /*6*/    {name: 'Giant Propel Advanced Pro 0 AXS 23', category: 'Ruta'},
//         /*7*/    {name: 'Giant Tcr Advanced Disc 1+ PC 23', category: 'Ruta'},
//         /*8*/    {name: 'Giant Contend SL 2 Disc 2 23', category: 'Ruta'},
//         /*9*/    {name: 'Giant Revolt 2 23', category: 'Ruta'},
//         /*10*/    {name: 'Giant Revolt 1 23', category: 'Ruta'},
//         /*11*/    {name: 'Giant Fathom 29 2 22', category: 'Montaña'},
//         /*12*/    {name: 'Giant Contend 1 23', category: 'Ruta'},
//         /*13*/    {name: 'Giant SCR 1 23', category: 'Ruta'},
//         /*14*/    {name: 'Giant SCR 2 23', category: 'Ruta'},
//         /*15*/    {name: 'Giant Trance X Advanced Pro 29 2 23', category: 'Montaña'},
//         /*16*/    {name: 'Giant Propel Advanced 1 23', category: 'Ruta'},
//         /*17*/    {name: 'Giant Propel Advanced Pro 1 23', category: 'Ruta'},
//         /*18*/    {name: 'Giant Trance X 29 2 23', category: 'Montaña'},
//         /*19*/    {name: 'Giant Trance X 29 1 23', category: 'Montaña'},
//         /*20*/    {name: 'Giant Stance 29 1 22', category: 'Montaña'},
//         /*21*/    {name: 'Bicicleta Scott Contessa Addict 25 2023', category: 'Ruta'},
//         /*22*/    {name: 'Bicicleta Ruta Contessa Addict 35 2022', category: 'Ruta'},
//         /*23*/    {name: 'Bicicleta Scott Addict 10 2022', category: 'Ruta'},
//         /*24*/    {name: 'Bicicleta Scott Addict 10 2023', category: 'Ruta'},
//         /*25*/    {name: 'Bicicleta Scott Addict 20 2023', category: 'Ruta'},
//         /*26*/    {name: 'Bicicleta Scott Contessa Active 30', category: 'Montaña'},
//         /*27*/    {name: 'Bicicleta Scott Aspect 950 2022', category: 'Montaña'},
//         /*28*/    {name: 'Bicicleta Scott Aspect 940 2022', category: 'Montaña'},
//         /*29*/    {name: 'Bicicleta Scott Contessa Scale 930 2022', category: 'Montaña'},
//         /*30*/    {name: 'Bicicleta Scott Scale 930 2023', category: 'Montaña'},
//         /*31*/    {name: 'Bicicleta MTB Spark RC World Cup 2023', category: 'Montaña'},
//         /*32*/    {name: 'Bicicleta Scott Addict RC 15 2023', category: 'Montaña'},
//         /*33*/    {name: 'Bicicleta Scott Aspect 930 2022', category: 'Montaña'},
//         /*34*/    {name: 'Bicicleta Scott Aspect 960 2022', category: 'Montaña'},
//         /*35*/    {name: 'Bicicleta Scott Contessa Active 20 2022', category: 'Montaña'},
//         /*36*/    {name: 'Bicicleta Scott Addict 30', category: 'Ruta'},
//         /*37*/    {name: 'Bicicleta Scott Addict 30 2023', category: 'Ruta'},
//         /*38*/    {name: 'Bicicleta Scott Addict 40 2023', category: 'Ruta'},
//         /*39*/    {name: 'Bicicleta Scott Addict RC 10 2023', category: 'Ruta'},
//         /*40*/    {name: 'Bicicleta Scott Addict RC 20 2023', category: 'Ruta'},
//         /*41*/    {name: 'Bicicleta GW Lynx Rin 29 8', category: 'Montaña'},
//         /*42*/    {name: 'Bicicleta Todo Terreno Rin 29 GW Jackal 8', category: 'Montaña'},
//         /*43*/    {name: 'Bicicleta Todo Terreno Rin 29 GW Jackal 8 Vel', category: 'Montaña'},
//         /*44*/    {name: 'Bicicleta GW Jackal 29 LTWOO 8', category: 'Montaña'},
//         /*45*/    {name: 'Bicicleta Todo Terreno GW Hyena Shimano 7', category: 'Montaña'},
//         /*46*/    {name: 'Bicicleta GW K2 Ruta Carreras Full Shimano Sora', category: 'Ruta'},
//         /*47*/    {name: 'Bicicleta de Ruta GW Flamma Shimano Tourney', category: 'Ruta'},
//         /*48*/    {name: 'Bicicleta GW BMX Serie Cosmos', category: 'BMX'},
//         /*49*/    {name: 'GW BMX Lancer', category: 'BMX'},
//         /*50*/    {name: 'GW Balance Impulso', category: 'BMX'},
//         /*51*/    {name: 'Bicicleta de montaña Marlin 5 2022', category: 'Montaña'},
//         /*52*/    {name: 'Bicicleta de ruta Domane AL 2-2022', category: 'Ruta'},
//         /*53*/    {name: 'Bicicleta de montaña Procaliber 9.5 - 2023', category: 'Montaña'},
//         /*54*/    {name: 'FX1', category: 'Hibrida'},
//         /*55*/    {name: 'Dual Sport Gen 5', category: 'Hibrida'},
//         /*56*/    {name: 'Dual Sport 3 Gen 5', category: 'Hibrida'},
//         /*57*/    {name: 'Émonda SL 7', category: 'Ruta'},
//         /*58*/    {name: 'Émonda SL 6', category: 'Ruta'},
//         /*59*/    {name: 'Top Fuel 8 GX AXS tipo T', category: 'Montaña'},
//         /*60*/    {name: 'Fuel Exe 5', category: 'Montaña'},
//         ]
// }