import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user";
import cartReducer from "./cart/reducer";
import directoryReducer from "./directory/reducer";
import shopReducer from "./shop/reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
    
});

export default persistReducer(persistConfig, rootReducer);