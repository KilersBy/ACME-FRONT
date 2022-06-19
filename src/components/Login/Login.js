import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import BannerImage from '../../assets/loginback.jpg'

const url = 'http://localhost:3001/user/login'


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {

            const result = await axios.post(url, { email, password })
            console.log("Connexion réussi")
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
            localStorage.setItem("Token", result.data.token);

            navigate(`/Accueil`);
        }
        catch (error) {
            console.log("Echec de connexion")
            console.log(error);
        }
    };

    return (
        <section className='Login-div' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <p className='petitp'>Connexion</p>
                    <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} value={email} required />
                    <br></br>
                    <input type="password" placeholder='Mot de passe' onChange={e => setPassword(e.target.value)} value={password} required />
                    <br></br>
                    <button className="buttonlogin" type="submit">Connexion</button>
                    <br></br>
                    <a href="/">Mot de passe oubliée</a>
                </form>
            </div>
        </section>
    )
}
