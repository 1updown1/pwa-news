import React from 'react';
import Style from './index.module.css';

export default function Placeholder() {
	return (
		<section className={Style.wrapper}>
			
			<section className={Style.contentArea}>
				<header className={Style.headerWrapper}>
					<section className={Style.header}></section>
					<section className={Style.header}></section>
				</header>
				<footer className={Style.footer}></footer>
			</section>

			<section className={Style.posterArea}></section>
		</section>
	)
}