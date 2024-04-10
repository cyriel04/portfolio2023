import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import theme from './theme'
import { ThemeProvider } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Cyriel Basilio',
	description: 'Portfolio Website'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
