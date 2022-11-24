import { styled } from '../../styles'
import bgThumb from "../../assets/thumb-video.png"

export const StylePopUpVideo = styled("div", {
	width: "100%",
	maxWidth: 312,


	span: {
		display: "block",
		fontWeight: 600,
		fontSize: 12,
		lineHeight: "18px",
		letterSpacing: "0.095em",
		color: "$gray100",
		marginBottom: 14,
	},

	button: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 179,
		background: `url(${bgThumb.src}) no-repeat center center`,
		border: 0,
		borderRadius: 10,

		"& > div": {
			width: 47,
			height: 47,
			background: "rgba(19,19,19,.8)",
			backdropFilter: "blur(2.5px)",
			borderRadius: "50%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			transition: ".32s ease",
		},

		"&:hover": {
			"& > div": {
				transform: "scale(1.1)",
			}
		}
	}
})