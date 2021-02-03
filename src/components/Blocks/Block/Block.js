import React, { Component } from "react";
import styles from "./Block.module.css";

class Block extends Component {
	render() {
		let builtBlock = null;
		switch (this.props.type) {
			case "block-top-bottom":
				builtBlock = <div className={styles.Black}>&nbsp;</div>;
				break;
			case "red":
				builtBlock = <div className={styles.Red}>&nbsp;</div>;
				break;
			case "blue":
				builtBlock = <div className={styles.Blue}>&nbsp;</div>;
				break;
			case "purple":
				builtBlock = <div className={styles.Purple}>&nbsp;</div>;
				break;
			case "pink":
				builtBlock = <div className={styles.Pink}>&nbsp;</div>;
				break;
			case "green":
				builtBlock = <div className={styles.Green}>&nbsp;</div>;
				break;
			case "grey":
				builtBlock = <div className={styles.Grey}>&nbsp;</div>;
				break;
			case "yellow":
				builtBlock = <div className={styles.Yellow}>&nbsp;</div>;
				break;
			default:
				builtBlock = null;
		}
		return builtBlock;
	}
}

export default Block;
