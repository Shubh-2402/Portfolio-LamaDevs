import React from 'react'
import "./Menu.scss"

function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#intro">About</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#projects">Project</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>    
        </div>
    )
}

export default Menu
