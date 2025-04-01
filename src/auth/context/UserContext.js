import { useState } from "react";

export const UserContext = () => {

    let users = [];
    const [ activeUser, setActiveUser ] = useState(JSON.parse(localStorage.getItem('activeUser')) || {})

    const login = ( newUser ) => {

        users = JSON.parse(localStorage.getItem('users')) || [];

        return users.some(( user ) => {
            if(( user.name === newUser.name ) && ( user.password === newUser.password )) {
                setActiveUser({isLogged: true, ...user});
                localStorage.setItem('activeUser', JSON.stringify({isLogged: true, ...user}) );
                return true;
            }
            return false;
        })
    }
    
    const register = ( newUser ) => {

        users = JSON.parse(localStorage.getItem('users')) || [];

        const exist = existUser( newUser )

        if(!exist){
            const newUsers = [...users, newUser]
            localStorage.setItem('users', JSON.stringify(newUsers) );
        }
    }

    const existUser = ( name ) => {

        users = JSON.parse(localStorage.getItem('users')) || [];

        return users.some(( user ) => {
            if( user.name === name ) {
                return true;
            }
            return false;

        })
    }

    const logout = () => {
        localStorage.removeItem('activeUser');
        setActiveUser({});
    }

  return { users, activeUser, setActiveUser, login, register, existUser, logout };
}
