import React from "react";
import '../../assets/css/FacturaPDF.css'
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from '../../assets/img/Logo-circle.png'
import bikestore from '../../assets/img/Logo-short.png'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import carritoSlice from "../../redux/carritoSlice";
import dataFactureSlice from "../../redux/dataFactureSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


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
    cuerpo: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '30px'
    },
    marco: {
        width: '570px',
        height: '730px',
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
    cotenidoProductos: {
        margin: '5px',
    },
    product: {
        marginTop: '5px',
        marginLeft: '10px'
    },
    secun: {
        fontSize: '14px',
        marginTop: '10px'
    },
    prin: {
        fontSize: '16px',
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
    },
    FooterPro: {
        width: '100%',
        position: 'relative',
        bottom: '0'
    },
    fondoImg: {
        width: '80px',
        height: '80px',
        backgroundColor: '#262626',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        right: '0',
        bottom: '0',
        margin: '10px 10px'
    }

});

const convertPriceToNumber = (priceString) => {
    // Remueve el signo de dólar, comas y puntos, y convierte la cadena en un número entero
    const numericPrice = parseInt(priceString.replace(/\$|\.|,/g, ''), 10);
    // Divide por 100 para eliminar los dos últimos ceros
    return numericPrice / 100;
};

export const FacturaPDF = () => {

    const dataStorageForm = JSON.parse(localStorage.getItem('facturaData'));
    console.log(dataStorageForm);
    const dataCarrito = JSON.parse(localStorage.getItem('carritoData'));
    console.log(dataCarrito);

    // Calcula el precio total usando reduce y la función de conversión
    const totalPrice = dataCarrito.reduce((total, item) => {
        if (item.data) {
            return (total + convertPriceToNumber(item.data.precio)) * parseInt(item.data.cantidad);
        }
        return total;
    }, 0);


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
                                            <Text style={styles.principal}>
                                                {dataStorageForm.Nombre} {dataStorageForm.Apellidos}
                                            </Text>
                                            <Text style={styles.principal}>
                                                {dataStorageForm.TipoDocumento} {dataStorageForm.Documento}
                                            </Text>
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
                                        {dataCarrito.map((item, index) => (
                                            <View style={styles.product} key={index}>
                                                <View style={styles.contendor2}>
                                                    <Text style={styles.prin}>
                                                        {item.data.nombre}
                                                    </Text>
                                                    <Text style={styles.prin}>
                                                        ID: {item.data.id}
                                                    </Text>
                                                </View>
                                                <Text style={styles.secun}>
                                                    Cantidad: {item.data.cantidad}
                                                </Text>
                                                <Text style={styles.secun}>
                                                    Precio: {item.data.precio}
                                                </Text>
                                                <View style={styles.lineapeque} />
                                            </View>
                                        ))}
                                    </View>

                                    <View style={styles.FooterPro}>
                                        <View style={styles.linea1}>

                                        </View>

                                        <View style={styles.contendor2}>
                                            <Text style={styles.principal}>
                                                {dataStorageForm.Nombre} {dataStorageForm.Apellidos}
                                            </Text>
                                            <Text style={styles.principal}>
                                                {dataStorageForm.TipoDocumento} {dataStorageForm.Documento}
                                            </Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.secudario}>Telefono celular:</Text>
                                            <Text style={styles.secudario}>
                                                +57 {dataStorageForm.Telefono}
                                            </Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.secudario}>Email:</Text>
                                            <Text style={styles.secudario}>
                                                {dataStorageForm.email}
                                            </Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.secudario}>Dirección:</Text>
                                            <Text style={styles.secudario}>
                                                {dataStorageForm.Direccion}
                                            </Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.secudario}>
                                                Fecha de Facturación:
                                            </Text>
                                            <Text style={styles.secudario}>
                                                {formattedDate}
                                            </Text>
                                        </View>
                                        <View style={styles.contendor2}>
                                            <Text style={styles.principal}>
                                                Precio Total:
                                            </Text>
                                            <Text style={styles.principal}>
                                                ${totalPrice.toFixed(2)}
                                            </Text>
                                        </View>
                                        <View style={styles.fondoImg}>
                                            <Image src={logo}></Image>
                                        </View>
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