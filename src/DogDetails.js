import React, { Component } from 'react';
import './DogDetails.css'
import {Link} from 'react-router-dom';

class DogDetails extends Component {
  render(){
    let thisDog = this.props.dog;
    return(
      <div className='DogDetails row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='DogDetails-card card'>
            <img className='card-img-top' src={thisDog.src} alt={thisDog.name}/>
            <div className='card-body'>
              <h2 className='card-title'>{thisDog.name}</h2>
              <h2 className='card-subtitle text-muted'>{thisDog.age} years old</h2>
            </div>
            <ul className='list-group list-group-flush'>
              {thisDog.facts.map((fact, i) => 
                <li className='list-group-item' key={i}>{fact}</li>
              )}
            </ul>
            <div className='card-body'>
              <Link to='/dogs' className='btn btn-info'>Go Back</Link>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default DogDetails;