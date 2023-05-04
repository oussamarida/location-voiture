import { Link, useParams } from "react-router-dom";

import "./search.css";
import { useEffect, useState } from "react";

export default function Search() {
  let { VilleZ } = useParams();
  let { datedebut } = useParams();
  let { datefin } = useParams();

  
  const [voiture, setvoiture] = useState([]);
  const [Maxprice, setMaxprice] = useState(0);
  const [Minprice, setMinprice] = useState(0);

  const handleMaprix = (event) => {
    setMaxprice(parseFloat(event.target.value));
  };

  const handleMinrix = (event) => {
    setMinprice(parseFloat(event.target.value));
  };

  const handlechSubmit2 = () => {
    fetch(
      `http://127.0.0.1:8000/voiture/?nom=&prix_jour=&nombre_siege=&nbr_bagage=&nbr_portes=&climatise=&manuelle=&photourl=&ville=${VilleZ}&type=`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setvoiture(responseData);
      })
      .catch((error) => console.error(error));
    const filteredVoiture = voiture.filter(
      (car) =>
        parseFloat(car.prix_jour) >= Minprice &&
        parseFloat(car.prix_jour) <= Maxprice
    );
    setvoiture(filteredVoiture);
    console.log(filteredVoiture);
    console.log(voiture)
  };

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/voiture/?nom=&prix_jour=&nombre_siege=&nbr_bagage=&nbr_portes=&climatise=&manuelle=&photourl=&ville=${VilleZ}&type=`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setvoiture(responseData);
      })
      .catch((error) => console.error(error));
    console.log("noooo");
  }, []);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>complete responsive real estate website design tutorial</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <header>
        <a href="/" className="logo">
          <span>Memo</span>Cars
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
        </nav>
      </header>
      <section className="home" id="home">
        <form action>
          <h3>find your perfect Cars</h3>
          <div className="inputBox">
            <input
              type="number"
              name={Minprice}
              onChange={handleMinrix}
              placeholder="Price min"
              style={{ borderRadius: "40px" }}
              id
            />
            <input
              type="number"
              name={Maxprice}
              onChange={handleMaprix}
              placeholder="Price max"
              style={{ borderRadius: "40px" }}
              id
            />
            <select name id style={{ borderRadius: "40px" }}>
              <option value disabled hidden selected>
                Bagage
              </option>
              <option value="1 bagages">1 Bagage</option>
              <option value="2 bagages">2 Bagage</option>
              <option value="3 bagages">3 Bagage</option>
              <option value="4 bagages">4 Bagage</option>
              <option value="4 bagages">5 Bagage</option>
            </select>
            <select style={{ borderRadius: "40px" }} name id>
              <option value disabled hidden selected>
                Portes
              </option>
              <option value="1 portes">1 Portes</option>
              <option value="2 portes">2 Portes</option>
              <option value="3 portes">3 Portes</option>
              <option value="4 portes">4 Portes</option>
              <option value="5 portes">5 Portes</option>
            </select>
            <select style={{ borderRadius: "40px" }} name id>
              <option value disabled hidden selected>
                Place
              </option>
              <option value="1 places">1 place</option>
              <option value="2 places">2 place</option>
              <option value="3 places">3 place</option>
              <option value="4 places">4 place</option>
              <option value="5 places">5 place</option>
            </select>
            <fieldset>
              <legend>Climatise:</legend>
              <div>
                <input type="radio" id="scales" name="climatise" checked />
                <label htmlFor="scales">Climatise</label>
              </div>
              <div>
                <input type="radio" id="horns" name="climatise" />
                <label htmlFor="horns">Non Climatise</label>
              </div>
            </fieldset>
            <select style={{ borderRadius: "40px" }} name id>
              <option value disabled hidden selected>
                Type
              </option>
              <option value="AUTOMATIQUE">AUTOMATIQUE</option>
              <option value="Manuelle">MANUELLE</option>
            </select>
          </div>
          <input
            type="button"
            onClick={handlechSubmit2}
            value="Recherche"
            className="btn"
          />
        </form>
      </section>
      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <span>Cars</span> Disponible{" "}
        </h1>

        <div className="box-container">
          {voiture.map((Voiture, index) => (
            <div className="box" key={index}>
              <div class="card-header avengerEndgame">
                <div class="card-header-icon">
                  <img className="voiture" src={Voiture.photourl} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="price">
                  <h3>{Voiture.prix_jour}/jour</h3>
                </div>
                <div className="location">
                  <h3>{Voiture.nom}</h3>
                </div>
                <div className="details">
                  <h3> {Voiture.nombre_siege} </h3>
                  <h3> {Voiture.nbr_bagage} </h3>
                  <h3> {Voiture.nbr_portes} </h3>
                  <h3> {Voiture.climatise} </h3>
                  <h3> {Voiture.manuelle} </h3>
            
                </div>
                <div className="buttons">
                  <Link className="btn" to= {"/login/"+Voiture.id+"/"+datedebut+"/"+datefin} >
                <button className="btn"  type="submit">Reserver </button>
                
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="footer">
        <div className="footer-container">
          <div className="box-container">
            <div className="box">
              <h3>Github</h3>
              <a href="https://github.com/oussamarida">Oussama</a>
            </div>
            <div className="box">
              <h3>linkedin</h3>
              <a href="https://www.linkedin.com/in/oussama-rida-701850210/">
                Oussama rida
              </a>
            </div>
          </div>
          <div className="credit">
            created by{" "}
            <span>
              <a href="/">Oussama</a>
            </span>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}