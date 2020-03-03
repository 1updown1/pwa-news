import React from 'react';
import { useParams } from 'react-router-dom';
import GobackNavbar from '../../components/GobackNavbar/index';
import NewsBody from '../../components/NewsBody/index';

export default function NewsDetail() {
	const { id: newsId } = useParams();
	console.log(newsId);
	const renderHtml = '<div>test</div>'
	return 	(
		<div style={{ paddingTop: 'var(--goback-nav-bar-height)'}}>
			<GobackNavbar />
			<NewsBody renderHtml={renderHtml}/>
		</div>
	)
}