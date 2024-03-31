import React from 'react'
import './Hero.css'
import LeftCube from '../../Assets/Rectangle 5626.svg';
import RightImage from '../../Assets/Group 39491.svg';
import bottomRing from '../../asset/Blend Group 1.svg'


function Hero() {
    return (
        <div>
            <div className='hero flex flex-center'>
                <div className='heading-text headingContainer'>
                    <p>Maximize Efficiency through Advanced Automation Solutions</p>
                    <div className='subHeading button-text text-white'>
                        <p>Welcome to Sphere Tech Labs, where Innovation meets Transformation!"</p>
                    </div>
                    <div className='flex flex-space-around buttonContainer'>
                        <div className='whiteButton heroButton'>
                            Get started...
                        </div>
                        <div className='blackButton heroButton'>
                            Talk to sales
                        </div>
                    </div>
                </div>
                <div className='test'>
                    <img src={LeftCube} />
                </div>
                <div className='rightImage'>
                    <img src={RightImage} />
                </div>
                {/* <div className='test2'>
                    <img src={bottomRing} />
                </div> */}
            </div>
        </div>
    )
}

export default Hero