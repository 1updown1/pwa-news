import React from 'react';
import Style from './index.module.css';
import './news.css';

export default function NewsBody({ renderHtml }) {
	const factory = function () {
		return {__html: renderHtml}
	}
	return (
		// <div dangerouslySetInnerHTML={factory()}>
		<article className={Style.wrapper}>
			<header className="news-title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</header>

			<section className="news-sub-title">2017-11-11</section>

			<section className="news-content-wrapper">
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
				<p className="news-paragraph">123</p>
			</section>
		</article>
	)
}