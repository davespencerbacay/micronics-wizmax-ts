const helpers = {
	titleCase: (str: string) => {
		return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
	},
};

export default helpers;
