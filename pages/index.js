import React, { useState } from "react";
import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import Platform from "/src/components/Layout/Platform";
import Footer from "/src/components/Layout/Footer";
import Link from "next/link";
import LoginModal from "/src/components/modals/login_modal";

export default function Index(onClose) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <Platform className="mt-6">
        <div className="flex w-full flex-col items-center justify-center ">
          <div className="h-72 w-full rounded-md bg-[url('/images/hero-background-image.jpg')] bg-cover">
            <div className="flex h-full  w-full flex-col items-center justify-center  rounded-md bg-red-900/50">
              <h1 className="text-center text-3xl font-bold text-white">
                WMSU HUMAN RESOURCES INFORMATION{" "}
                <span className="text-wmsu-red">SYSTEM</span>
              </h1>
              <p className="mt-3 text-center text-base text-white">
                Access all available data in just one click.
              </p>
              <div class="container mx-auto mt-5 px-4">
                <div className="mb-0 flex justify-center">
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-md cursor-pointer items-center rounded-md bg-wmsu-red p-2 py-2 px-5 text-sm font-semibold uppercase text-white hover:bg-red-700"
                  >
                    Login
                  </button>
                  <Link href="/#learnmore">
                    <button
                      type="button"
                      className="text-md ml-2 cursor-pointer items-center rounded-md border p-2 py-2  px-5 text-sm font-semibold uppercase text-white"
                    >
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
            <div class="container mx-auto px-5 py-11">
              <div class="flex w-full flex-col text-center ">
                <h1 class=" title-font mb-4 mt-2 text-xl font-bold text-black">
                  ABSTRACT
                </h1>
                <div class="mt-0 flex justify-center">
                  <div class="mb-3 inline-flex h-1 w-16 rounded-full bg-red-700"></div>
                </div>
                <p class=" mx-auto mt-12 mb-1 text-center text-base leading-relaxed text-black">
                  The importance of having effective teachers is the key to a
                  student&apos;s learning. Here, we aim to have a system to
                  predict performance using data mining techniques with
                  comparative analysis (Random Forest Support Vector Machine
                  (SVM), Decision Tree, and Naïve Bayes) to discover ways that
                  can help them better serve the educational process and ideally
                  improve their performance, which will reflect on the
                  performance of teachers in the classroom Hence, to be able to
                  step forward and take action for those who lack in terms of
                  teaching. As well as create a platform to know statistics of
                  faculty members in different colleges here at WMSU.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <section class=" body-font">
            <div class="container mx-auto px-5 py-11">
              <div class="mb-20 text-center">
                <h1 class="title-font mb-4 text-xl font-bold">FEATURES</h1>
                <div class="mt-0 flex justify-center">
                  <div class="mb-3 inline-flex h-1 w-16 rounded-full bg-red-700"></div>
                </div>
              </div>
              <div class="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
                <div class="flex flex-col items-center p-4 text-center md:w-1/3">
                  <div class="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-700 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-10 w-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Feature 1
                    </h2>
                    <p class="text-base leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a class="mt-3 inline-flex items-center text-red-700">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="flex flex-col items-center p-4 text-center md:w-1/3">
                  <div class="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-700 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-10 w-10"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Feature 2
                    </h2>
                    <p class="text-base leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a class="mt-3 inline-flex items-center text-red-700">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="flex flex-col items-center p-4 text-center md:w-1/3">
                  <div class="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-700 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-10 w-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Feature 3
                    </h2>
                    <p class="text-base leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a class="mt-3 mb-3 inline-flex items-center  text-red-700">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <LoginModal isvisible={showModal} onClose={() => setShowModal(false)}>
          <div class="w-full max-w-xs ">
            <form class="mb-4 rounded-xl bg-white px-8 pt-6 pb-8 shadow-md">
              <div class="mb-8 text-center">
                <h1 class="my-3 text-2xl font-bold">Please log in</h1>
                <div className="h-1 w-full bg-wmsu-red" />
              </div>
              <div class="mb-4">
                <label
                  class="mb-2 block text-sm font-bold text-gray-700"
                  for="username"
                >
                  Username
                </label>
                <input
                  class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  id="username"
                  type="text"
                ></input>
              </div>
              <div class="mb-6">
                <label
                  class="mb-2 block text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="focus:shadow-outline w-full appearance-none  rounded border py-2 px-2 leading-tight  text-gray-700 shadow focus:outline-none"
                  id="password"
                  type="password"
                ></input>
                <a
                  class=" mb-3 text-sm font-bold text-red-700 hover:text-red-500"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="focus:shadow-outline rounded bg-wmsu-red py-2 px-8 font-bold text-white hover:bg-red-700 focus:outline-none"
                  type="button"
                >
                  Login
                </button>
                <button
                  type="button"
                  id="wrapper"
                  class=" hover:bg-red-0 focus:shadow-outline inline-block rounded border border-red-700 py-2 px-8 align-baseline text-red-600 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </LoginModal>
      </Platform>
      <Footer>
        <div>hello footer</div>
      </Footer>
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
