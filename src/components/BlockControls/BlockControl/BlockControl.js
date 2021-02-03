import React from "react";
import styles from "./BlockControl.module.css";

const blockControl = (props) => {
	return (
		<div className={styles.ButtonContainer}>
			<div className={styles.Label}>{props.label} Block</div>
			<button className={styles.Less} onClick={props.removed}>
				Remove
			</button>
			<button className={styles.More} onClick={props.added}>
				Add
			</button>
		</div>
	);
};

export default blockControl;
