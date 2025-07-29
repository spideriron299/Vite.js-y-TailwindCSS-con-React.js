import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail Show Product
    const [productToShow, setProductToShow] = useState({})


    console.log('COUNT: ', count)
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}