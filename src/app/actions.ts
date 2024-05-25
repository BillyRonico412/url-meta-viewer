'use server'

import { zodMetadata } from '@/app/utils'
import urlMetadata from 'url-metadata'

export const getMetadata = async (url: string) => {
	const metadata = await urlMetadata(url)
	const metadataParsed = zodMetadata.safeParse(metadata)
	if (!metadataParsed.success) {
		throw new Error('Invalid metadata')
	}
	return metadataParsed.data
}
