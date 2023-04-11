import { createContext, useEffect, useState } from "react";
import { calculaTotalPedido } from '../utils/utils';

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

    //agregar zapatilla al carrito
    const agregarZapatilla = (zapatilla) => {
        const idx = zapatillasPedidas.findIndex((p) => p.id === zapatilla.id);

        if (idx > -1) {
            zapatillasPedidas[idx].cant += 1;
            setZapatillasPedidas([...zapatillasPedidas]);
        } else {
            const zapatillasSeleccionada = {
                id: zapatilla.id,
                nombre: zapatilla.nombre,
                precio: zapatilla.precio,
                img: zapatilla.img,
                cant: 1,
            };
            setZapatillasPedidas([...zapatillasPedidas, zapatillasSeleccionada]);
        }

        setTotalPedido(calculaTotalPedido(zapatillasPedidas));
    };



    return (

        <ContextoGlobal.Provider value={{
            lstUsuarios,
            setUsuario,
            usuario,
            lstProductos,
            setLstProductos,
            zapatillas,
            setZapatillas,
            buscar,
            setBuscar,
            searcher,
            resultado,
            totalPedido,
            setTotalPedido,
            zapatillasPedidas,
            setZapatillasPedidas,
            agregarZapatilla,
            calculaTotalPedido,
        }}>
            {props.children}
        </ContextoGlobal.Provider>
    )
}

export default ContextoGlobal

