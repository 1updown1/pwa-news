import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GobackNavbar from '../../components/GobackNavbar/index';
import NewsBody from '../../components/NewsBody/index';
import { instance as axios } from '../../request';

export default function NewsDetail() {
	const { id: newsId } = useParams();
	const [htmlObject, setHtmlObject]  = useState({title: '', date: '', content: ''});
	useEffect(() => {
		axios.get('/news/detail', { params: {id: newsId}}).then(({title, date, content}) => {
			setHtmlObject({
				title,
				date,
				content
			})
		})
	}, [newsId]);
	return 	(
		<div style={{ paddingTop: 'var(--goback-nav-bar-height)'}}>
			<GobackNavbar />
			<NewsBody {...htmlObject}/>
		</div>
	)
}