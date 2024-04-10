import React from 'react'
import styles from './Footer.module.scss'
import { Link } from '@mui/material'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Link
				href="https://github.com/cyriel04/portfolio2023"
				underline="none"
				className={styles.link}
				variant="body1"
				fontWeight={600}
			>
				Created by Me
			</Link>
		</div>
	)
}

export default Footer
