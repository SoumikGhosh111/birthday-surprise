import React, { useRef, useState, useEffect } from 'react'
import img1 from "../../assets/sneha-import-6.jpg";
import img2 from "../../assets/sneha-import-1.jpg";
import img3 from "../../assets/sneha-import-2.jpg";
import img4 from "../../assets/sneha-import-3.jpg";
import img5 from "../../assets/sneha-import-4.jpg";
import img6 from "../../assets/sneha-import-5.jpg";
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import "./styles.css";

function CarouselComp() {
    let imageContainerRef = useRef(null); 
    const image = [img1, img2, img3, img4, img5, img6];
    const [currentIndex, setCurrentIndex]  = useState(0); 
    const [isClicked, setIsClicked] = useState(false); 
    const prev = () => { 
        if(currentIndex > 0){ 
            setCurrentIndex(currentIndex - 1); 
        }else{ 
            setCurrentIndex(image.length - 1); 
        }
        console.log("I am pressed"); 
    } 
    const next = () => { 
        if(currentIndex < image.length - 1){ 
            setCurrentIndex(currentIndex  +1); 
        }else{ 
            setCurrentIndex(0); 
        }
        console.log("I am pressed"); 
    }

    React.useEffect(() => {
        let container = imageContainerRef.current;
        if (container) {
            let scrollPosition = 0;
            for (let i =   0; i < currentIndex; i++) {
                const imgElement = container.children[i];
                if (imgElement) {
                    scrollPosition += imgElement.offsetWidth;
                    const margin = window.getComputedStyle(imgElement).marginRight;
                    scrollPosition += parseFloat(margin);
                }
            }
            // Scroll to the start of the current image
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    useEffect(() => {
        if (isClicked) {
            const timer = setTimeout(() => {
                setIsClicked(false);
            },  100); // Reset after  100ms
            return () => clearTimeout(timer); // Clear the timeout if the component unmounts
        }
    }, [isClicked]);

    return (
        <div className='main-container'>
            <div className={`button-class ${isClicked ? 'clicked' : ''}`} onClick={prev}>
                <KeyboardDoubleArrowLeftRoundedIcon />
            </div>
            <div className='caro-container' ref={imageContainerRef}>
                {image.map((img, indx) => {
                    return <img src={img} key={indx} alt={`imageNo.${indx +  1}`} />
                })}
            </div>
            <div className={`button-class ${isClicked ? 'clicked' : ''}`} onClick={next}>
                <KeyboardDoubleArrowRightRoundedIcon />
            </div>
        </div>
    )
}

export default CarouselComp; 