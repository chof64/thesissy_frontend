import React from "react";
import LayoutGlobal from "../src/components/Layout/LayoutGlobal";
import Layout from "../src/components/Layout/Layout";
import Platform from "../src/components/Layout/Platform";
import Footer from "../src/components/Layout/footer";
import Link from "next/link";
import { Info as InfoIcon, LogIn as LogInIcon } from "lucide-react";

export default function Index() {
  return (
    <>
      <Platform className="mt-6">
        <div className="flex w-full flex-col items-center justify-center ">
          <div className="h-72 w-full bg-[url('/images/hero-background-image.jpg')] bg-cover rounded-md">
            <div className="flex h-full  w-full flex-col items-center justify-center  bg-red-900/50 rounded-md">
              <h1 className="text-center text-3xl font-bold text-white">
                WMSU HUMAN RESOURCES INFORMATION{" "}
                <span className="text-wmsu-red">SYSTEM</span>
              </h1>
              <p className="mt-3 text-center text-sm text-white">
                Access all available data in just one click.
              </p>
              <div class="container mx-auto px-4 mt-8">
               <div className="flex justify-center mb-0">
                <Link href="/#login">
                    <button className="items-center text-sm py-1 px-3 uppercase bg-wmsu-red p-2 font-semibold text-white text-md cursor-pointer hover:bg-red-700">
                      Login
                    </button>
                  </Link>
                  <Link href="/#login">
                    <button className="items-center text-sm py-1 px-3 uppercase ml-2 bg-wmsu-red p-2 font-semibold text-white text-md cursor-pointer hover:bg-red-700">
                      Learn More
                    </button>
                  </Link>
               </div>
              </div>
            </div>
          </div>
        </div>
      <div className="container">
        <section class="body-font">
          <div class="container px-5 py-11 mx-auto">
            <div class="flex flex-col text-center w-full ">
              <h1 class=" text-xl title-font mb-4 mt-2 font-bold text-black">ABSTRACT</h1>
              <div class="flex mt-0 justify-center">
                <div class="w-16 h-1 mb-3 rounded-full bg-red-700 inline-flex"></div>
              </div>
              <p class=" mx-auto leading-relaxed mt-3 mb-1 text-center text-sm text-black">
              The importance of having effective teachers is the key to a student's learning. 
              Here, we aim to have a system to predict performance using data mining techniques 
              with comparative analysis (Random Forest Support Vector Machine (SVM), Decision 
              Tree, and Naïve Bayes) to discover ways that can help them better serve the 
              educational process and ideally improve their performance, which will reflect on 
              the performance of teachers in the classroom Hence, to be able to step forward and 
              take action for those who lack in terms of teaching. As well as create a platform 
              to know statistics of faculty members in different colleges here at WMSU.
                </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section class=" body-font">
          <div class="container px-5 py-11 mx-auto">
            <div class="text-center mb-20">
              <h1 class="text-xl title-font mb-4 font-bold">FEATURES</h1>
              <div class="flex mt-0 justify-center">
                <div class="w-16 h-1 mb-3 rounded-full bg-red-700 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-700 text-white mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Feature 1</h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
                  <a class="mt-3 text-red-700 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-700 text-white mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Feature 2</h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                  <a class="mt-3 text-red-700 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-700 text-white mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Feature 3</h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    
                  </p>
                  <a class="mt-3 text-red-700 inline-flex items-center  mb-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
           </div>
        </section>
      </div>
      </Platform>
      <Footer />
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal title="Home">
      <Layout>{page}</Layout>
    </LayoutGlobal>

  );
};
