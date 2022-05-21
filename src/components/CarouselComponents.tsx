import React, { useState } from 'react';
import '../App.css';
import leftIcon from '../resources/left-24.png';
import rightIcon from '../resources/right-24.png';

export const CarouselItem = ({children, width, key, image}: any) => {
  return (
    <div key={key} className='carousel-item' style={{width: width, backgroundImage: `url(${image})`}}>
        {children}
    </div>
  )
}

export const CarouselTitle = ({mainTitle, subTitle}: any) => {
    return (
        <div className='carousel-title'>
            <p className='main-title'>{mainTitle}</p>
            <p>{subTitle}</p>
        </div>
    )
}

export const Carousel = ({children, infinite}: any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex: number) => {
        if(newIndex < 0) {
            if(infinite) {
                newIndex = children.length - 1;
            }
            else {
                newIndex = 0
            }
        }
        else if(newIndex >= children.length) {
            if(infinite) {
                newIndex = 0;
            }
            else {
                newIndex = children.length - 1;
            }
        }
        setActiveIndex(newIndex);
    }
    return (
        <div className='carousel'>
            <div className='carousel-inner' style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: '100%', key: index})
                })}
            </div>
            <div className='indicators'>
                <span onClick={() => {updateIndex(activeIndex - 1)}}>
                    <img src={leftIcon} alt="leftIcon" />
                 </span>
                 <span onClick={() => {updateIndex(activeIndex + 1)}}>
                    <img src={rightIcon} alt="rightIcon" />
                 </span>
            </div>
        </div>
    )
}
