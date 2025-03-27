


export const HomePage = () => {

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  return (
    <>
      <h1>Bienvenidooooooooooooooooooo</h1>
      <p>{ activeUser.name }</p>
    </>
  )
}
