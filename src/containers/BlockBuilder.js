import React, { Component } from "react";
import Blocks from "../components/Blocks/Blocks";
import BlockControls from "../components/BlockControls/BlockControls";
import styles from "./BlockBuilder.module.css";

class BlockBuilder extends Component {
	state = {
		red: 0,
		blue: 0,
		purple: 0,
		pink: 0,
		green: 0,
		grey: 0,
		yellow: 0,
	};
	addBlockHandler = (type) => {
		const oldCount = this.state[type];
		let newCount = oldCount + 1;
		let totalOfState = 0;
		Object.entries(this.state).map(([key, value]) => {
			totalOfState += parseInt(value);
		});
		if (totalOfState < 11) this.setState({ [type]: newCount });
	};
	removeBlockHandler = (type) => {
		const oldCount = this.state[type];
		let newCount = oldCount - 1;
		if (oldCount > 0) this.setState({ [type]: newCount });
	};
	render() {
		return (
			<div>
				<div className={styles.BlockContainer}>
					<Blocks blockState={this.state} />
				</div>
				<div className={styles.Middle}>
					<div className={styles.Line}></div>
					<BlockControls
						addBlockHandler={this.addBlockHandler}
						removeBlockHandler={this.removeBlockHandler}
					/>
				</div>
			</div>
		);
	}
}

export default BlockBuilder;
