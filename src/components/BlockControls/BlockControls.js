import React from "react";
// import styles from "./BlockControls.module.css";
import BlockControl from "./BlockControl/BlockControl";

const controls = [
	{ label: "Red", type: "red" },
	{ label: "Blue", type: "blue" },
	{ label: "Yellow", type: "yellow" },
	{ label: "Purple", type: "purple" },
	{ label: "Pink", type: "pink" },
	{ label: "Green", type: "green" },
	{ label: "Grey", type: "grey" },
];

const blockControl = (props) => {
	return (
		<div>
			{controls.map((ctrl) => (
				<BlockControl
					label={ctrl.label}
					type={ctrl.type}
					added={() => props.addBlockHandler(ctrl.type)}
					removed={() => props.removeBlockHandler(ctrl.type)}
				/>
			))}
		</div>
	);
};

export default blockControl;
