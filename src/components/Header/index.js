import Image from "next/image"
import Link from "next/link"
import { HeaderStyle } from "./styles"

import LogoCodeboost from "../../assets/logo-codeboost.svg"
import Logo from "../../assets/logo.svg"
import { Container } from "../../styles/global"

function Header() {
	return (
		<HeaderStyle>
			<Container>
				<figure className="header__logo">
					<Link href="/">
						<Image src={Logo} alt="Logo Marvel" />
					</Link>
				</figure>

				<figure className="header__logo-codeboost">
					<Image src={LogoCodeboost} alt="Logo Codeboost" />
				</figure>
			</Container>
		</HeaderStyle>
	)
}

export default Header
