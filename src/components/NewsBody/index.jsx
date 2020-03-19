import React from 'react';
import Style from './index.module.css';
import './news.css';

export default function NewsBody({ title, date, content }) {
	const factory = function () {
		return { __html: content}
	}
	return (
		<article className={Style.wrapper}>
			<header className="news-title">{title}</header>

			<section className="news-sub-title">{date}</section>

			<section className="news-content-wrapper" dangerouslySetInnerHTML={factory()}>
			</section>
		</article>
	)
}