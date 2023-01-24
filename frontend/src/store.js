import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'; 
import { cartReducer } from './reducers/cartReducers';
import Loader from './components/Loader';
import { userLoginReducer,userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducers';

const reducer= combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
})
const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const cartItemsFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []



const shippingAddressFromStorage=localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : null

const initialState= {
    cart: { cartItems: cartItemsFromStorage , 
            shippingAddress: shippingAddressFromStorage,
        },
    userLogin: {userInfo:userInfoFromStorage},
}

const middleware= [thunk]

const store = configureStore(
    {reducer: reducer}, 
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)


export default store