import React from 'react'
import ContentCard from '../components/ContentCard'
import styles from './Article.module.scss'

const Article = () => {
	return (
		<div className={styles.article}>
			<ContentCard />
			<ContentCard />
			<ContentCard />
		</div>
	)
}

export default Article
