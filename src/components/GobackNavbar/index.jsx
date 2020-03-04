import React from 'react';
import Style from './index.module.css';

export default function GobackNavbar() {
	return (
		<div className={Style.wrapper}>
			<i className={`${Style.back} flex icon`}></i>
		</div>
	)
}