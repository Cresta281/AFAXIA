import {useState,createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart ([...cart, productToAdd])
    }
    
    const getQuantity = () => {
        let number = 0 
        cart.forEach(prod => {
            number += prod.cantidad 
        })
        return number 
    }

   const isInCart = (id) => {
       return cart.some(prod => prod.id === id)
   }

   const clearCart = () => {
       setCart([])
   }

   const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
   }
   return (
       <cartContextProvider value={{
           cart,
           addItem,
           getQuantity,
           isInCart,
           clearCart,
           removeItem
       }}>
           {children}

       </cartContextProvider>
   )

}

export default CartContext 