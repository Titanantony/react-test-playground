import { Link, useLocation } from "react-router-dom"

function Breadcrumbs() {

    const location = useLocation()

    console.log(location.pathname)

    let currentLink = "";
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink =+ `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })


  return (
    <div>{crumbs}</div>
  )
}

export default Breadcrumbs