import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import moment from "moment";

const ChallengeTestimonials = ({ data }) => {
  return (
    <section>
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-10 lg:mr-0 lg:pl-2 lg:pr-0">

        <div className="swiper-container !overflow-hidden">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={10}
              slidesPerView={data.length === 1 ? 1 : 2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data &&
                data.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.id}>
                      <div className="swiper-slide">
                        <div
                          className="relative block overflow-hidden rounded-xl"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
                            <h5 className="text-2xl font-bold">Has completed this challenge</h5>
                            <p className="text-sm">
                              {moment(item.created_at).format('LL')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ChallengeTestimonials