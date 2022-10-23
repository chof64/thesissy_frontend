import React from "react";

function Content({ children }) {
	return (
		<div className="flex flex-wrap lg:ml-52 md:ml-0 items-center justify-center">
		<div>{children}</div>
		</div>
	);
}

export default Content;