import Header from "../components/Header";
import SectionHero from "../components/Home/sectionHero";
import { ListCharacters } from "../components/listCharacters";

export default function Home() {
	return (
		<>
			<SectionHero></SectionHero>
			<ListCharacters></ListCharacters>
		</>
	)
}
