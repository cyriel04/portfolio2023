import React from 'react'
import styles from './Navigation.module.scss'
import { Typography } from '@mui/material'

const Navigation = () => {
	return (
		<nav id="navigation" className={styles.navigation}>
			<div className="logo">
				<Typography fontWeight={700} className={styles.title} variant="h5">
					CB
				</Typography>
			</div>
			<ul className={styles.links}>
				<li>
					<a href="#">projects</a>
				</li>
				<li>
					<a href="#">skills</a>
				</li>
				<li>
					<a href="#">contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
