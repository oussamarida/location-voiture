

import './card.css';
function Card2(props) {

    return (
            <div class="card-view" >
                <div class="card-header avengerEndgame">
                    <div class="card-header-icon">
                    <img className='voiture' src={props.data.photourl} alt="Your Image" />
                    </div>
                </div>

                <div class="card-movie-content">
                    <div class="card-movie-content-head">
                        <a href="#">
                            <h3 class="card-movie-title">{props.data.nom}</h3>
                        </a>
                        <div class="ratings"><span>{props.data.prix_jour}</span>$</div>
                    </div>
                    <div class="card-movie-info">
                        
                        <div class="movie-running-time">
                            <label>{props.data.climatise_ou_pas}</label>
                            <span>{props.data.Manuelle}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
  
  export default Card2;