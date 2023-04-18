import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children, storeGlobal }) => {

    const [store, setStore] = useState(storeGlobal);
    useEffect(() => {
        const fetchData = async () => {
            const res1 = await fetch(window.location.origin + `/usuarios.json`)
            const data1 = await res1.json();
            setStore(prevState => ({ ...prevState, usuarios: data1 }))
            const res2 = await fetch(window.location.origin + `/perfumes.json`);
            const data2 = await res2.json();
            setStore(prevState => ({ ...prevState, perfumes: data2 }))
        }
        fetchData();
    }, [])

    return (
        <AppContext.Provider value={{ store, setStore }}>
            {children}
        </AppContext.Provider>
    );
};

export const useStore = () => {
    return useContext(AppContext);
};

export default AppProvider;