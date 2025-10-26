import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import PickupPage from "./Pages/PickupPage";
import WhatsAppButton from "./Components/WhatsAppButton";




function App() {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element= {<MainLayout />}>
      <Route path="/" element= {<Home />} />
      <Route path="/pickup" element= {<PickupPage />} />
      
      
    </Route>
  )
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
