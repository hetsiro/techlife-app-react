import { useReducer } from "react";


const initialState = JSON.parse(localStorage.getItem('activeUser')) || {};

// const [ activeUser, setActiveUser ] = useState(JSON.parse(localStorage.getItem('activeUser')) || {})

const userReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN': {
            const activeUser = { isLogged: true, ...action.payload };
            localStorage.setItem('activeUser', JSON.stringify(activeUser));
            return activeUser;
        }
    
        case 'LOGOUT': {
            const activeUser = {}
            localStorage.removeItem('activeUser');
            return activeUser;
        }
    
        case 'UPDATE': {
            const activeUser = { ...action.payload };
            localStorage.setItem('activeUser', JSON.stringify(activeUser));
            return activeUser;
        }
    
        default:
        return state;
    }
    };

export const UserContext = () => {

    const [ activeUser, dispatch ] = useReducer(userReducer, initialState)

    const login = ( newUser ) => {

        const users = JSON.parse(localStorage.getItem('users')) || [];

        return users.some(( user ) => {
            if(( user.name === newUser.name ) && ( user.password === newUser.password )) {
                dispatch({ type: 'LOGIN', payload: { ...user }}); // Logear usuario
                return true;
            }
            return false;
        })
    }
    
    const register = ( newUser ) => {

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const exist = existUser( newUser )

        if(!exist){
            const newUsers = [...users, newUser]
            localStorage.setItem('users', JSON.stringify(newUsers) );
            dispatch({ type: 'LOGIN', payload: { ...newUser }}) // Logear usuario registrado
        }
    }

    const updateAvatar = ( avatar ) => {
        dispatch({ type: 'UPDATE', payload: avatar })
    }

    const existUser = ( name ) => {

        const users = JSON.parse(localStorage.getItem('users')) || [];

        return users.some(( user ) => {
            if( user.name === name ) {
                return true;
            }
            return false;

        })
    }

    const logout = () => {
        dispatch({ type: 'LOGOUT', payload: {}})
    }

  return { activeUser, updateAvatar, login, register, existUser, logout };
}
