import { styled } from "../../styles"
import { Container } from "../../styles/global"

export const StylePageNotFound = styled("section", {
	marginTop: 96,
	paddingTop: 95,
	paddingBottom: 150,

	[`${Container}`]: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},

	h1: {
		fontWeight: 600,
		fontSize: "4.9rem",
		lineHeight: "5.9rem",
		marginBottom: 24,
	},

	p: {
		fontWeight: 400,
		fontSize: "1.6rem",
		lineHeight: "2.4rem",
		textAlign: "center",
		maxWidth: 641,
		marginBottom: 40,
	},

	a: {
		display: "inline-block",
		lineHeight: "5.4rem",
		background: "$red900",
		borderRadius: 5,
		padding: "0 73px",

		fontWight: 600,
		fontSize: "1.6rem",
		color: "$white",
		transition: ".32s ease",
		marginBottom: 72,

		"&:hover": {
			filter: "brightness(0.8)"
		}
	}

})