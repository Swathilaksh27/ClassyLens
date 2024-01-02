import React from 'react';
import './About.css'
import Navbar from './Navbar';
import Footer from './Footer';

function AboutUs() {


  return (

    <div id="eterms">
    <div><Navbar/></div>
    <div class="wrap">
    <h1>ABOUT US</h1>
    <div class="terms">
        <h3>About Us</h3>
        The journey of our gaming website began with a shared love for gaming. We understood that gaming is more than just a hobby; it's a dynamic, ever-evolving world of excitement, competition, and camaraderie. Inspired by this, we set out to create a platform where gamers could come together, connect, and immerse themselves in the realm of gaming.
        <h3>Our Mission</h3>
        At our gaming website, our mission is to create a vibrant and inclusive online gaming community where gamers of all levels and backgrounds can come together to share their passion for gaming. We aim to provide a platform that offers a wide selection of games, resources, and tools that enhance the gaming experience and foster meaningful connections within the gaming world.
        </div>
    </div>
<div><Footer/></div>
</div>






    
  );
}

export default AboutUs;