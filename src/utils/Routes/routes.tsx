import { Home } from '../../pages/Home/Home'
import { About} from '../../pages/About/About'
import { Services } from '../../pages/Services/Services'
import { Reviews } from '../../pages/Reviews/Reviews'
import { Contact } from '../../pages/Contact/Contact'
import type { RouteProps } from 'react-router-dom'



export const routes: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/reviews", element: <Reviews /> },
  { path: "/contact", element: <Contact /> },
];