import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import styles from './ContentCard.module.scss'

const ContentCard = () => {
	return (
		<Card className={styles.contentCard}>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div" className={styles.title}>
					Lorem Ipsum
				</Typography>
				<Typography variant="body2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tortor magna, auctor nec faucibus at, vulputate cursus
					sapien. Phasellus tempor, tellus nec porttitor pellentesque, ex turpis convallis leo, sit amet interdum enim felis sit
					amet diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas.
				</Typography>
			</CardContent>
		</Card>
	)
}

export default ContentCard
