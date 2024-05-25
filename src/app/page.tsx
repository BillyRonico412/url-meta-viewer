'use client'

import { getMetadata } from '@/app/actions'
import type { zodMetadata } from '@/app/utils'
import MetadataItem from '@/components/MetadataItem'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import urlRegex from 'url-regex'
import type { z } from 'zod'

const Home = () => {
	const [url, setUrl] = useState('')
	const [loading, setLoading] = useState(false)
	const [metadata, setMetadata] = useState<z.infer<typeof zodMetadata> | undefined>(undefined)

	const onClickButton = async () => {
		setLoading(true)
		try {
			if (url === '') {
				toast.error('URL is required')
				return
			}
			if (!urlRegex().test(url)) {
				toast.error('Invalid URL')
				return
			}
			setMetadata(await getMetadata(url))
			toast.success('Success')
		} catch (error) {
			console.error(error)
			toast.error('An error occurred')
		} finally {
			setLoading(false)
		}
	}
	return (
		<main className="container px-4 py-8">
			<h1 className="text-center font-bold text-4xl">URLMetaViewer</h1>
			<p className="mt-2 text-center">A simple tool to view metadata of a URL</p>
			<div className="mt-8 flex gap-x-4">
				<Input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
				<Button type="submit" onClick={onClickButton} disabled={loading}>
					View
				</Button>
			</div>
			{metadata && (
				<Alert variant="default" className="mt-16">
					<AlertTitle>
						Result for{' '}
						<Link href={metadata.url} className="underline">
							"{metadata.url}"
						</Link>
					</AlertTitle>
					<AlertDescription>
						<div className="mt-4 space-y-4">
							<MetadataItem metaKey="title" value={metadata.title} />
							<MetadataItem metaKey="description" value={metadata.description} />
						</div>
					</AlertDescription>
				</Alert>
			)}
		</main>
	)
}

export default Home
