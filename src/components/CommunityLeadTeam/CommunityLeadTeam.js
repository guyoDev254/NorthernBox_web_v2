import React from 'react';

function CommunityLeadTeam() {

    const items = [
       
        {
            image: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1686425055/IMG_8709_x4lh3v.jpg',
            name: 'Diram Bora Guyo',
            designation:'Programs and Partnership',
            position: 'Software Engineer',
            linkedIn: 'https://www.linkedin.com/in/diram-b-guyo-8bb9b1174',
            instagram: 'https://instagram.com/codingdee_?igshid=YmMyMTA2M2Y=',
            twitter: 'https://twitter.com/Diram_B?t=lm_w5VTOFBt2v8xFg3J2kQ&s=09'
        },
        {
            image: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1685898945/WhatsApp_Image_2023-06-03_at_10.06.14_AM_h3n3gu.jpg',
            name: 'Guyo Abdub',
            designation:'Strategy and Market',
            position: 'Software Engineer',
            linkedIn: 'https://www.linkedin.com/in/guyo-abdub/',
            instagram: '',
            twitter: 'https://twitter.com/guyoguyes'
        },
        {
            image: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1686427526/IMG_8721_vssdqx.jpg',
            name: 'Adho Adhi Galgallo',
            designation:'Growth and Programs',
            position: 'Software Engineer',
            linkedIn: 'https://www.linkedin.com/in/adho-adhi-galgallo-575aa6182/',
            instagram: '',
            twitter: ''
        },
        
        {
            image: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783434/mustafa_uzeexe.png',
            name: 'Mustafa Ahmed',
            designation:'Business Development and Finance',
            position: 'Data Scientist',
            linkedIn: 'https://www.linkedin.com/in/mustafa-ahmed-18a28011a/',
            instagram: '',
            twitter: 'https://twitter.com/mussys_mustapha'
        },
    ]

    return (
        <div className="rn-team-area rn-section-gap bg_color--1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title section-title--3 text-center mb--30">
                            <h2 className="title">Our Team</h2>
                            {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority*/}
                            {/*    have*/}
                            {/*    suffered alteration.</p>*/}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/*// <!-- Start Single Team Area  -->*/}
                    {items?.map((item, key) =>{
                        return(
                            <>
                                 <div className="col-lg-4 col-md-6 col-12" key={key}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={item.image} alt="Team Images" style={{height: '550px', objectFit: 'cover'}}/>
                            </div>
                            <div className="content">
                                <h4 className="title">{item.name}</h4>
                                <p className="designation">{item.designation}</p>
                                <p className="designation">{item.position}</p>
                            </div>
                            <ul className="social-icon">
                                <li><a href={item.linkedIn}><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href={item.twitter}><i className="fab fa-twitter"></i></a></li>
                                <li><a href={item.instagram}><i className="fab fa-instagram-square"></i></a></li>
                            </ul>
                        </div>
                    </div>
                            </>
                        )
                       
                    })}
                    

                </div>
            </div>
        </div>
    );
}

export default CommunityLeadTeam;