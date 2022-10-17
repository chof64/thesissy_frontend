import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Platform from "./Platform";
import * as Dialog from "@radix-ui/react-dialog";

function Navigation() {
  const [open, setOpen] = React.useState(false);

  const NAVIGATION = [
    {
      name: "Home",
      href: "/",
      pin: true,
    },
    {
      name: "Abstract",
      href: "/#Abstract",
      pin: false,
    },
    {
      name: "Features",
      href: "/#features",
      pin: false,
    },
    {
      name: "Login",
      href: "/#Login",
      pin: false,
    },
  ];

  return (
        <nav class="bg-wmsu-red border-red-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <img src="/wmsu-logo-600x600.png" class="relative aspect-square h-14 w-14"/>
                <div className="font-bold text-white ">
                <p className="flex flex-col">
                  HUMAN RESOURCE <span>INFORMATION SYSTEM</span>
                </p>
              </div>
            <div class="flex items-center lg:order-2">
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-white" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="mb-4 border-b border-white dark:border-white">
                  <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                      <li class="mr-2" role="presentation">
                          <button class="inline-block p-4 rounded-t-lg border-b-2" id="home-tab" data-tabs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">HOME</button>
                      </li>
                      <li class="mr-2" role="presentation">
                          <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white hover:border-gray-300 dark:hover:text-gray-300" id="faculty-tab" data-tabs-target="#faculty" type="button" role="tab" aria-controls="faculty" aria-selected="false">FACULTY</button>
                      </li>
                      <li class="mr-2" role="presentation">
                          <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">IMPORT</button>
                      </li>
                      <li class="mr-2" role="presentation">
                          <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">REPORTS</button>
                      </li>
                      <li class="mr-2" role="presentation">
                          <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">PREDICTION</button>
                      </li>
                      <li class="mr-2" role="presentation">
                          <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">ADMIN</button>
                      </li>
                  </ul>
              </div>
              <div id="myTabContent">
                  <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">home tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                  </div>
                  <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="faculty" role="tabpanel" aria-labelledby="faculty-tab">
                      <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">faculty tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                  </div>
                  <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                      <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                  </div>
                  <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                      <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                  </div>
              </div>
          </div>
        </nav>
  
  );
}

export default Navigation;
