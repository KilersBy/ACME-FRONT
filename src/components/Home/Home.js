import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import '../../styles/Home.css';
import BannerImage from '../../assets/randonneur.jpg'
// import SliderData from './SliderData.js';
// import { SliderImg } from './SliderImg.js';


function Home() {
    return (
        <div>
            <Navbar />
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="headerContainer">
                    <h1>Visez le sommet</h1>
                    <p> plus fort, plus haut, plus vite</p>
                    <Link to="/Produit">
                        <button> Commandez maintenant </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;


// function Home() {
//     return (
        //Affichage du slider
//         <div>
//             <Navbar />
//             <div className="container p-5">
//                 <h1 className="display-3 text-black text-center">
//                     Bienvenue
//                 </h1>
//             </div>
//             {/* <div className='section'>
//                 <SliderData slides={SliderImg} />
//             </div> */}
//         </div>
//     );
// };

// export default Home;