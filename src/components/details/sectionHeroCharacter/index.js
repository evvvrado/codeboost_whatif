import { SectionCharacterStyle } from "./style"
import { Container } from "../../../styles/global"

import Image from "next/image"

export function SectionHeroCharacter({ data: { name, description, image } }) {
	return (
		<SectionCharacterStyle>
			<Container>
				<div className="image">
					<Image src={image.url} width={486} height={631} alt="Imagem do personagem" />
				</div>

				<div className="info">
					<span>A História</span>
					<div>
						<h1>{name}</h1>
						<p>
							{description[0].text}
						</p>
					</div>
				</div>
			</Container>
		</SectionCharacterStyle>
	)
}
