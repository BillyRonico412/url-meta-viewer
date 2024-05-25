import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

const font = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'URLMetaViewer',
	description: 'A simple tool to view metadata of a URL',
}

interface Props {
	children: React.ReactNode
}

const RootLayout = (props: Props) => {
	return (
		<html lang="en">
			<body className={font.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
					{props.children}
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	)
}

export default RootLayout
