import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1705077199/image1_0_tcmip9.jpg',
    altText: '_Connect_',
    caption: '_Connect_',
    description: 'We are a collective of passionate individuals from Northern Kenya, connecting learners, mentors, and communities to ignite change and build a shared future.',
    key: 1,
  },
  {
    src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783274/create_me_an_im_1_pvqmnp.png',
    altText: '_Create_',
    caption: '_Create_',
    description: 'Through hands-on training and mentorship, we empower local talent to create innovative solutions that address real challenges in our region.',
    key: 2,
  },
  {
    src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783788/I_am_from_north_0_wjmw3a.png',
    altText: '_Learn_',
    caption: '_Learn_',
    description: 'We foster a culture of continuous learning by offering opportunities for everyone—from beginners to experts—to grow and lead in STEM and beyond.',
    key: 3,
  },
];

function Hero(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          style={{
            background: `linear-gradient(
                              rgba(0, 0, 0, 0.5),
                              rgba(136, 98, 98, 0.5)
                              ), url(${item.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '50px',
              fontWeight: '900',
              marginTop: '60px',
              color: '#014A75'
            }}
          >
            {item.caption}
          </h1>
          <p className="text-white text-2xl md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 xl:w-35 mx-auto">
            {item.description}
          </p>
        </div>
        {/* <CarouselCaption captionText={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div style={{ position: 'relative' }}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} {...props}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      
      {/* More button positioned outside the carousel but absolutely positioned over it */}
      <div style={{
        position: 'absolute',
        bottom: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        marginTop: '30px'
      }}>
        <a
          style={{
            backgroundColor: '#007bff',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#fff',
            textDecoration: 'none',
          }}
          href="/about"
        >
         Learn More
        </a>
      </div>
    </div>
  );
}

export default Hero;