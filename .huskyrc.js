module.exports = {
	hooks: {
		'pre-commit': 'lint-staged',
		'pre-push': 'eslint --debug "src/**/*.js" --fix'
	}
};
