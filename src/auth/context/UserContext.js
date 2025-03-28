
export const UserContext = () => {

    let users = [];
    let activeUser = {};

    const login = ( newUser ) => {

        users = JSON.parse(localStorage.getItem('users')) || [];

        return users.some(( user ) => {
            if(( user.name === newUser.name ) && ( user.password === newUser.password )) {
                activeUser = newUser;
                localStorage.setItem('activeUser', JSON.stringify(activeUser) );
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
        
    }

  return { users, activeUser, login, register, existUser, logout };
}
