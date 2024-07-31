
import { Button } from '@material-tailwind/react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import CreateAds from './Components/CreateAds/CreateAds'
import CreateAccount from './Components/CreateAccount/CreateAccount'
import Proudects from './Components/Proudects/Proudects'
import CreateOffers from './Components/CreateOffers/CreateOffers'
import CreateBirthDay from './Components/CreateBirthDay/CreateBirthDay'

function App() {
    
  const routes = createBrowserRouter([
    {
      path : "/" , element : <Layout/> , children : [
        {index : true , element : <CreateAds/>},
        {path:"/CreateAccount" , element : <CreateAccount/>},
        {path:"/Proudects" , element: <Proudects/>},
        {path:"/CreateOffers", element:<CreateOffers/>},
        {path:"/CreateBirthDay" , element:<CreateBirthDay/>}

      ]
    }
  ])


  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
