import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <img src="https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg" alt="logo"/>  
        <button>Save <Bookmark size={10} /></button>        
      </div>
      <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
         <h2>Front-End Developer</h2>
         <div>
          <h4>Part time</h4>
          <h4>Remote</h4>
         </div>
      </div>
      <div className="bottom">
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
      </div>
    </div>
  )
}

export default Card
