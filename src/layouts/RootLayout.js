import { NavLink, Outlet } from 'react-router-dom'



function RootLayout() {
  return (
    <div className='rootLayout'>
      <header className='App-head'>
        <nav>
          <h1>Mauristo Router</h1>
          <NavLink to="/">Home</NavLink><br />
          <NavLink to="about">About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>


  )
}

export default RootLayout