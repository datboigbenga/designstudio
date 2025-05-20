import { Home } from '../../pages/Home/Home'
import { About} from '../../pages/About/About'
import { Services } from '../../pages/Services/Services'
import { Reviews } from '../../pages/Reviews/Reviews'
import { Contact } from '../../pages/Contact/Contact'
import type { RouteProps } from 'react-router-dom'

const testimonials = [
  {
    message: "This is a great service!",
    internName: "John Doe",
    internImage: "/src/assets/culture.webp",
  },
  {
    message: "I highly recommend this company.",
    internName: "Jane Smith",
    internImage: "/src/assets/culture.webp",
  },
  {
    message: "This is a great service!",
    internName: "John Doe",
    internImage: "/src/assets/culture.webp",
  },
  {
    message: "I highly recommend this company.",
    internName: "Jane Smith",
    internImage: "/src/assets/culture.webp",
  },
];

export const routes: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/reviews", element: <Reviews testimonials={testimonials} /> },
  { path: "/contact", element: <Contact /> },
];
