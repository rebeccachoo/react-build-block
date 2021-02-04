import React from "react";
import Block from "./Block/Block";
import styles from "./Blocks.module.css";

const blocks = (props) => {
	return (
		<div className={styles.Blocks}>
			<Block type="block-top-bottom" />
			{Object.entries(props.blockState).map(([key, value]) => {
				var rows = [];
				for (let j = 0; j < parseInt(value); j++) {
					rows.push(<Block type={key} key={key + j} />);
				}
				return rows;
			})}
			<Block type="block-top-bottom" />
		</div>
	);
};

export default blocks;
