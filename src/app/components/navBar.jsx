import React from 'react'
import MyMenu from './pageMenu'


function NavBar() {
  return (
    <div className="flex max-w-6xl justify-between  mx-auto overflow-hidden my-6">
        
        
        <div className="mx-5">
            Logo
        </div>
        <MyMenu />
        
               

       
    </div>
  )
}

export default NavBar