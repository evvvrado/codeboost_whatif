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

function SectionHero() {
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
						<h3>COMING SOON</h3>
						<h1>Marvel's WHAT IF… ?</h1>
						<p>
							Disponível no Disney+, What If… ? é uma série de animação que leva o público para um terreno desconhecido ao contar, de forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.
						</p>

						<a href="" target="_blank">
							Saiba mais
						</a>
					</div>

					<PopupVideo />
				</ContextText>
			</Container>
		</SectionHeroStyle>
	)
}

export default SectionHero
