export const initialstate = {
    basket:[],
    user:null
};

export const getBasketTotal = (basket)=> 
basket?.reduce((amount,item)=>item.price + amount , 0);

const reducer = (state,action) =>{
    
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            };

        case 'REMOVE_FROM_BASKET':
            //find id which is remove 
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id) 
             //create new basket for update basket
            let newBasket = [...state.basket];
            if(index >=0){
                ///remove id from basket item
              newBasket.splice(index,1)
            }else{
                alert(`not found fucking id ${action.id}`)
            }
            return {
                ...state , basket:newBasket
            };
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }    
        default:
           return state;
    }

}

export default reducer;
