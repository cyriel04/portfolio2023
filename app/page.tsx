import Image from 'next/image'
import styles from './page.module.css'
import Navigation from './components/Navigation'

export default function Home() {
	return (
		<main className={styles.main}>
			<Navigation />
		</main>
	)
}
