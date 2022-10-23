import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineFileUpload,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";

function SideNavbar() {
	return (
	<div>
      <Disclosure as="nav">
		<Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-red hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
			<GiHamburgerMenu
				className="block md:hidden h-6 w-6"
				aria-hidden="true"/>
		</Disclosure.Button>
		<div className=" p-4 h-screen bg-red-700 z-20 fixed top-0 -left-96 lg:left-0 lg:w-52 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
			<div className="flex flex-col justify-start item-center">
				<div className="p-3 pl-4 text-left text-sm font-bold">
					<h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
					HR Information System
					</h1>
				</div>
				<div className=" p-2.5 my-4  pb-4">
				
					<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineSpaceDashboard className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Dashboard
						</h3>
					</div>
				
					<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineSupervisedUserCircle className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Faculty
						</h3>
					</div>
					<Link href="/dashboard/upload">
					<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineFileUpload className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Upload
						</h3>
					</div>
					</Link>
					<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineAnalytics className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Reports
						</h3>
					</div>
					<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineIntegrationInstructions className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Prediction
						</h3>
					</div>
					<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineSettings className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Settings
						</h3>
					</div>
					<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineMoreHoriz className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						More
						</h3>
					</div>
				</div>
				<div className="p-2.5 my-0">
					<div className=" p-2.5 flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-red-500 rounded-md group cursor-pointer hover:shadow-lg m-auto">
						<MdOutlineLogout className="text-2xl text-white group-hover:text-white " />
						<h3 className="text-base text-white group-hover:text-white font-semibold ">
						Logout
						</h3>
					</div>
				</div>
			</div>
		</div>
		</Disclosure>
		</div>
	);
}
export default SideNavbar;