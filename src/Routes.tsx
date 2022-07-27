import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";

export function AppRoutes(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
            </Routes>  
        </BrowserRouter>      
    )
}