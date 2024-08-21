import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'



function RootLayout() {
  return (
    <div className='rootLayout'>
      <header className='App-head'>
        <h1>Mauristo Router</h1>
        <nav className='nav'>

          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="about" className="nav-link">About</NavLink>
          <NavLink to="help" className="nav-link">Help</NavLink>
          <NavLink to="careers" className="nav-link">Careers</NavLink> 
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>


  )
}

export default RootLayout