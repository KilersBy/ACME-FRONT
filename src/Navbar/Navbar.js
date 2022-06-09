import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import Logo from './Logo.png'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 550) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 550) && (
                <ul className="liste">
                    <img src={Logo} alt="" className='logo' />
                    <Link to="/Home" className="items">Accueil</Link>
                    <Link to="/Product" className="items">Produit</Link>
                    <Link to="/Contact" className="items">Contact</Link>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='btn'>BTN</button>
        </nav>
    );
};

export default Navbar;