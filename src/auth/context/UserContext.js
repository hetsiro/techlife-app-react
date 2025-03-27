
export const UserContext = () => {

    let users = [];
    let activeUser = {};
    console.log('Creando active user vacio...')

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

        const existUser = users.some(( user ) => {
            if( user.name === newUser.name ) {
                activeUser = newUser;
                console.log(activeUser);
                return true;
            }
            return false;
             
        })

        if(!existUser){
            const newUsers = [...users, newUser]
            localStorage.setItem('users', JSON.stringify(newUsers) );
            console.log('Usuario Agregado con exito!', newUsers);
        } else {
            console.log('Usuario ya existe!');
        }
    }

    const logout = () => {

        localStorage.removeItem('activeUser');
        
    }

  return { users, activeUser, login, register, logout };
}
