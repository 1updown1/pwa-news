import { useEffect } from 'react';
import { throttle } from '../utils';

export default function useLazyLoad(doms) {
	useEffect(() => {
		const fn = throttle(function (e) {
			if (!doms) return;
			for (let i = doms.length - 1; i >= 0; i--) {
				const imgDom = doms[i];
				if (imgDom.getAttribute('data-load')) break;
				const { top } = imgDom.getBoundingClientRect();
				if (top < document.scrollingElement.clientHeight * 2) {
					imgDom.setAttribute('data-load', 'loaded');
					imgDom.src = imgDom.getAttribute('data-src');
				}
			}
		}, 1000);
		window.addEventListener('scroll', fn, {
			passive: true,
		})
		return () => {
			window.removeEventListener('scroll', fn);
		};
	}, [doms]);
}