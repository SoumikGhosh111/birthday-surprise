import React from 'react';
import flwr1 from "../../assets/flwr-1.jpg";
import flwr2 from "../../assets/flwr-2.jpg";
import flwr3 from "../../assets/flwr-3.jpg";
import flwr4 from "../../assets/flwr-4.jpg";
import initImg from "../../assets/init-img.jpg";
import img1 from "../../assets/sneha-import-7.jpg";
import img2 from "../../assets/sneha-import-8.jpg";
import img3 from "../../assets/sneha-import-9.jpg";
import img4 from "../../assets/sneha-import-10.jpg";
import video from "../../assets/birthday-video.mp4";
import "./styles.css";
import "./animation.css";

function ImageGalary() {
    return (
        <div className='image-gallary'>
            {/* <img className='image-gallary-init-img' src={initImg} /> */}
            <video autoPlay loop muted className="background-video image-gallary-init-img">
                <source src={video} type="video/mp4" />
            </video>
            <div className='gallary'>
                <div className='gallary-items'>
                    <div className='gallary-items-img spring-1'><img className='bg-img' src={flwr1} /> <img className='main-img' src={img4} /></div>
                    <span className='text spring-text-1'>
                        WHERE Life BEGINS <br />
                        ----- and -----<br />
                        Love NEVER ENDS
                    </span>
                </div>
                <div className='gallary-items flex-direction'>
                    <div className='gallary-items-img spring-2'><img className='bg-img' src={flwr2} /> <img className='main-img' src={img3} /></div>
                    <span className='text spring-text-2'>
                        Home is where you <br />
                        are loved <br />
                        the most <br />
                        and act <br />
                        the worst.
                    </span>
                </div>
                <div className='gallary-items'>
                    <div className='gallary-items-img spring-3'><img className='bg-img' src={flwr3} /> <img className='main-img' src={img2} /></div>
                    <spna className='text spring-text-3'>
                        Great personality can <br />make <br /> everyone happy
                    </spna>
                </div>
                <div className='gallary-items flex-direction'>
                    <div className='gallary-items-img spring-4'><img className='bg-img' src={flwr4} /> <img className='main-img' src={img1} /> </div>
                    <span className='text spring-text-4'>
                        Sticking with <br /> your family
                        is <br /> what makes <br />
                        it a family
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ImageGalary