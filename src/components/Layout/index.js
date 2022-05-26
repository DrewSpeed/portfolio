import { Outlet } from 'react-router-dom'
import Nav from '../Navigation/';


const Layout = () => {
  return (
    <body>
    <div className="App">
      <Nav />
      <main>

        <Outlet />

      </main>
      
    </div>
    
    </body>
  )
}

export default Layout