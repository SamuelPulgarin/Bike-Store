import React from "react";
import '../../assets/css/FacturaPDF.css'
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from '../../assets/img/Logo-circle.png'
import bikestore from '../../assets/img/Logo-short.png'




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
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
    logo: {
        width: '40px',
        height: 'auto',
        marginLeft: '10px', // Espacio entre las imágenes
    },
    marca: {
        position: 'absolute',
        width: '150px',
        height: 'auto',
        top: '15px',
        left: '50px'
    },
    bodyFactura: {
        border: '3px solid #000',
        borderRadius: '15px',
        margin: '12px',
        padding: '10px',
        height: '85vh',
    },
    client: {
        position: 'absolute',
        top: '8px',
        left: '5px',
        fontSize: '24px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    documento: {
        position: 'absolute',
        top: '8px',
        left: '320px',
        fontSize: '24px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    fecha: {
        position: 'absolute',
        top: '75px',
        left: '5px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    fechaN: {
        position: 'absolute',
        top: '75px',
        left: '230px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'black',
        lineHeight: 'normal'
    },
    refe: {
        position: 'absolute',
        top: '50px',
        left: '5px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'black',
        lineHeight: 'normal'
    },
    nrefe: {
        position: 'absolute',
        top: '50px',
        left: '230px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'black',
        lineHeight: 'normal'
    },
    linea: {
        height: '10px',
        width: '500px',
        border: '3px solid #262626',
        borderRadius: '5px',
        position: 'absolute',
        top: '115px',
        left: '25px',
        backgroundColor: '#262626'
    },
    titleProductos: {
        position: 'absolute',
        top: '130px',
        left: '5px',
        fontSize: '24px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    lineainferior: {
        height: '10px',
        width: '500px',
        border: '3px solid #262626',
        borderRadius: '5px',
        position: 'absolute',
        top: '500px',
        left: '25px',
        backgroundColor: '#262626'
    },
    nombreInfe: {
        position: 'absolute',
        top: '515px',
        left: '5px',
        fontSize: '24px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    docuInfe: {
        position: 'absolute',
        top: '515px',
        left: '290px',
        fontSize: '24px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    telefono: {
        position: 'absolute',
        top: '545px',
        left: '5px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    numeroTelefono: {
        position: 'absolute',
        top: '545px',
        left: '80px',
        fontSize: '16.5px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    acoEmail: {
        position: 'absolute',
        top: '565px',
        left: '5px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    email: {
        position: 'absolute',
        top: '565px',
        left: '55px',
        fontSize: '16.5px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    DateFactu: {
        position: 'absolute',
        top: '585px',
        left: '5px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    DateN: {
        position: 'absolute',
        top: '585px',
        left: '180px',
        fontSize: '16.5px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    pagoRef: {
        position: 'absolute',
        top: '605px',
        left: '5px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    numPagoRef: {
        position: 'absolute',
        top: '605px',
        left: '165px',
        fontSize: '17px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    TotalPagar: {
        position: 'absolute',
        top: '645px',
        left: '5px',
        fontSize: '20px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    NumTotalPagar: {
        position: 'absolute',
        top: '645px',
        left: '135px',
        fontSize: '20px',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    },
    PiePagina: {
        width: '100%',
        height: '52px',
        backgroundColor: '#262626'
    },
    fondoLogo: {
        width: '80px',
        height: '80px',
        backgroundColor: '#262626',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '610px',
        left: '460px'
    },
    LogoInfe: {
        width: '50px'
    }

});

export const FacturaPDF = () => {

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
                            <View style={styles.bodyFactura}>
                                <View>
                                    <Text style={styles.client}>
                                        Ricardo Polania Rubiano
                                    </Text>

                                    <Text style={styles.documento}>
                                        CC 1016713467
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
                                </View>

                                <View style={styles.lineainferior}>

                                </View>

                                <View>
                                    <Text style={styles.nombreInfe}>
                                        Ricardo Polania Rubiano
                                    </Text>
                                    <Text style={styles.docuInfe}>
                                        CC 1016713467
                                    </Text>
                                    <Text style={styles.telefono}>
                                        Telefono:
                                    </Text>
                                    <Text style={styles.numeroTelefono}>
                                        3205781997
                                    </Text>
                                    <Text style={styles.acoEmail}>
                                        Email:
                                    </Text>
                                    <Text style={styles.email}>
                                        rpolaniarubiano@gmail.com
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
    
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </div>
        </>
    );
};