import Link from "next/link"
import { StyleCard } from "./styles"
import Image from "next/image"

export function CardCharacter({ image, name }) {
	return (
		<StyleCard>
			<Link href="#">
				<div className="image">
					<Image src={image} width={280} height={372} alt="Personagem" />
				</div>
				<div className="info">
					<div>
						<h3>{name}</h3>
						<span>Marvel Studio</span>
					</div>

					<span>What if</span>
				</div>
			</Link>
		</StyleCard>
	)
}
