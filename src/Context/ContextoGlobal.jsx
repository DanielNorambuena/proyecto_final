import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext({});

export const ContextoGlobalProvider = (props) => {
    const [usuario, setUsuario] = useState({});
    const [lstProductos, setLstProductos] = useState([]);


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

    return (
        <ContextoGlobal.Provider value={{ lstUsuarios, setUsuario, usuario, lstProductos, setLstProductos, zapatillas, setZapatillas }}>
            {props.children}
        </ContextoGlobal.Provider>
    )
}

export default ContextoGlobal

