

import './nav.css';
import './table.css';
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


    const [user , setusers]=useState([])
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/client')
        .then((response) => response.json())
        .then((data) => setusers(data))
        .catch((error) => console.error('Error:', error));
    }, []);


    const [users , setuserss]=useState([])
   
    useEffect(() => {
      fetch('http://127.0.0.1:8000/reservation')
        .then((response) => response.json())
        .then((data) => setuserss(data))
        .catch((error) => console.error('Error:', error));
    }, []);

 const [com , setcomte]=useState([])


    useEffect(() => {
      fetch('http://127.0.0.1:8000/client')
        .then((response) => response.json())
        .then((data) => setcomte(data))
        .catch((error) => console.error('Error:', error));
        console.log(com)
    }, []);




    const getClientById = (id) => {
      return com.find((u) => u.id === id);
    };

    const [activeDiv, setActiveDiv] = useState(1);

    const handleButtonClick = (divNumber) => {
      setActiveDiv(divNumber);
    };


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
            <a >
                <i className="bx bx-grid-alt" onClick={() => handleButtonClick(1)}/>
                <span className="links_name">Dashboard</span>
                </a>
              <span className="tooltip">Dashboard</span>
              
            </li>
            <li>
            <a >
                <i className="bx bx-user"onClick={() => handleButtonClick(2)} />
                <span className="links_name">User</span>
                </a>
              <span className="tooltip">User</span>


            </li>
            <li>
              <a>
                <i className="bx bx-chat"onClick={() => handleButtonClick(3)} />
                <span className="links_name">Reservation</span>
                </a>
              <span className="tooltip">Reservation</span>
            </li>
           
        
        <li className="profile">
          <div className="profile-details">
            <div className="name_job">
              <div className="name">Admin</div>
              <div className="job">Admin</div>
            </div>
          </div>
          <Link  to="/" >
          <i className="bx bx-log-out" id="log_out" style={{cursor : "pointer"}} />
      
          <i className="bx bx-log-out" id="log_out" style={{cursor : "pointer"}} />
          </Link>
        </li>
      </ul>
    </div>
    <section class="home-section">
    {activeDiv === 1 &&
      <div class="text" id='sectioncars'>
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
      }
      {activeDiv === 2 &&
         <section className="ftco-section" id="sectionusers">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Users</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>ID </th>
                      <th>Username</th>
                      <th>age</th>
                      <th>date_permis</th>
                      <th>ref_permis</th>
                      <th>Email</th>
                      <th>password</th>
                    </tr>
                  </thead>
                  <tbody>
                  {user.map((user, index) => (
                    <tr className="alert" role="alert" key={index}>
                      <td>{user.id}</td>
                      <th scope="row">{user.username}</th>
                      <td>{user.age}</td>
                      <td>{user.date_permis}</td>
                      <td>{user.ref_permis}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                    ))} 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
      {activeDiv === 3 &&
      <section className="ftco-section" id='sectionres'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Reservation</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>date_debut</th>
                      <th>date_fin</th>
                      <th>voiture</th>
                      <th>client</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user, index) => (
                    <tr className="alert" role="alert" key={index}>
                      <th scope="row">{user.date_debut}</th>
                      <td>{user.date_fin}</td>
                      <td>{user.voiture}</td>
                      <td>{getClientById(user.client)?.username}</td>
                    </tr>
                    ))} 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
  </section>
  </div>
    );

}
  
export default Nav;