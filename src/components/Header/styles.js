import { styled } from "@stitches/react";
import { Container } from "../../styles/global";

export const HeaderStyle = styled('header', {
	position: 'absolute',
	top: 0,
	height: 96,
	width: "100%",
	borderBottom: "1px solid rgba(255,255,255,0.2)",
	display: "flex",
	alignItems: "center",
	zIndex: 2022,
	[`${Container}`]: {
		height: "100%",
		borderLeft: "1px solid rgba(255,255,255,0.2)",
		borderRight: "1px solid rgba(255,255,255,0.2)",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	},
	".header__logo": {
		position: "relative",
		paddingLeft: 23,
		"&:before": {
			content: "",
			backgroundColor: "$red800",
			boxShadow: "box- shadow: 0px 2px 4px rgba(255, 4, 13, 0.16)",
			width: 104,
			height: 1,
			position: "absolute",
			bottom: -28,
			left: 23,
		}
	},
	".header__logo-codeboost": {
		display: "flex",
		alignItems: "center",
		height: "100%",
		padding: "0 23px",
		borderLeft: "1px solid rgba(255,255,255,0.2)",
	}
})