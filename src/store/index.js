
import {configureStore,createSlice} from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";
//store //display counter remains as it is
const counterStore= configureStore({reducer:{
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
}})


export default counterStore;




/*
const  counterReducer= (store = INITIAL_VALUE, action)=>{
    if (action.type==='INCREMENT'){
     return {...store,counter: store.counter + 1}
    }
    else if (action.type==='DECREMENT'){
    return {...store,counter: store.counter - 1};
    }
    else if (action.type==='ADD'){
    return {...store,counter: store.counter + Number( action.payload.num)};
    }
    else if (action.type==='SUB'){
    return {...store,counter: store.counter - Number(action.payload.num)};
    }
     else if (action.type==='PRIVACY_TOGGLE'){
    return {...store,privacy:!store.privacy};
    }

    return store;
}
const  counterStore = createStore(counterReducer);
export default counterStore; */