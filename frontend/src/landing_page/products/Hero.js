import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center mt-5 p-3'>
            <h1 className='fs-2'>Zerodha Products</h1>
            <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-3'>Check out our &nbsp;
                <Link to="#"  
                style={{ textDecoration: "none", color: "#387ed1", fontWeight: "500" }}>
                    investment offerings 
                    &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
            </p>
            </div>
        </div>
      );
}

export default Hero;