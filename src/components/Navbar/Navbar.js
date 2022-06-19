import React, { useState } from 'react';
import { Link } from "react-router-dom"
import '../../styles/Navbar.css'
import Logo from '../../assets/Logo.png'
import FilterHdrIcon from '@mui/icons-material/FilterHdr';

function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);
    // const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavbar = () => {
        setToggleNav(!toggleNav);
    }

    // useEffect(() => {
    //     const changeWidth = () => {
    //         setLargeur(window.innerWidth);
    //         if (window.innerWidth > 550) {
    //             setToggleMenu(false);
    //         }
    //     }

    //     window.addEventListener('resize', changeWidth);

    //     return () => {
    //         window.removeEventListener('resize', changeWidth);
    //     }

    // }, [])

    return (
        <div className="navbar" >
            <div className="leftSide" id={toggleNav ? "open" : "close"}>
                <img src={Logo} alt="logo" />
                <div className="hiddenLinks">
                    <Link to="/Accueil" className="items">Accueil</Link>
                    <Link to="/Produit" className="items">Produit</Link>
                    <Link to="/Contact" className="items">Contact</Link>
                    <Link to="/Panier" className="items">Panier</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/Accueil" className="items">Accueil</Link>
                <Link to="/Produit" className="items">Produit</Link>
                <Link to="/Contact" className="items">Contact</Link>
                <Link to="/Panier" className="items">Panier</Link>
                <button onClick={toggleNavbar}>
                    <FilterHdrIcon />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
