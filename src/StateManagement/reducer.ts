export interface CartType {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
}
export interface ShopState {
    loading: boolean;
    cart: CartType[];
    total: number;
    amount: number;
}

export enum ShopActionTypes {
    CLEAR_CART = 'CLEAR_CART',
    REMOVE_ITEM = 'REMOVE_ITEM',
    TOGGLE_AMOUNT = 'TOGGLE_AMOUNT',
    LOADING = 'LOADING',
    DISPLAY_ITEMS = 'DISPLAY_ITEMS',
    GET_TOTAL = 'GET_TOTAL',
}

export interface TOGGLE_AMOUNT_TYPE {
    id: number;
    type: 'inc' | 'dec'
}


type ShopAction = { type: typeof ShopActionTypes.DISPLAY_ITEMS, payload: CartType[] }
    | { type: typeof ShopActionTypes.CLEAR_CART }
    | { type: typeof ShopActionTypes.LOADING }
    | { type: typeof ShopActionTypes.GET_TOTAL }

const reducer = (state: ShopState, action: ShopAction) => {
    switch (action.type) {
        case ShopActionTypes.DISPLAY_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        case ShopActionTypes.GET_TOTAL:
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem
                    const itemTotal = price * amount

                    cartTotal.total += itemTotal
                    cartTotal.amount += amount
                    return cartTotal
                },
                {
                    total: 0,
                    amount: 0,
                }
            )
            total = parseFloat(total.toFixed(2))
            return { ...state, total, amount }

        case ShopActionTypes.CLEAR_CART:
            return state

        case ShopActionTypes.LOADING:
            return { ...state, loading: true }
            
        default:
            return state
    }
}

export default reducer;