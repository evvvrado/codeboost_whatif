import { styled } from '../../styles'

export const StyleSectionCharacters = styled('section', {
	paddingTop: 56,
	paddingBottom: 72,

	".title": {
		display: "flex",
		alignItems: "center",
		marginBottom: 56,

		span: {
			fontWeight: 400,
			fontSize: "18px",
			lineHeight: "27px",
			color: "$white",
			opacity: 0.4,
			marginRight: "11.3rem",
		},
		h2: {
			position: "relative",
			fontWeight: 600,
			fontSize: "25px",
			lineHeight: "35px",
			color: "$white",
			maxWidth: "21.6rem",
			paddingLeft: 16,

			"&:before": {
				content: "",
				position: "absolute",
				left: 0,
				top: 5.5,
				width: 2,
				height: 59,
				backgroundColor: "$red800"
			}

		},

	}
})

export const StyleListCharacters = styled('div', {
	display: 'grid',
	gridTemplateColumns: "repeat(4,1fr)",
	gridGap: "40px 3.3rem",


	".marvel": {
		width: "28rem",
		height: "36.8rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
})