import { createClient } from '@prismicio/client'

export function getPrismicClient(req) {
	const prismic = createClient(process.env.PRISMIC_ENDPOINT, {
		req,
		accessToken: process.env.PRISMIC_ACESS_TOKEN
	})

	return prismic;

}