import React from 'react';
import { useHistory } from 'react-router-dom';
import Style from './index.module.css';

export default function GobackNavbar() {
	const history = useHistory();

	function back() {
		history.go(-1);
	}

	return (
		<div className={Style.wrapper}>
			<i className={`${Style.back} flex icon`} onClick={back}></i>
		</div>
	)
}