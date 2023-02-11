import Home from "./Pages/Home/Home"
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import Navbar from "./Pages/Others/Navbar";
import Header from "./Pages/Others/Header";



function App() {
  

  return (
    <div className="">
      
      
      {/* <Navbar></Navbar>
      <Header></Header> */}
      <RouterProvider router={router}></RouterProvider>
      <CssBaseline />
    </div>
  )
}

export default App
