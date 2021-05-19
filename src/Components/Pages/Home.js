import React, {useEffect} from 'react';
import CakeCarousel from '../Carousel/CakeCarousel';

function Home() {
  


  return (
    <div id='page'>
      <section className='home-header'>
        <h2 className='title'>Creating special memories with sweet delicacies!</h2>
        <div className='carousel-container'>
          <section className='cake-carousel'>
            <CakeCarousel />
          </section>
        </div>
      </section>
    </div>
  )
}

export default Home
