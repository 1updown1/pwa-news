import React from 'react';
import Style from './newsItem.module.css';
import img from '../../img/poster.webp';

export default function NewsItem({ title, clickHandler, id, posterImageUrl, num, pushDomRef}) {
	const newsClick = function () {
		clickHandler(id)
	}
	return (
		<section className={Style.wrapper} onClick={newsClick}>

			<section className={Style.contentArea}>
				<header className={Style.headerWrapper}>
					<section className={Style.header}>{title}</section>
				</header>
				<footer className={Style.footer}>{num}</footer>
			</section>

			<section className={Style.posterArea}>
				<img data-src={posterImageUrl} src={img} className={Style.poster} alt="" ref={pushDomRef}/>
			</section>
		</section>
	)
}