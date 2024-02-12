import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ContentCard = () => {
	return (
		<div>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						Lorem Ipsum
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tortor magna, auctor nec faucibus at, vulputate
						cursus sapien. Phasellus tempor, tellus nec porttitor pellentesque, ex turpis convallis leo, sit amet interdum enim
						felis sit amet diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
						Maecenas.
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

export default ContentCard
