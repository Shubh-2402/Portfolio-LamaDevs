import React from 'react'
import "./Topbar.scss"
import {Email, GitHub, Instagram, LinkedIn} from "@mui/icons-material"
import { IconButton } from '@mui/material';

function Topbar({menuOpen,setMenuOpen}){
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio.</a>
                    <div className="links">
                        <IconButton className="icon">
                            <a href="mailto:patilshubham852@gmail.com" target="_blank" rel="noreferrer">
                                <Email className="link"/>
                            </a>
                        </IconButton>
                        <IconButton className="icon">
                            <a href="https://www.linkedin.com/in/shubham-patil-596175191/" target="_blank" rel="noreferrer">    
                                <LinkedIn className="link"/>
                            </a>
                        </IconButton>
                        <IconButton className="icon">
                            <a href="https://github.com/Shubh-2402" target="_blank" rel="noreferrer">
                                <GitHub className="link"/>
                            </a>
                        </IconButton>
                        <IconButton className="icon">
                            <a href="https://www.instagram.com/shubham_2402/" target="_blank" rel="noreferrer">
                                <Instagram className="link"/>
                            </a>
                        </IconButton>
                        
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
