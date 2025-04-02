import { useContext, useEffect, useState } from 'react'
import { validateForms } from '../auth/helpers/validateForms';
import { AuthContext } from '../auth/context';


export const useFormValidator = ( name, password, passwordRepeat, avatar, typeFormProfile = false ) => {

const [ valid, setValid ] = useState(false)

const { existUser } = useContext(AuthContext);

const { validatePassword } = validateForms();

 const [ errorName, setErrorName ] = useState({
    type: 'Nombre debe ser mayor a 4 carácteres',
    error: false,
  });

  const [ errorPassword, setErrorPassword ] = useState({
    type: 'La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial',
    error: false,
  });

  const [ errorPasswordRepeat, setErrorPasswordRepeat ] = useState({
    type: 'Las contraseñas deben ser iguales',
    error: false,
  });

  const [ errorExist, setErrorExist ] = useState({
    type: 'El usuario ya se encuentra registrado',
    error: false,
  });

  const [ errorImage, setErrorImage ] = useState({
    type: 'Inserte una imagen',
    error: false,
  });

  useEffect(() => {

    setValid(true);

    // Validador de formulario
    if (name.length < 4) {
      setErrorName(( ) => ({ type: 'Nombre debe contener más de 4 carácteres', error: true }) );
      setValid(false);
    } else {
      setErrorName(( ) => ({ type: 'Nombre válido!', error: false }) );
    }

    if ( !validatePassword( password ) ) {
      setErrorPassword(( ) => ({ type: 'La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial', error: true }) );
      setValid(false);
    } else {
      setErrorPassword(( ) => ({ type: 'La contraseña es segura!', error: false }) );
    }

    if (password !== passwordRepeat) {
      setErrorPasswordRepeat(( ) => ({ type: 'Las contraseñas no son iguales', error: true }) );
      setValid(false);
    } else {
      setErrorPasswordRepeat(( ) => ({ type: 'Las contraseñas son iguales!', error: false }) );
    }

    if( !typeFormProfile ){
        if ( existUser( name ) ){
            setErrorExist(( ) => ({ type: 'El usuario ya se encuentra registrado', error: true }) );
            setValid(false);
            } else {
            setErrorExist(( ) => ({ type: 'Usuario disponible!', error: false}) );
            }
    }

    if(avatar === null){
      setErrorImage(( ) => ({ type: 'Inserte una imágen', error: true}) );
      setValid(false);
    } else {
      setErrorImage(( ) => ({ type: 'Imagen subida!', error: false}) );
    }

}, [name, password, passwordRepeat, avatar])

  return { errorName, errorPassword, errorPasswordRepeat, errorExist, errorImage, valid }
}
