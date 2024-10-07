// import React from 'react'

export default function LastSec() {
    return <>


        <div className="w-full">


            <div className="bg-[url('src/pages/Home/lastSec/footer-texture.png')] flex flex-col  !items-center lg:!items-start leading-none lg:leading-normal justify-center bg-[#ff5f00] p-4 lg:p-[60px] uppercase text-white font-normal  lg:tracking-wider  w-full h-[183px] ">
                <p className="text-[32px] font-medium  lg:text-5xl">Revolutionize Your</p>
                <p className=" text-[32px] font-medium  lg:text-5xl">Food Delivery Experience</p>
            </div>


            <div className="relative  flex flex-col-reverse lg:flex-row  w-full h-[635px] lg:h-[309px] bg-[#1c1c1b] border-b border-b-gray-700 " >


                <div className="w-full">
                    <img src='src/pages/Home/lastSec/footer-stars.png' alt="asdasd" className=" absolute top-0 lg:block w-full " />

                    <div className="flex flex-col p-4 lg:p-[60px] w-full">

                        <div className="flex justify-center h-[362px] overflow-hidden lg:hidden relative w-full">
                            <img className="  flex h-[155%] w-full max-w-[288px]  " src='src/pages/Home/lastSec/buffalo-app-CTA-img.png' alt="" />
                        </div>

                        <h1 className="  text-2xl lg:text-[32px] text-orange-600 font-bold uppercase md:max-w-[50%]  ">
                            Download our mobile application now!!!
                        </h1>

                        <p className="  text-base lg:text-xl text-white md:max-w-[50%]">
                            Supercharge your experience with our mobile app! Unbeatable deals, personalized food suggestions, easy address management, loyalty points, and a user-friendly interface.
                        </p>

                        <div className="flex flex-row pt-6 gap-x-4">


                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.thebuffaloburger&pli=1">

                                <img className=" md:w-[202px] md:h-[60px]" src="src/pages/Home/lastSec/ctaGoogle.svg" alt="" />

                            </a>

                            <a target="_blank" href="https://apps.apple.com/us/app/buffalo-burger/id1661414221">

                                <img className=" md:w-[202px] md:h-[60px]" src="src/pages/Home/lastSec/ctaApple.svg" alt="" />

                            </a>

                        </div>

                    </div>
                </div>


                <div className="max-w-[300px] max-h-[485px] overflow-hidden hidden lg:block lg:absolute right-40 -top-44">

                    <img src='src/pages/Home/lastSec/buffalo-app-CTA-img.png' alt="" />

                </div>
            </div>


        </div>

    </>
}
