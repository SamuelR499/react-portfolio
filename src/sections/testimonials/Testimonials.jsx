// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './testimonials.css'
import testimonials from './data';
import Testimonial from './Testimonial';

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>
      <div className="container">
          <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='MySwiper'
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials