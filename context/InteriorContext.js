import { createContext, useState } from "react";



const InteriorContext=createContext("")

const InteriorProvider=({children})=>
{
    const [isSidebarOpen,setSidebarOpen]=useState(false)
    const openSidebar=()=>
    {
        setSidebarOpen(true)
    }
    const closeSidebar=()=>
    {
        setSidebarOpen(false)
    }
    return <InteriorContext.Provider value={{isSidebarOpen,openSidebar,closeSidebar}}>
        {children}
    </InteriorContext.Provider>
}


export {InteriorContext,InteriorProvider}