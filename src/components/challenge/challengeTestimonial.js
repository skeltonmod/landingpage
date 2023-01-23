import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const ChallengeTestimonial = ({ data }) => {
  return (
    <section>
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-10 lg:mr-0 lg:pl-2 lg:pr-0">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          {/* <div className="max-w-2xl text-center sm:text-left">
            <h3 className="font-bold tracking-tight text-xl">
              People who joined this challenge
            </h3>
          </div> */}
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div className="swiper-container !overflow-hidden">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
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
                        <SwiperSlide key={item.id}>
                          <div className="swiper-slide">
                            <blockquote
                              className="flex h-full flex-col justify-between p-5"
                              style={{
                                backgroundColor: "#282B38",
                                borderRadius: 20,
                              }}
                            >
                              <center>
                                <div>
                                  <div className="mt-4">
                                    <p
                                      className="text-2xl font-bold sm:text-3xl"
                                      style={{ color: "#F16825" }}
                                    >
                                      {item.name}
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <img
                                      src={item.image}
                                      height={128}
                                      width={128}
                                    />
                                  </div>
                                </div>

                                <p className="mt-4 leading-relaxed text-gray-500">
                                  {`Has Completed this challenge, ${item.created_at}`}
                                </p>
                              </center>
                            </blockquote>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChallengeTestimonial