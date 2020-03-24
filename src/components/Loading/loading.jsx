import React from 'react';
import Style from './loading.module.css';

if('paintWorklet' in window.CSS){
	window.CSS.paintWorklet.addModule('loadingWorklet.js');
}

export default function Loading() {
	return (
		<section className={Style.loadingWrapper}>
			{/* <div className={Style.circleWrapper}>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
				<div className={Style.loadingBar}></div>
			</div> */}
		</section>
	)
}