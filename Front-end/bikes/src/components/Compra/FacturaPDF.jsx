import React from "react";
import '../../assets/css/FacturaPDF.css'
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from '../../assets/img/Logo-circle.png'
import bikestore from '../../assets/img/Logo-short.png'
import { useSelector } from 'react-redux';
import { flushSync } from "react-dom";


const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
    },
    document: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-around',
        width: '100%',
        height: '50px',
        backgroundColor: '#262626',
    },
    // title: {
    //     fontSize: 16,
    //     marginBottom: 10,
    // },
    logo: {
        width: '40px',
        height: 'auto',
        marginLeft: '10px',
    },
    marca: {
        position: 'absolute',
        width: '150px',
        height: 'auto',
        top: '15px',
        left: '50px'
    },
    // bodyFactura: {
    //     border: '3px solid #000',
    //     borderRadius: '15px',
    //     margin: '12px',
    //     padding: '10px',
    //     height: '85vh',
    // },
    // client: {
    //     position: 'absolute',
    //     top: '8px',
    //     left: '5px',
    //     fontSize: '24px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // documento: {
    //     position: 'absolute',
    //     top: '8px',
    //     left: '320px',
    //     fontSize: '24px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // fecha: {
    //     position: 'absolute',
    //     top: '75px',
    //     left: '5px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // fechaN: {
    //     position: 'absolute',
    //     top: '75px',
    //     left: '230px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: 'black',
    //     lineHeight: 'normal'
    // },
    // refe: {
    //     position: 'absolute',
    //     top: '50px',
    //     left: '5px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: 'black',
    //     lineHeight: 'normal'
    // },
    // nrefe: {
    //     position: 'absolute',
    //     top: '50px',
    //     left: '230px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: 'black',
    //     lineHeight: 'normal'
    // },
    // linea: {
    //     height: '10px',
    //     width: '500px',
    //     border: '3px solid #262626',
    //     borderRadius: '5px',
    //     position: 'absolute',
    //     top: '115px',
    //     left: '25px',
    //     backgroundColor: '#262626'
    // },
    // titleProductos: {
    //     position: 'absolute',
    //     top: '130px',
    //     left: '5px',
    //     fontSize: '24px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // lineainferior: {
    //     height: '10px',
    //     width: '500px',
    //     border: '3px solid #262626',
    //     borderRadius: '5px',
    //     position: 'absolute',
    //     top: '500px',
    //     left: '25px',
    //     backgroundColor: '#262626'
    // },
    // nombreInfe: {
    //     position: 'absolute',
    //     top: '515px',
    //     left: '5px',
    //     fontSize: '24px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // docuInfe: {
    //     position: 'absolute',
    //     top: '515px',
    //     left: '290px',
    //     fontSize: '24px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // telefono: {
    //     position: 'absolute',
    //     top: '545px',
    //     left: '5px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // numeroTelefono: {
    //     position: 'absolute',
    //     top: '545px',
    //     left: '80px',
    //     fontSize: '16.5px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // acoEmail: {
    //     position: 'absolute',
    //     top: '565px',
    //     left: '5px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // email: {
    //     position: 'absolute',
    //     top: '565px',
    //     left: '55px',
    //     fontSize: '16.5px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // DateFactu: {
    //     position: 'absolute',
    //     top: '585px',
    //     left: '5px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // DateN: {
    //     position: 'absolute',
    //     top: '585px',
    //     left: '180px',
    //     fontSize: '16.5px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // pagoRef: {
    //     position: 'absolute',
    //     top: '605px',
    //     left: '5px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // numPagoRef: {
    //     position: 'absolute',
    //     top: '605px',
    //     left: '165px',
    //     fontSize: '17px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // TotalPagar: {
    //     position: 'absolute',
    //     top: '645px',
    //     left: '5px',
    //     fontSize: '20px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // NumTotalPagar: {
    //     position: 'absolute',
    //     top: '645px',
    //     left: '135px',
    //     fontSize: '20px',
    //     color: '#000',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     lineHeight: 'normal'
    // },
    // PiePagina: {
    //     width: '100%',
    //     height: '52px',
    //     backgroundColor: '#262626'
    // },
    // fondoLogo: {
    //     width: '80px',
    //     height: '80px',
    //     backgroundColor: '#262626',
    //     borderRadius: '50%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     position: 'absolute',
    //     top: '610px',
    //     left: '460px'
    // },
    // LogoInfe: {
    //     width: '50px'
    // },
    // ContenedorProducts: {
    //     position: 'absolute',
    //     top: '160px',
    //     width: '100%',
    //     backgroundColor: 'red',
    //     display: "flex",
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     marginBottom: '20px'
    // },
    // titleBike: {
    //     fontWeight: 'bold',
    //     fontSize: '20px',
    //     marginTop: '12px'
    // },
    // contenidoBikes: {
    //     fontSize: '17px',
    //     marginTop: '3px'
    // },
    // lineapeque: {
    //     height: '1px',
    //     width: '90%',
    //     border: '1px solid #262626',
    //     borderRadius: '50%',
    //     backgroundColor: '#262626',
    //     left: '26px',
    //     marginTop: '10px'
    // }
    cuerpo: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    marco: {
        width: '570px',
        height: '90%',
        border: '3px solid #262626',
        borderRadius: '10px'
    },
    contenidoSup: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',

    },
    contendor2: {
        flexDirection: 'row', // Para que los elementos se coloquen en fila
        justifyContent: 'flex-start', // Esto simula 'justify-content: space-between' en flexbox
        marginBottom: 10, // Espacio entre cada fila
    },
    principal: {
        fontSize: '24px',
        fontWeight: "bold",
        margin: '10px 10px',
    },
    secudario: {
        fontSize: '17px',
        margin: '0px 10px'
    },
    linea1: {
        height: '5px',
        border: '5px solid #262626',
        borderRadius: '10px',
        width: '90%',
        backgroundColor: '#262626',
        marginLeft: '26px'
    },
    cotenidoProductos:{
        margin: '5px',
    },
    product: {
        marginLeft: '10px',
    },
    secun: {

    },
    prin: {
        fontSize: '19px',
        fontWeight: "bold",
    },
    lineapeque: {
        height: '1px',
        width: '90%',
        border: '1px solid #262626',
        borderRadius: '50%',
        backgroundColor: '#262626',
        left: '20px',
        marginTop: '10px'
    }

});

export const FacturaPDF = () => {

    const facturaData = useSelector((state) => state.factura.dataFactura);
    const cartItems = useSelector((state) => state.carrito.items);
    console.log(facturaData)
    console.log(cartItems)

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    return (
        <>
            <div style={styles.document}>
                <PDFViewer width="100%" height="1000vh">
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.header}>
                                <Image src={logo} style={styles.logo} />
                                <Image src={bikestore} style={styles.marca} />
                            </View>
                            <View style={styles.cuerpo}>
                                <View style={styles.marco}>
                                    <View style={styles.contenidoSup}>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.principal}>Nombre de cliente</Text>
                                            <Text style={styles.principal}>CC 1016713467</Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.secudario}>Refencia de pago:</Text>
                                            <Text style={styles.secudario}>0082456</Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.secudario}>Fecha de Facturación:</Text>
                                            <Text style={styles.secudario}>{formattedDate}</Text>
                                        </View>
                                    </View>
                                    
                                    <View style={styles.linea1}>

                                    </View>

                                    <View style={styles.cotenidoProductos}>
                                        <Text style={styles.principal}>Productos:</Text>
                                        <View style={styles.product}>
                                            <View style={styles.contendor2}>
                                                <Text style={styles.prin}>Bicicleta GW</Text>
                                                <Text style={styles.prin}>ID 123</Text>
                                            </View>
                                            <Text style={styles.secun}>Cantidad: 1</Text>
                                            <Text style={styles.secun}>Precio: $ 1.000.000</Text>
                                            <View style={styles.lineapeque}></View>

                                            </View>
                                    </View>

                                    <View style={styles.linea1}>

                                    </View>

                                </View>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </div>
        </>
    );
};

{/* <View style={styles.bodyFactura}>
                                <View>
                                    <Text style={styles.client}>
                                        {facturaData[0].dataClient.Nombre} {facturaData[0].dataClient.Apellidos}
                                    </Text>

                                    <Text style={styles.documento}>
                                        {facturaData[0].dataClient.TipoDocumento} {facturaData[0].dataClient.Documento}
                                    </Text>

                                    <Text style={styles.refe}>
                                        Referencia de Pago:
                                    </Text>

                                    <Text style={styles.nrefe}>
                                        01190910
                                    </Text>

                                    <Text style={styles.fecha}>
                                        Fecha de Facturación:
                                    </Text>

                                    <Text style={styles.fechaN}>
                                        {formattedDate}
                                    </Text>

                                </View>

                                <View style={styles.linea}>

                                </View>

                                <View>
                                    <Text style={styles.titleProductos}>
                                        Productos:
                                    </Text>
                                    
                                    <View style={styles.ContenedorProducts}>
                                        <Text style={styles.titleBike}>Nombre de una bicicleta GW  ID: 1</Text>
                                        <Text style={styles.contenidoBikes}>Cantidad: 1</Text>
                                        <Text style={styles.contenidoBikes}>Precio: $ 1.900.000</Text>
                                        <View style={styles.lineapeque}></View>

                                        <Text style={styles.titleBike}>Nombre de una bicicleta GW  ID: 1</Text>
                                        <Text style={styles.contenidoBikes}>Cantidad: 1</Text>
                                        <Text style={styles.contenidoBikes}>Precio: $ 1.900.000</Text>
                                        <View style={styles.lineapeque}></View>

                                        <Text style={styles.titleBike}>Nombre de una bicicleta GW  ID: 1</Text>
                                        <Text style={styles.contenidoBikes}>Cantidad: 1</Text>
                                        <Text style={styles.contenidoBikes}>Precio: $ 1.900.000</Text>
                                        <View style={styles.lineapeque}></View>

                                        <Text style={styles.titleBike}>Nombre de una bicicleta GW  ID: 1</Text>
                                        <Text style={styles.contenidoBikes}>Cantidad: 1</Text>
                                        <Text style={styles.contenidoBikes}>Precio: $ 1.900.000</Text>
                                        <View style={styles.lineapeque}></View>
                                    </View>
                                </View>

                                <View style={styles.lineainferior}>

                                </View>

                                <View>
                                    <Text style={styles.nombreInfe}>
                                        {facturaData[0].dataClient.Nombre} {facturaData[0].dataClient.Apellidos}
                                    </Text>
                                    <Text style={styles.docuInfe}>
                                        {facturaData[0].dataClient.TipoDocumento} {facturaData[0].dataClient.Documento}
                                    </Text>
                                    <Text style={styles.telefono}>
                                        Telefono:
                                    </Text>
                                    <Text style={styles.numeroTelefono}>
                                        {facturaData[0].dataClient.Telefono}
                                    </Text>
                                    <Text style={styles.acoEmail}>
                                        Email:
                                    </Text>
                                    <Text style={styles.email}>
                                        {facturaData[0].dataClient.email}
                                    </Text>
                                    <Text style={styles.DateFactu}>
                                        Fecha de Facturación:
                                    </Text>
                                    <Text style={styles.DateN}>
                                        {formattedDate}
                                    </Text>
                                    <Text style={styles.pagoRef}>
                                        Referencia de Pago:
                                    </Text>
                                    <Text style={styles.numPagoRef}>
                                        2793873917
                                    </Text>
                                    <Text style={styles.TotalPagar}>
                                        Total a Pagar:
                                    </Text>
                                    <Text style={styles.NumTotalPagar}>
                                        $ 5.390.000
                                    </Text>
                                    <View style={styles.fondoLogo}>
                                        <Image src={logo} style={styles.LogoInfe}/>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.PiePagina}>
    
                            </View> */}