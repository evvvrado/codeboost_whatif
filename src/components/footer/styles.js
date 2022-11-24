import { styled } from '../../styles'
import { Container } from '../../styles/global'

export const FooterStyle = styled("footer", {
	borderTop: "1px solid rgba(255,255,255, 0.2)",
	padding: "40px 0",

	[`${Container}`]: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between",

		"& > div": {
			display: "flex",
			alignItems: "flex-start",

			p: {
				flex: 1,
				maxWidth: 593,
				marginLeft: "18.6rem",
				fontWeight: 400,
				fontSize: "14px",
				lineHeight: "21px",
				color: "$gray500"
			},

			strong: {
				fontWeight: 700,
				fontSize: "14px",
				lineHeight: "21px",
				color: "white"
			}

		}
	},
})