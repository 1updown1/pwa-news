export function wrapperAwait(p) {
	return p.then(res => [null, res]).catch(err => [err || 'error', null]);
}