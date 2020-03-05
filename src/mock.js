import Mock from 'mockjs';

Mock.setup({
	timeout: 1000
})

Mock.mock(/\/test/, 'get', {test: 'test'})