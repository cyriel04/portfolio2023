import React from 'react'
import ContentCard from '../components/ContentCard'

const Article = () => {
	return (
		<div
			className="content"
			style={{
				display: 'flex',
				gap: 24
			}}
		>
			<ContentCard />
			<ContentCard />
			<ContentCard />
		</div>
	)
}

export default Article
