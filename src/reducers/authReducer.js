import {
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: []
}

export default function (state = INITIAL_STATE, action)
{
    console.log(action.payload);
    switch (action.type) {
        case AUTHENTICATE_USER:
        const {user} = action.payload;
        //console.log(action.payload);
            return {
                ...state,
                authenticated: true,
                user
            }
   
        default: return state;
    }
}