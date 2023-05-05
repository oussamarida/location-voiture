import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Card2 from "./cards/card2";


function Main() {


  const [ville, setVille] = useState([]);

 
  const [VilleZ, setVilleZ] = useState('');

  const handleVilleZChange = (event) => {
      setVilleZ(event.target.value);
    };


  const [voiture, setvoiture] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:8000/ville')
      .then((response) => response.json())
      .then((data) => setVille(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  
  useEffect(() => {
    console.log(ville);
  }, [ville]);


    
    useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/voiture/?nom=&prix_jour=&nombre_siege=&nbr_bagage=&nbr_portes=&climatise=&manuelle=&photourl=&ville=${VilleZ}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setvoiture(responseData);
      })
      .catch((error) => console.error(error));
  }, [VilleZ]);

  const [datedebut, setdatedebut] = useState('');
  const handledatedebutChange = (event) => {
    setdatedebut(event.target.value);
  };
  const [datefin, setdatefin] = useState('');
  const handlesetdatefinChange = (event) => {
    setdatefin(event.target.value);
  };

  const history = useNavigate();

  function handleClickutl() {
    history('/');
  }

 
    return (
      <div>
      <header>
        <a href="#home" className="logo">
          <h1>Car Renting</h1>
        </a>
        <div className="bx bx-menu" id="menu-icon" />
        <ul className="navbar">
          <li><a href="/">HOME</a></li>
          <li><a href="/">SERVICE</a></li>
          <li><a href="#ride">RIDE</a></li>
         
        <div className="header-btn">
          <a href="/login" className="sign-in">Log in</a>
        </div>
        </ul>
       
      </header>
      <section className="home" id="home">
        <div className="text">
          <h1><span>Trouvez</span> une <br />voiture en location ?</h1>
          <p>Location de voitures a Marrakech,Casablanca , Tanger et rabat au meilleur prix!</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleClickutl
          }  >
             
            <div className="input-box">
              <span>Location</span>
           
              <select id="search"  name="search" value={VilleZ}  onChange={handleVilleZChange}   required>
              <option value disabled selected>--Choisir votre Location--</option>
                {ville.map((Ville, index) => (
                  <option value={Ville.id} key={index}>{Ville.nom}</option>
                 ))}                                         
              </select>
            </div>
            <div className="input-box">
              <span>Pick-Up Day</span>
              <input type="date" name="PD" value={datedebut}  onChange={handledatedebutChange} id required />
            </div>
            <div className="input-box">
              <span>Return Day</span>
              <input type="date" name="RD" value={datefin} onChange={handlesetdatefinChange} id required />
          
            </div>
            <Link to= {"/search/"+VilleZ+"/"+datedebut+"/"+datefin} >
                <button className="btn"  type="submit">Search</button>
              </Link>
          </form>
          
        </div>
      </section>
      <section className="ride" id="ride">
        <div className="ride-container">
          <div className="box">
            <i className="bx bx-stopwatch" />
            <h2>Kilométrage illimité</h2>
            <p>Profitez de nos véhicules sans aucunes limites!</p>
          </div>
          <div className="box">
            <i className="bx bxs-purchase-tag-alt" />
            <h2>Véhicules neufs</h2>
            <p>L'ensemble de notre parc automobile à moins d'un an.</p>
          </div>
          <div className="box">
            <i className="bx bxs-microphone" />
            <h2>24/7 Support et aide</h2>
            <p>Nous sommes à votre service durant toute la durée de votre location.</p>
          </div>
        </div>
      </section>
      <hr />
      <section className="services" id="services">
        <div className="heading">
          <span>Meilleurs services</span>
          <h1>Découvrez les meilleures offres  <br /> des revendeurs les mieux notés</h1>
        </div>
        <div className="services-container">
        {voiture.map((Voiture) => <Card2 key={Voiture.id} data={Voiture}  />)
          }
        </div>                     
      </section>
      <hr />
      <section className="help" id="help">
        <div className="heading">
          <span>Comment ça marche?</span>
          <h1>Louez en 3 étapes faciles</h1>
        </div>
        <div className="help-container">
          <div className="box">
            <i className="bx bx-current-location" />
            <h2>Choisissez votre véhicule</h2>
            <p>Sélectionnez le véhicule de votre choix en quelques clics</p>
          </div>
          <div className="box">
            <i className="bx bxs-hand-up" />
            <h2>Réservez en quelques clics</h2>
            <p>Sélectionnez le véhicule de votre choix en quelques clics</p>
          </div>
          <div className="box">
            <i className="bx bx-check" />
            <h2>Prenez le volant and GO !!</h2>
            <p>Sélectionnez le véhicule de votre choix en quelques clics</p>
          </div>
        </div>
      </section>
      <hr />
      <section className="contact" id="contact">
        <section className="contact-container">
          <div className="box">
            <i className="bx bxs-phone-call" />
            <h2>+56131561 call me ;</h2>
            <p>Vous avez une question?
              Contactez-nous tous les jours
              de 10h à 20h!</p>
          </div>
          <div className="box">
            <i className="bx bxs-shield-alt-2" />
            <h2>Paiement Sécurisé</h2>
            <p>Réservez aujourd’hui et
              payez un acompte
              de 15% seulement!</p>
          </div>
          <div className="box">
            <i className="bx bx-smile" />
            <h2>Sourire Garanti!</h2>
            <p>Rent Car à
              sélectionné pour vous
              les meilleurs véhicules!</p>
          </div>
        </section>
      </section>
      <div className="copyright">
        <p>©  Copyright All Right Reserved</p>
        <div className="social">
          <a href="https://www.facebook.com"><i className="bx bxl-facebook" /></a>
          <a href="https://www.instagram.com"><i className="bx bxl-instagram" /></a>
          <a href="https://fr.linkedin.com"><i className="bx bxl-linkedin" /></a>
        </div>
      </div>
    </div>
    );
  }
  
  export default Main;
  
  
  
  