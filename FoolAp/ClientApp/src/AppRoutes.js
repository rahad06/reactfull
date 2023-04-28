import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./Panel/Home"
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Panel from "./Panel";
import About from "./Panel/About";
import Contact from "./Panel/Contact";
import ContactUs from "./siteUI/pages/ContactUs";
import Blog from "./Panel/Blog";
import SiteHome from "./siteUI/pages/SiteHome";

const AppRoutes = [
  {
    index: true,
    element: <SiteHome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/panel',
    element: <Panel />,
    requireAuth: true
  },
  {
    path: '/panel/home',
    element: <Home />,
    requireAuth: true
  },
  {
    path: '/panel/about',
    element: <About />,
    requireAuth: true
  },
  {
    path: '/panel/contact',
    element: <Contact />,
    requireAuth: true
  },
  {
    path: '/panel/blog',
    element: <Blog />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
