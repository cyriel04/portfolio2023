import React from 'react'
import styles from './Navigation.module.scss'
import { Typography } from '@mui/material'

const Navigation = () => {
	return (
		<nav id="navigation" className={styles.navigation}>
			<div className="logo">
				<Typography variant="h5">CB</Typography>
			</div>
			<ul className={styles.links}>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Skills</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
