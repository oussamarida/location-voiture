import React from 'react';
import Nav from './navBar';







function Cars() {

  /*
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!currentUser) navigate.push("/login")
  },[currentUser])
*/
  return (
    <div>
        <Nav />
    </div>
  );
}

export default Cars;