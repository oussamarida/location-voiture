

import './nav.css';
import {  useEffect } from 'react';
import data from '../../jsonfile/locVoiture.json';
import data1 from '../../jsonfile/locVoitureCasa.json'
import data2 from '../../jsonfile/locVoitureRabat.json'
import data3 from '../../jsonfile/tanger.json'
import { useState } from 'react';
import Card from '../cards/cards';
import { Link } from 'react-router-dom';





function Nav() {


    useEffect(() => {
      let sidebar = document.querySelector(".sidebar");
      let closeBtn = document.querySelector("#btn");
  

      function menuBtnChange() {
        if(sidebar.classList.contains("open")){
          closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        }else {
          closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
      }

      closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange();
      });
      
    }, []); 







    const [selectedValue, setSelectedValue] = useState("");
    const [ville, setVille] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/ville')
          .then((response) => response.json())
          .then((data) => setVille(data))
          .catch((error) => console.error('Error:', error));
      }, []);
      

    function handleCardClick(data2) {
       
       const data = {nom: data2.nom,prix_jour: parseFloat(data2.prix), nombre_siege: data2.nbr_places , nbr_bagage:   data2.nbr_bagage   ,nbr_portes:data2.nbr_portes , climatise:data2.climatise_ou_pas , manuelle:data2.Manuelle , photourl:   data2.image , ville:get(selectedValue) };
       alert(`${data.nom}  added`);
       fetch('http://127.0.0.1:8000/voiture/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       })
         .then((response) => response.json())
         .then((data) => console.log('Success:', data))
         .catch((error) => console.error('Error:', error)); 
      }
        function get(nom){
            if(nom==='Marrakech'){
                    return 1;
            }
            if(nom==='Casablanca'){
                return 2;
            }
            if(nom==='Tanger'){
               return 4; 
            }else{
                return 3; 
            }
        }
 /*
        const {logout} = useContext(AuthContext)
        const navigate = useNavigate()

        const handleLogout=()=>{
          logout()
          navigate("/login")
        }
*/


    return (
      <div>
        {/* Created by CodingLab |www.youtube.com/CodingLabYT*/}
        <meta charSet="UTF-8" />
        {/*<title> Responsive Sidebar Menu  | CodingLab </title>*/}
        <link rel="stylesheet" href="style.css" />
        {/* Boxicons CDN Link */}
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="sidebar">
          <div className="logo-details">

            <div className="logo_name">Admin</div>
            <i className="bx bx-menu" id="btn" />
          </div>
          <ul className="nav-list">
            <li>
              <a href="/cars">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
            <Link  to="/user" >
                <i className="bx bx-user" />
                <span className="links_name">User</span>
                </Link>
              <span className="tooltip">User</span>


            </li>
            <li>
            <Link  to="/reservation" >
                <i className="bx bx-chat" />
                <span className="links_name">Reservation</span>
                </Link>
              <span className="tooltip">Reservation</span>
            </li>
           
        
        <li className="profile">
          <div className="profile-details">
            <div className="name_job">
              <div className="name">Admin</div>
              <div className="job">Admin</div>
            </div>
          </div>
          <Link  to="/login" >
          <i className="bx bx-log-out" id="log_out" style={{cursor : "pointer"}} />
        </Link>
          <i className="bx bx-log-out" id="log_out" style={{cursor : "pointer"}} />
        </li>
      </ul>
    </div>
    <section class="home-section">
      <div class="text">
      <div class="pt-8 pb-2 mb-3 border-bottom">
      <div class="row">
        <div>
            <h1>Cars </h1>
            <h2>Ville </h2>
            <select name="Ville"  id="Phone" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
            {ville.map((Ville, index) => (
                  <option value={Ville.nom} key={index}>{Ville.nom}</option>
                 ))}
            
        </select>
        </div>
        </div>
        <div class="row" >
        {selectedValue === 'Marrakech' ? (
            data.map((item) => <Card key={item.id} data={item} onClick={handleCardClick} />)
            ) : selectedValue === 'Casablanca' ? (
            data1.map((item) => <Card key={item.id} data={item} onClick={handleCardClick} />)
            ) : selectedValue === 'Tanger' ? (
                data3.map((item) => <Card key={item.id} data={item} onClick={handleCardClick} />)
                ) : (
            data2.map((item) => <Card key={item.id} data={item} onClick={handleCardClick} />)
            )}
        </div>
        </div> 
      </div>
  </section>
  </div>
    );

}
  
export default Nav;