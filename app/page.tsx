import Image from 'next/image'
import styles from './page.module.css'
import Navigation from './components/Navigation'

import { Typography } from '@mui/material'
import Article from './layout/Article'
import Footer from './components/Footer'

export default function Home() {
	return (
		<div>
			<Navigation />
			<main className={styles.main}>
				<div className={styles.about}>
					<Typography variant="h2" fontWeight={700}>
						Hi, I am <span className={styles.nameText}>Cyriel Basilio.</span>
					</Typography>
					<Typography variant="h4" fontWeight={500}>
						A Front End Engineer.
					</Typography>
					<Typography variant="body1" fontWeight={500} className={styles.descriptionText}>
						Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem
						eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
					</Typography>
				</div>

				<br />
				<br />
				<br />
				<Typography variant="h5" fontWeight={600}>
					PROJECTS
				</Typography>
				<br />
				<Article />
			</main>
			<Footer />
		</div>
	)
}
