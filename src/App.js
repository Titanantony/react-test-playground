import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';



//Layout
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';


//pages

import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './NotFound';
import Careers, { careersLoader } from './pages/Careers/Careers';
import CareersDetail, { careerDetailsLoader } from './pages/Careers/CareersDetail';
import CareerError from './pages/Careers/CareerError';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />}/>
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path='careers' element={<CareersLayout loader={careerDetailsLoader}/>}>
        <Route 
        index 
        element={<Careers />}
        loader={careersLoader} 
        />
        <Route 
        path=':id' 
        element={<CareersDetail />}
        
        errorElement={<CareerError/>}
        /> 

      </Route>

      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (


    <RouterProvider router={router} />
  );
}

export default App;
