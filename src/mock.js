import Mock from 'mockjs';

function resWrapper(data){
	return {
		code: 200,
		res: data,
		errMsg: '',
	}
}

Mock.setup({
	timeout: 1000
})

Mock.mock(/\/test/, 'get', {test: 'test'})

Mock.mock(/\/newsList/, 'get', resWrapper([
	{
		id: '@id',
		title: '@ctitle',
		posterImageUrl: '@image',
		num: '@integer(10, 100000)',
	},
]))