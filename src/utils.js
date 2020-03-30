export function wrapperAwait(p) {
	return p.then(res => [null, res]).catch(err => [err || 'error', null]);
}

export function throttle(cb, delay) {
	let timer = null;
	return function () {
		const arg = arguments;
		if(!timer){
			timer = setTimeout(() => {
				clearTimeout(timer);
				timer = null;
				cb.apply(this, [...arg]);
			}, delay);
		}
	}
}