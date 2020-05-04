import React from 'react';
import Regis from '../viwes/Registro';
import '../style/Home.css';
import Navbar from '../componentes/Navbar';

class Home extends React.Component{
  render(){
    return   (    
       <div>
    <Navbar/>
    <div className="New">

<div className="container">
<div className="row">
<div className="col">
 <Regis firstName="Burger Queen"/>
</div>
</div>
</div>
    </div>
</div>
);
}
}

export default Home;




