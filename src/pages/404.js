import { PageNotFound } from "../components/pageNotFound";

import { PageTitle } from "../components/PageTitle"
export default function Error() {

	return <>
		<PageTitle title="Página não encontrada" description="Um projeto desenvolvido no curso Codeboost" />
		<PageNotFound />
	</>
}
