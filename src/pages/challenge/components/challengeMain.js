import React from "react";

import Lottie from "react-lottie";
import shapeAnimation from "../../../assets/json/shape.json";
// import LandingChallengeTestimonial from "./LandingChallengeTestimonial";

import TabBar from "../../../assets/images/tabBar.png";
import StatusBar from '../../../assets/images/StatusBar.png'

import { truncateString } from '../../../utils/Helper'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: shapeAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const challengeMain = ({challengeData}) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <section>
          <div
            className=" max-w-screen-xl py-16 sm:px-6"
            style={{ borderColor: "red" }}
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-auto overflow-hidden rounded-lg sm:h-full lg:order-last lg:h-full">
                <div className="flex items-center justify-center">
                  <div style={{ zIndex: 10 }}>
                    <div className="mockup-phone border-primary">
                      <div className="camera"></div>
                      <div className="display">
                        <div className="artboard artboard-demo phone-1">
                          <div className="flex flex-col h-screen overflow-hidden">
                            <header className="w-full p-4">
                              <img
                                src={StatusBar}
                                alt="StatusBar"
                                width={320}
                              />
                            </header>
                            <main className="flex-1 overflow-y-auto">
                              <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-center">
                                  <img
                                    src={challengeData?.photo}
                                    alt="challenge"
                                    height={1}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col w-full">
                                <div className="mt-5 pl-4">
                                  <h4 className="text-white font-bold">
                                    {challengeData?.title}
                                  </h4>
                                  <p className="text-white-400 text-xs">
                                    {challengeData?.hashtag}
                                  </p>
                                </div>
                                <div className="divider"></div>
                                <div className="mt-2 pl-4">
                                  <strong style={{ color: "white" }}>
                                    Description
                                  </strong>
                                  <p className="text-white-400 text-xs font-givenget">
                                    {challengeData?.description}
                                  </p>
                                </div>
                                <div className="divider"></div>
                                <div className="mt-2 pl-4">
                                  <strong style={{ color: "white" }}>
                                    Rules
                                  </strong>
                                  <p className="text-white-400 text-xs font-givenget">
                                    {challengeData?.rules}
                                  </p>
                                </div>
                                <div className="divider"></div>
                                <div className="mt-2 pl-4">
                                  <strong style={{ color: "white" }}>
                                    Benefits
                                  </strong>
                                  <p className="text-white-400 text-xs font-givenget">
                                    {challengeData?.benefits}
                                  </p>
                                </div>
                              </div>
                            </main>
                            <footer className="w-full mt-5">
                              <img src={TabBar} alt="tabBar" />
                            </footer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ position: "absolute" }}>
                    <Lottie
                      options={defaultOptions}
                      height="100%"
                      width="100%"
                      isClickToPauseDisabled={true}
                      style={{ cursor: "default" }}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:py-2">
                <h1 className="text-4xl font-bold font-givenget sm:text-7xl text-white">
                  {challengeData?.title}
                </h1>
                <h5 className="mt-2">{challengeData?.hashtag}</h5>
                <p className="mt-4 text-gray-400 font-givenget">
                  {challengeData?.description && truncateString(challengeData?.description, 500)}
                </p>

                <div className="flex flex-row mt-5 gap-x-5 items-center ">
                  <div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="flex mt-3 w-auto p-5 h-14 bg-black text-white rounded-xl items-center justify-center transition hover:rotate-2 hover:scale-110"
                    >
                      <div className="mr-3">
                        <svg viewBox="0 0 384 512" width={30}>
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs">Download on the</div>
                          <div className="text-sm font-semibold font-sans -mt-1">
                            App Store
                          </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="flex mt-3 w-auto p-5 h-14 bg-black text-white rounded-lg items-center justify-center transition hover:-rotate-2 hover:scale-110"
                    >
                      <div className="mr-3">
                        <svg viewBox="30 336.7 120.9 129.2" width={30}>
                          <path
                            fill="#FFD400"
                            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                          />
                          <path
                            fill="#FF3333"
                            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                          />
                          <path
                            fill="#48FF48"
                            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                          />
                          <path
                            fill="#3BCCFF"
                            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs">GET IT ON</div>
                          <div className="text-sm font-semibold font-sans -mt-1 ">
                            Google Play
                          </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {/* <LandingChallengeTestimonial data={challengeData.top_picks}/> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default challengeMain;
