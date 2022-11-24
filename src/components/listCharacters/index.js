import Image from "next/image"

import { StyleListCharacters, StyleSectionCharacters } from "./styles"
import { Container } from "../../styles/global"
import LogoMarvel from "../../assets/logo.svg"

import ImageCharacter from "../../assets/character.jpg"
import { CardCharacter } from "../cardCharacter"

const characters = [
	{
		name: "Killmonger",
		image: ImageCharacter,
		slug: "/killmonger",
	},
]

export function ListCharacters() {
	return (
		<StyleSectionCharacters>
			<Container>
				<div className="title">
					<span>What if</span>
					<h2>Personagens Marvel </h2>
				</div>

				<StyleListCharacters>
					{characters.map((character) => {
						return (
							<CardCharacter
								key={character.name}
								image={character.image}
								name={character.name}
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
