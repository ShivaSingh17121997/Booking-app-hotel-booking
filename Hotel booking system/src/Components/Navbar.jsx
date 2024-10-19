import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [hovered, setHovered] = useState(false);

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: '#ffffff',
    };

    const linkStyle = {
        margin: '0 15px',
        textDecoration: 'none',
        color: hovered ? '#61dafb' : '#ffffff',
        fontSize: '18px',
        transition: 'color 0.3s',
    };

    return (
        <div style={navbarStyle}>
            <div>
                <Link 
                    to="/" 
                    style={linkStyle} 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                >
                    Home
                </Link>
               
                <Link 
                    to="/login" 
                    style={linkStyle} 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
