import SectionHero from "../components/Home/sectionHero";
import { ListCharacters } from "../components/listCharacters";

import { PageTitle } from "../components/PageTitle"

import { getPrismicClient } from "../service/prismic"


export default function Home({ dataPage, characterList }) {
	return (
		<>
			<PageTitle title="What If? - Codeboost" description="Um projeto desenvolvido no curso Codeboost" />
			<SectionHero data={dataPage}></SectionHero>
			<ListCharacters list={characterList}></ListCharacters>
		</>
	)
}


export const getStaticProps = async () => {
	const prismic = getPrismicClient();

	const contentsPages = await prismic.getSingle("home")
	const characterList = await prismic.getAllByType('character')

	return {
		props: {
			dataPage: contentsPages,
			characterList,
		},

		revalidate: 60,
	}

}