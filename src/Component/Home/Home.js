import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Carousel from './Carousel';
import Faq from './Faq';
import OverView from './OverView';
import PopularsTour from './PopularsTour';
import SpecialOffer from './SpecialOffer';
import TopDestination from './TopDestination';

const Home = () => {
    return (
        <div>
{/* 
https://i.ibb.co/hR2nBFx/decoration-blue-sky-white-clouds-parks-space-landscape-mountains.jpg
https://i.ibb.co/jv1fFdd/lukas-becker-Oj-VIrv-BKWP8-unsplash-1.jpg
https://i.ibb.co/bLbVVvd/young-girl-steps-house-tree-sunrise-nusa-penida-island-bali-indonesia-335224-350.webp
https://i.ibb.co/BssY5RQ/united-states-capitol-washington-dc.jpg
 */}
            <Navbar></Navbar>
            <Carousel></Carousel>
            <PopularsTour></PopularsTour>
            <SpecialOffer></SpecialOffer>
            <TopDestination></TopDestination>
            <OverView></OverView>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;