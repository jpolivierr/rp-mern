import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'

 class Navigation extends Component {
     state = {
         modal: false,
         navbar: false
     }
    // changeNav = (e)=> {
    //     if(window.scrollY > 120){
    //         this.setState({navbar: true})
    //     }else{
    //         this.setState({navbar: false})
    //     }
    // }
     render(){

        //  window.addEventListener('scroll', this.changeNav )
          return (
              
               <div className = {`Navigation ${this.props.Position}`}
              
               > 
                
                <div className="container">
                     <div className="Nav-links ">

                 <div className="Logo2">
                   <Link to='/' >
                       <div className="logoimg2">
                   </div>
                   </Link>
                </div>  
                <ul className='links'> 
                    <Link style={{textDecoration:'none'}} to='/'><li className='active'> Home </li></Link> 
                    <Link style={{textDecoration:'none'}} to='/about' ><li>About Us</li></Link>
                    <Link style={{textDecoration:'none'}} to='/sellahome'><li>Sell A Home</li></Link>
                    <Link style={{textDecoration:'none'}} to='/properties'><li>properties</li></Link> 
                    <Link style={{textDecoration:'none'}} to ='/partners'><li>Our Partners</li></Link> 
                   <Link style={{textDecoration:'none'}} to='/contact'><li>Contact</li></Link> 
                </ul>

                <ul className="socials">
                    <li>
                        <div className="Menuebars" 
                        onClick={
                            (e)=> {
                                this.props.truemodal(true)
                            }
                        }
                        >
                <div className=" lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
                <div className="menuetext">Menue</div>
                </div>
                    </li>
                     <li className=' li-phone'>
                         <i className="fas fa-phone"></i>
                         <div className="drop-box phone-number">
                             786-895-8896
                         </div>
                         
                         </li>
                   <li className=' li-email'>
                       <i className="fas fa-envelope"></i>
                       <div className="drop-box email-number">
                             info@resurrectingproperties.com
                         </div>
                       </li>   
                </ul>
                </div>
                    </div>  
        </div>
    )
     }
}

export default Navigation