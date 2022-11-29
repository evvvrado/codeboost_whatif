import Image from "next/image"
import { getPrismicClient } from "../../service/prismic"

import { StyleListCharacters, StyleSectionCharacters } from "./styles"
import { Container } from "../../styles/global"
import LogoMarvel from "../../assets/logo.svg"

import { CardCharacter } from "../cardCharacter"


export function ListCharacters({ list }) {
	return (
		<StyleSectionCharacters>
			<Container>
				<div className="title">
					<span>What if</span>
					<h2>Personagens Marvel </h2>
				</div>

				<StyleListCharacters>
					{list.map((character) => {
						return (
							<CardCharacter
								key={character.id}
								image={character.data.image.url}
								name={character.data.name}
								slug={character.data.slug}
							/>
						)
					})}

					<div className="marvel">
						<Image src={LogoMarvel} alt="Marvel Studios" />
					</div>
				</StyleListCharacters>
			</Container>
		</StyleSectionCharacters>
	)
}
