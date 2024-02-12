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
				<Typography variant="h2" fontWeight={700}>
					Hi, I am Cyriel Basilio.
				</Typography>
				<Typography variant="h3" fontWeight={500}>
					A Front End Developer.
				</Typography>
				<br />
				<br />
				<br />
				<Typography variant="h4">Projects</Typography>
				<br />
				<Article />
			</main>
		</div>
	)
}
