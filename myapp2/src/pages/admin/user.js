import './nav.css';
import { useEffect } from 'react';

function Users() {
    useEffect(() => {
      let sidebar = document.querySelector(".sidebar");
      let closeBtn = document.querySelector("#btn");
      let searchBtn = document.querySelector(".bx-search");
  
      closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange();
      });
  
      searchBtn.addEventListener("click", ()=>{ 
        sidebar.classList.toggle("open");
        menuBtnChange(); 
      });
  
      function menuBtnChange() {
        if(sidebar.classList.contains("open")){
          closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        }else {
          closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
      }
    }, []); 
  


    return (
      <div>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="style.css" />
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="sidebar">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus icon" />
            <div className="logo_name">CodingLab</div>
            <i className="bx bx-menu" id="btn" />
          </div>
          <ul className="nav-list">
            <li>
              <i className="bx bx-search" />
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>
            <li>
              <a href="/cars">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="/users">
                <i className="bx bx-user" />
                <span className="links_name">User</span>
              </a>
              <span className="tooltip">User</span>
            </li>
            <li>
              <a href="/reservation">
                <i className="bx bx-chat" />
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
          <i className="bx bx-log-out" id="log_out" />
        </li>
      </ul>
    </div>
    <section class="home-section">
      <div class="text">
      <div class="pt-8 pb-2 mb-3 border-bottom">
     heytrfhgggggggggggggggggggg
        </div> 
      </div>
  </section>
  </div>
    );

}
  
export default Users;