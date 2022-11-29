import Image from "next/image";
import { StylePopUpVideo } from "./styles";

import IconPlay from "../../assets/play.svg"

export function PopupVideo({ label, thumb }) {
	return (
		<StylePopUpVideo>
			<span>{label}</span>

			<button style={{ background: `url(${thumb}) no-repeat center center` }}>
				<div>
					<Image src={IconPlay} alt="Icon play" />
				</div>
			</button>
		</StylePopUpVideo>
	)
}