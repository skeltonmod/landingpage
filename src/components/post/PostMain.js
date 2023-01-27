import React from 'react'
import moment from 'moment'
import { navigate } from "@reach/router";
import ReactMarkdown from 'react-markdown'


const PostMain = ({ newsfeedData }) => {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <div className={newsfeedData?.title.length >= 30 ? 'w-1/1' : 'w-1/2'}>
                                <h2 className={newsfeedData?.title.length >= 30 ? `text-3xl font-bold font-givenget sm:text-3xl text-white` : `text-3xl font-bold font-givenget sm:text-5xl text-white` }>
                                    {newsfeedData?.title}
                                </h2>
                            </div>

                            <div className='flex flex-row'>
                                <span className="badge badge-lg mt-3 mr-2 font-givenget">
                                    <div className="mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                    </div>

                                    {newsfeedData?.created_at_web}
                                </span>
                                {
                                    newsfeedData?.trending === 1 && (
                                        <span className="badge badge-lg badge-error mt-3 font-givenget">
                                            <div className="mr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                                </svg>
                                            </div>
                                            Trending
                                        </span>
                                    )
                                }
                            </div>

                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt={newsfeedData?.title}
                                    src={newsfeedData?.photo}
                                    className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                                />
                            </div>

                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <ReactMarkdown children={newsfeedData?.content} />
                                </article>
                                <div className="flex flex-row mt-5 gap-x-5 items-center ">
                                    <div>
                                        <div
                                            style={{ cursor: "pointer" }}
                                            className="flex mt-3 w-auto p-5 h-14 bg-black text-white rounded-xl items-center justify-center transition hover:rotate-2 hover:scale-110"
                                            onClick={() => navigate('https://apps.apple.com/us/app/give-get/id1569561799')}
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
                                            onClick={() => navigate('https://play.google.com/store/apps/details?id=com.givenget')}
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default PostMain
