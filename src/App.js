import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

//pages

import Home from './pages/Home';
import About from './pages/About';

//Layout
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help">
        <Route path="faq"/>
        <Route path="contact"/>
      </Route>
    </Route>
  )
)

function App() {
  return (


    <RouterProvider router={router} />
  );
}

export default App;
