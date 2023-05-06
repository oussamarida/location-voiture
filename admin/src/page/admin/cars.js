import React, { useContext } from 'react';
import Nav from './navBar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext';



function Cars () {


  const history = useNavigate();
  const { id } = useContext(AppContext);

  if (id === 1) {
    console.log(id)
    return (
      <div>
      <Nav />
      </div>
    );
  } else {
    return history("*")
  }
}

export default Cars;







