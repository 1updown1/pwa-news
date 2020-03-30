import { useEffect } from 'react';
import { throttle } from '../utils';

export default function useLazyLoad(doms) {
	useEffect(() => {
		const fn = throttle(function (e) {
			console.log(doms)
		}, 1000);
		window.addEventListener('scroll', fn, {
			passive: true,
		})
		return () => {
			window.removeEventListener('scroll', fn);
		};
	}, [doms]);
}