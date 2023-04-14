import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext({});

export const ContextoGlobalProvider = (props) => {
    const [usuario, setUsuario] = useState({});
    const [lstProductos, setLstProductos] = useState([]);
    const [zapatillasPedidas, setZapatillasPedidas] = useState([]);
    const [totalPedido, setTotalPedido] = useState(0);
    const [zapatillasLike, setZapatillasLike] = useState([]);

    const lstUsuarios = [
        {
            id: '1',
            email: 'daniel@gmail.com',
            clave: '123',
            name: 'Daniel',
            img: 'https://media.istockphoto.com/id/509286952/es/foto/mantener-sonriendo.jpg?s=612x612&w=0&k=20&c=-K11x3Ryv5-aBV4dkm30GKrn1lfXi2z3gfVHnZEOT_U=',
            rut: '20.158.418-8',
            telefono: '+569 4512 4852',
            direccion: 'Villa Dulce #4523',
        },
        {
            id: '2',
            email: 'daniela@gmail.com',
            clave: '123',
            name: 'Daniela',
            img: 'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000',
            rut: '21.548.369-4',
            telefono: '+569 8542 4152',
            direccion: 'Villa Rojas #1784',
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
    };
    const total = zapatillasPedidas.reduce((a, { cant, precio }) => a + precio * cant, 0);

    //agregar zapatilla a favoritos
    const agregarFavorito = (zapatilla) => {
        const idx = zapatillasLike.findIndex((p) => p.id === zapatilla.id);

        if (idx > -1) {
            zapatillasLike[idx].cant += 0;
            setZapatillasLike(zapatillasLike);
        } else {
            const zapatillaLikeSeleccionada = {
                id: zapatilla.id,
                nombre: zapatilla.nombre,
                precio: zapatilla.precio,
                precioanterior: zapatilla.precioanterior,
                img: zapatilla.img,
                cant: 1,
            }
            setZapatillasLike([...zapatillasLike, zapatillaLikeSeleccionada]);
        }
    }
    const totalLike = zapatillasLike.reduce((a, { cant }) => a + cant, 0);





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
            zapatillasLike,
            setZapatillasLike,
            totalLike,
            agregarFavorito,
            total,
        }}>
            {props.children}
        </ContextoGlobal.Provider>
    )
}

export default ContextoGlobal

