const x = {
	foobar<T>() {},
	delete<T>() {},
	yield<T>() {},
	async<T>() {},
	async foobar<T>() {},
	async delete<T>() {},
	await<T>() {},
};

const y = {
	foobar() {},
	delete() {},
	yield() {},
	async() {},
	async foobar() {},
	async delete() {},
	await() {},
};
