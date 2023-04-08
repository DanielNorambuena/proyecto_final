import { createContext, useState } from "react";

export const ContextoGlobal = createContext({});

export const ContextoGlobalProvider = (props) => {



    const [conectado, setConectado] = useState(false);





    const lstUsuarios = [
        {
            email: 'daniel@gmail.com',
            clave: '123',
            name: 'Daniel',
        },
        {
            email: 'daniela@gmail.com',
            clave: '1234',
            name: 'Daniela',
        },
    ];

    return (
        <ContextoGlobal.Provider value={{ lstUsuarios, setConectado, conectado }}>
            {props.children}
        </ContextoGlobal.Provider>
    )
}

export default ContextoGlobal

