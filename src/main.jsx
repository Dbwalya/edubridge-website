import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from "./App.jsx";
import StudyAbroad from "./components/study-abroad/StudyAbroad.jsx";
import Services from "./components/services/Services.jsx";
import SocialEnterprise from './components/social-enterprise/SocialEnterprise.jsx';

const router = createBrowserRouter([
    { path: 'Edubridge-github', element: <App />},
    { path: '/Edubridge-github/study-abroad', element: <StudyAbroad />},
    { path: '/Edubridge-github/services', element: <Services />},
    { path: '/Edubridge-github/social-enterprise', element: <SocialEnterprise />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
