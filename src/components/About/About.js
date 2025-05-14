import React from 'react';
import AboutComponent from "./AboutComponent";
import CommunityLeadTeam from "../CommunityLeadTeam/CommunityLeadTeam";
import Partnerships from "../Partnerships/Partnerships";
import ProgramAreas from "../ProgramAreas/ProgramAreas";
import Footer from '../Footer/Footer';

function About(props) {
    var title = 'Our Skilled Team'
    return (
        <div>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(https://res.cloudinary.com/dabfdxbfj/image/upload/v1686428211/IMG_8631_ndwkt2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'cover'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>About Us</h2>
                                <p style={{color: '#fefefe', fontSize: '24px'}}>Driving technology to Northern Frontier</p>
                                <ul className="page-list">
                                    <li><a href="home">Home</a></li>
                                    <li className="about">About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper">

                {/*// <!-- Start About Area  -->*/}
                <AboutComponent/>
                {/*// <!-- Start About Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Counterup Area  -->*/}
            {/*// <!-- Start About Area  -->*/}
            {/*//*/}
            {/*// <!-- Start Service Area  -->*/}
            <div className="rn-service-area ptb--80 bg_image bg_image--3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="section-title text-start mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                                <h2 className="title">What We Are</h2>
                                <p>NorthernBox is a community-driven initiative from Northern Kenya, uniting passionate individuals committed to learning, innovation, and local impact. We bridge the gap between talent and opportunity by creating inclusive spaces for training, mentorship, and collaboration. At our core, we believe in the power of community to drive meaningful change through technology, knowledge, and shared growth.</p>
                                <div className="service-btn"><a className="btn-transparent rn-btn-dark"
                                                                href="membership"><span
                                    className="text">Get Started</span></a></div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mt_md--50">
                            <div className="row service-one-wrapper">

                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="cast"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">We Say YES to PEOPLE</h3>
                                                    <p>At NorthernBox, we believe every individual holds unique value and untapped potential. Through our programs, events, and creative platforms, we aim to ignite curiosity, nurture innovation, and empower people to shape a brighter future for their communities.</p>
                                                </div>

                                            </div>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                {/*<!-- Start Single Service -->*/}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <div className="service">
                                        <div className="icon">
                                            <i data-feather="layers"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Creativity & Innovation</h3>
                                            <p>We’re cultivating a space where bold ideas thrive. Our goal is to spark creativity and drive innovation in Northern Kenya by encouraging the development of local, practical solutions that address real community challenges.</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    {/*<!-- End Single Service -->*/}

                                    {/*<!-- Start Single Service -->*/}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <div className="service">
                                        <div className="icon">
                                            <i data-feather="users"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Collaboration & Teamwork</h3>
                                            <p>We believe in the power of community. By partnering with local organizations, we create educational and economic opportunities that uplift and empower individuals through shared knowledge and collective effort.</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    {/*<!-- End Single Service -->*/}

                                    {/*<!-- Start Single Service -->*/}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <div className="service">
                                        <div className="icon">
                                            <i data-feather="monitor"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Technology for the North</h3>
                                            <p>We harness technology to create lasting impact. From research to real-world applications, we promote ethical, innovative tech solutions that improve lives and drive sustainable development across Northern Kenya.</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                {/*<!-- End Single Service -->*/}

                                {/*// <!-- End Single Service  -->*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- Start Service Area  -->*/}
            {/*//*/}
            <ProgramAreas/>
            
            <div className="rn-counterup-area pt--25 pb--110 bg_color--1" style={{backgroundColor: '#014A75'}}>
                <div className="container">
                    <div className="row" style={{marginTop: '50px'}}>
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h3 className="fontWeight500" style={{color: '#fefefe'}}>Our Fun Facts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*// <!-- Start Single Counterup  -->*/}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="rn-counterup counterup_style--1">
                                <h5 className="counter count" style={{color: '#fefefe'}}>250</h5>
                                <p className="description" style={{color: '#fefefe'}}>Total Members.</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Counterup  -->*/}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="rn-counterup counterup_style--1">
                                <h5 className="counter count" style={{color: '#fefefe'}}>43</h5>
                                <p className="description" style={{color: '#fefefe'}}>Skilled and Exprienced Members.</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Counterup  -->*/}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="rn-counterup counterup_style--1">
                                <h5 className="counter count" style={{color: '#fefefe'}}>5</h5>
                                <p className="description" style={{color: '#fefefe'}}>Northern Counties we cover</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                    </div>
                </div>
            </div>
                {/*// <!-- End Counterup Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Finding us Area  -->*/}
                <div className="rn-finding-us-area rn-finding-us bg_color--1" style={{marginTop: "70px"}}>
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your STEM community Now</h4>
                                <p>It is important to surround yourself in an environment where you can be comfortable and motivated. When it comes to design and creative thinking, innovators need to have a space that is both open and encouraging</p><a
                                className="rn-btn btn-white" href="membership">Get Started</a>
                            </div>
                        </div>
                        {/* <div className="relative"> */}
                            <div className="thumbnail">
                                <div className="image">
                                <img src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1686430339/IMG_8657_yolykv.jpg" alt="Finding Images" style={{width: '65vw', height: '750px', objectFit: 'cover'}} />
                                </div>
                                <div className="absolute inset-0 bg-blue-800 opacity-50 h-full" style={{width: '65vw', height: '750px', objectFit: 'cover'}}></div>
                            </div>
                        {/* </div> */}

                    </div>
                </div>
                {/*// <!-- End Finding us Area  -->*/}
                {/*//*/}
                {/*// <!-- Start team Area  -->*/}
                <CommunityLeadTeam />
                {/*// <!-- Start team Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Testimonial Area  -->*/}
                <div className="rn-testimonial-area rn-section-gap bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*// <!-- Start Tab Content  -->*/}
                                <div className="rn-testimonial-content tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                         aria-labelledby="tab1-tab">
                                        <div className="inner">
                                            <p>NorthernBox targets to achieve the most through leveraging technological innovation provide solutions to the local community.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Adho Adhi Galgallo </span> - Growth and Programs</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <div className="inner">
                                            <p>NorthernBox's provides businesses with the technology they need.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Diram Bora Guyo </span> - Programs and Partnership</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                        <div className="inner">
                                            <p>NorthernBox is a team that has the knowledge and unique perspective of technology needs.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Guyo Abdub </span> - Business Development and Finance</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab-tab">
                                        <div className="inner">
                                            <p>NorthernBox targets to achieve the most through leveraging technological innovation provide solutions to the local community.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Mustafa Ahmed </span> - Strategy and Marketing</h6>
                                        </div>
                                    </div>
                                </div>
                                {/*// <!-- End Tab Content  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Tab Nav  -->*/}
                                <ul className="testimonial-thumb-wrapper nav nav-tabs" id="myTab" role="tablist">
                                    <li>
                                        <button className="active" id="tab1-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab1" role="tab" type="button" aria-controls="tab1"
                                                aria-selected="true">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/adho.jpg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" role="tab"
                                                type="button" aria-controls="tab2" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/diram.JPEG"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" role="tab"
                                                type="button" aria-controls="tab3" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/galgallo.png"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" role="tab"
                                                type="button" aria-controls="tab4" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/guyo.png"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" role="tab"
                                                type="button" aria-controls="tab5" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/mustafa.jpeg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                                {/*// <!-- End Tab Content  -->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Start Testimonial Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Brand Area -->*/}
                <Partnerships />
                <Footer />
                {/*// <!-- End Brand Area -->*/}
                {/*//*/}

            </main>
        </div>
    );
}

export default About;