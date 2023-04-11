import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext({});

export const ContextoGlobalProvider = (props) => {
    const [usuario, setUsuario] = useState({});
    const [lstProductos, setLstProductos] = useState([]);
    const [zapatillasPedidas, setZapatillasPedidas] = useState([]);
    const [totalPedido, setTotalPedido] = useState(0);

    const lstUsuarios = [
        {
            email: 'daniel@gmail.com',
            clave: '123',
            name: 'Daniel',
        },
        {
            email: 'daniela@gmail.com',
            clave: '123',
            name: 'Daniela',
        },
    ];

    const [zapatillas, setZapatillas] = useState([]);


    //Llamado a la API
    const getZapatillas = async () => {
        const res = await fetch(`http://localhost:3000/sneakers.json`);
        const data = await res.json();
        setZapatillas(data);
    }

    useEffect(() => {
        getZapatillas();
    }, []);


<<<<<<< HEAD
    //busqueda
    const [buscar, setBuscar] = useState('');
    //funcion buscar
    const searcher = (e) => {
        setBuscar(e.target.value)
    }

    //Filtro busqueda
    let resultado = [];
    if (!buscar) {
        resultado = zapatillas
    } else {
        resultado = zapatillas.filter((dato) =>
            dato.nombre.toLowerCase().includes(buscar.toLocaleLowerCase())
        )
    }

    return (

        <ContextoGlobal.Provider value={{ lstUsuarios, setUsuario, usuario, lstProductos, setLstProductos, zapatillas, setZapatillas, buscar, setBuscar, searcher, resultado }}>
=======






    return (
        <ContextoGlobal.Provider value={{ lstUsuarios, setUsuario, usuario, lstProductos, setLstProductos, zapatillas, setZapatillas, zapatillasPedidas, setZapatillasPedidas, totalPedido, setTotalPedido }}>
>>>>>>> 327dce29d316158418d97c582c743524a119728f
            {props.children}
        </ContextoGlobal.Provider>
    )
}

export default ContextoGlobal

