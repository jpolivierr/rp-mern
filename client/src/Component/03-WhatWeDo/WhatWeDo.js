import React from 'react'
import './WhatWeDo.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'
// import {HashLink} from 'react-router-hash-link'

class WhatWeDo extends Component {
    render(){
        
      return (
        <div className='WhatWeDo'>
            <div className="W-bkg"></div>
            <div className="WhatWeDo-main-section">
                <div className="container">
                    <div className="WhatWeDo-box">
                        <div className="box buy">
                            <div className="box-img buy-img" onClick={(e)=>{
                                console.log(e.target.getBoundingClientRect().top)
                                console.log(window.pageYOffset)
                            }}>  
                           <p>Buy A Home</p>
                            </div>
                            {/* <h3>Buy A Home</h3> */}
                            <p>When our customers find the property they have been looking for, we trust that we informed
them on every indicator relevant to them, that they browsed a highly targeted selection of
properties that matched their <br/>
                            </p>
                             <Link to='/properties' style={{textDecoration:'none'}}>
                             <span className='link'>View Listings &nbsp; &nbsp; <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span>
                             </Link>
                             

                        </div>
               <div className="box sell">
                            <div className="box-img sell-img">
                            <p>Sell A Home</p>
                            </div>
                            {/* <h3>Sell A Home</h3> */}
                            <p>We work with homeowners all over South Florida in a number
of different circumstances. We buy houses in any condition,
and as cash buyers we are able to close quickly and on your
time. <br/>
                            </p>
                            <Link to='/sellahome' style={{textDecoration:'none'}} >
                            <span className='link'>Read more &nbsp; &nbsp; <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span>
                            </Link>
                             
                        </div>
                        <div className="box workwithus">
                            <div className="box-img work-img">
                            <p>Work With Us</p>
                            </div>
                            {/* <h3>Work With Us</h3> */}
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad consectetur adipisicing elitconsectetur adipisicing elit  sit amet consectetur adipisicing <br/>
                                
                            </p>
                            <Link to='/partners' style={{textDecoration:'none'}}>
                            <span className='link'>Read more &nbsp; &nbsp; <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span>
                            </Link>
                             
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
    }
     
   
}
export default WhatWeDo