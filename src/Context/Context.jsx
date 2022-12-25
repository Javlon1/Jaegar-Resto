import { createContext, useState } from 'react'
const Context = createContext()
function Provider({children}) {
    const [id, setId] = useState(0)
    const [order, setOrder] = useState([])
    return (
        <Context.Provider value={{id, setId, order, setOrder}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider}