import { createContext, useState } from "react";

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





    return (
        <ContextoGlobal.Provider value={{ lstUsuarios, setUsuario, usuario, lstProductos, setLstProductos }}>
            {props.children}
        </ContextoGlobal.Provider>
    )
}

export default ContextoGlobal

