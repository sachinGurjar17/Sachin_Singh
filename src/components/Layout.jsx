import Navbar from "./Navbar";
import { Outlet ,ScrollRestoration} from "react-router-dom";
import { useEffect } from "react";

const Layout = ()=>{

    
    return (
        <>
          <div className=' bg-zinc-100 w-srceen flex flex-col h-secreen justify-center items-center overflow-x-hidden pb-6 dark:bg-zinc-900 '>          
              <Navbar/>
              <ScrollRestoration/>
              <Outlet/>
          </div>
        </>
    )
}

export default Layout

