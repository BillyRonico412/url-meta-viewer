import { z } from 'zod'

export const zodMetadata = z.object({
	title: z.string(),
	description: z.string(),
	url: z.string(),
})
