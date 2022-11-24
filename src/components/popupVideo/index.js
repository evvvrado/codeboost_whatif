import Image from "next/image";
import { StylePopUpVideo } from "./styles";

import IconPlay from "../../assets/play.svg"

export function PopupVideo() {
	return (
		<StylePopUpVideo>
			<span>ASSISTA AO TRAILER</span>

			<button>
				<div>
					<Image src={IconPlay} alt="Icon play" />
				</div>
			</button>
		</StylePopUpVideo>
	)
}