import React from 'react';
import "./styles.css";
import initImg from "../../assets/init-img.jpg";



import CarouselComp from '../Carousel';

import "./animation.css";

function LoadingPage() {



    return (
        <div className='loading-page-wrapper' >
           
            <div className='bg'></div>
            <div className='laoding-page'
            >
                <div className='button-loading'>
                    <button className='loading-page-button' onClick={() => window.location.href = 'birthday/gallary'}>Happy Coin</button>
                </div>
                <div className='init-img'>
                    {/* <img src={initImg} style={{zIndex: 10000}} /> */}
                    <CarouselComp />
                </div>
                <div className='h1-div'> <h1>Happy Birth Day Kaku</h1></div>

                <div className='kobita'>
                    < div>
                        <span className='slide-srpring-1' >মনের আকাশ আলো করে</span> <br />
                        <span className='slide-srpring-2'>হৃদর ভরুক নতুন সুরে</span> <br />
                        <span className='slide-srpring-3'>জীবন পথের নৌকা চড়ে</span> <br />
                        <span className='slide-srpring-4'>যেতে হবে অনেক দূরে</span> <br />
                        <span className='slide-srpring-5'>খুশির আভাস ছড়িয়ে পড়ুক</span> <br />
                        <span className='slide-srpring-6'>সীমান্তের ওই দূর নগরে</span> <br />
                        <span className='slide-srpring-7'>জন্মদিনের শুভেচ্ছা দিলাম</span> <br />
                        <span className='slide-srpring-8'>নিও তুমি হৃদয় ভরে</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage



