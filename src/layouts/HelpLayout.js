import React from "react"
import "./Help.css"
import { NavLink, Outlet } from "react-router-dom"
function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website help</h2>
            <p>Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  </p>
            
            <nav className="nav">
                <NavLink to="faq" className="nav-link">View the FAQ</NavLink>
                <NavLink to="contact" className="nav-link">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HelpLayout