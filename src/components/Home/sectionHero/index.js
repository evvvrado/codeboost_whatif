import { AreaSocial, ContextText, SectionHeroStyle } from "./styles"
import { Container } from "../../../styles/global"

import IconYoutube from "../../../assets/youtube.svg"
import IconInstagram from "../../../assets/instagram.svg"
import Image from "next/image"
import { PopupVideo } from "../../popupVideo"

const socials = [
	{
		name: "Youtube",
		url: "#",
		icon: IconYoutube,
	},

	{
		name: "Instagram",
		url: "#",
		icon: IconInstagram,
	},
]

function SectionHero({ data: { data } }) {
	return (
		<SectionHeroStyle>
			<Container>
				<AreaSocial>
					<ul>
						{socials.map(({ name, url, icon }) => {
							return (
								<li key={`social-${name}`}>
									<a href={url}>
										<Image src={icon} alt={name} />
									</a>
								</li>
							)
						})}
					</ul>
				</AreaSocial>

				<ContextText>
					<div className="left">
						<h3>{data.subtitlehero}</h3>
						<h1>{data.titlehero}</h1>
						<p>
							{data.descriptionhero[0].text}
						</p>

						<a href={data.urlbutton.url} target="_blank" rel="noreferrer">
							{data.labelbutton}
						</a>
					</div>

					<PopupVideo label={data.labeltrailer} thumb={data.thumbnailtrailer.url} />
				</ContextText>
			</Container>
		</SectionHeroStyle>
	)
}

export default SectionHero
