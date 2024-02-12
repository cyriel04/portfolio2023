import Image from 'next/image'
import styles from './page.module.css'
import Navigation from './components/Navigation'

import { Typography } from '@mui/material'
import Article from './layout/Article'

export default function Home() {
	return (
		<div>
			<Navigation />
			<main className={styles.main}>
				<Typography variant="h4">Portfolio</Typography>
				<br />
				<Article />
			</main>
		</div>
	)
}
