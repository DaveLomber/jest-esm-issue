import {Virtual, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


export const Slider = ({meetings = []}) => {
  const rerenderSwiperKey = useMemo(() => Date.now(), [meetings.length]);
  const lessThanThree = meetings.length < 3;
  const lessThanTwo = meetings.length < 2;
  return (
    <Swiper
      key={rerenderSwiperKey}
      navigation={{
        nextEl: '.swiper-button.next',
        prevEl: '.swiper-button.prev',
      }}
      spaceBetween={24}
      slidesPerView={3}
      simulateTouch={false}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: lessThanTwo ? 1 : 2,
        },
        1200: {
          slidesPerView: lessThanThree ? (lessThanTwo ? 1 : 2) : 3,
        },
      }}
      modules={[Virtual, Navigation]}
      virtual>
      {meetings.map((meeting, index) => (
        <SwiperSlide key={meeting.id} virtualIndex={index}>
          <Slide>{meeting}</Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
