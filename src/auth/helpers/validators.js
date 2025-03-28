


export const validateForms = () => {

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/-]).{8,}$/;

  const validatePassword = ( name ) => {
    if (regex.test( name )) {
      return true;
    } else {
      return false;
    }
  }

  return { validatePassword }
}
