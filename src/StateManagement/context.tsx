import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import reducer, { CartType, ShopActionTypes, ShopState } from "./reducer";

// Public URL by John Smilga
const url = 'https://course-api.com/react-useReducer-cart-project';

interface ShopContextProviderProps {
    children: ReactNode
}

const defaultValue: ShopState = {
    loading: false,
    cart: [],
    amount: 0,
    total: 0,
}

interface ShopContextDefault {
    shopValue: ShopState,
    clearCart: () => void
}

export const ShopContext = createContext<ShopContextDefault>({
    shopValue: defaultValue,
    clearCart: () => null,
})

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
    const [shopValue, dispatch] = useReducer(reducer, defaultValue);

    const fetchData = async () => {
        dispatch({ type: ShopActionTypes.LOADING })
        try {
            const response = await fetch(url);
            const cart: CartType[] = await response.json();
            dispatch({
                type: ShopActionTypes.DISPLAY_ITEMS,
                payload: cart
            })
        } catch (error: any) {
            console.log(error)
        }
    }

    const clearCart = () => {
        dispatch({ type: ShopActionTypes.CLEAR_CART })
    }

    // Fetch Data at first load
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({ type: ShopActionTypes.GET_TOTAL })
    }, [shopValue.cart])

    return (
        <ShopContext.Provider value={{ shopValue, clearCart }}>
            {children}
        </ShopContext.Provider>
    )
}
export const useShopContext = () => {
    return useContext(ShopContext)
}
export default ShopContextProvider