import React from 'react';
import WinkAnimation from './animations/WinkAnimation'
import Animation from './animations/AnimationWink.riv'

const About = () => {
    return (
        <div className="about">
            <div className="about-image">
                <WinkAnimation asset={Animation} fit="contain" alignment="center" />
            </div>
            <div className="about-paragraph">
                <h3 className="about-title">About me</h3>
                <p className="about-text">
                    I am a young and aspiring digital artist based in Estonia.
                    I love drawing video game characters or characters from shows I like.<br/>
                    My style is inspired from 1930's cartoons, it's cutesy and rather simple.
                    I am self-taught and very excited to start out as a freelancer.<br/>
                    I also enjoy painting with other mediums beside digital, like acrylic painting on canvases or fabrics.<br/>
                    Thank you for your interest and if you have any further questions feel free to get in contact with me!
                </p>
            </div>
        </div>
    )
}

export default About
