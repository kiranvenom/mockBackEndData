const generateUsername = () => {
	const adjectives = [
		'Happy',
		'Silly',
		'Cheerful',
		'Lucky',
		'Creative',
		'Brave',
	];
	const nouns = ['Cat', 'Dog', 'Tiger', 'Lion', 'Elephant', 'Monkey'];
	const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const noun = nouns[Math.floor(Math.random() * nouns.length)];
	return adjective + noun + Math.floor(Math.random() * 100);
};

const generateEmail = () => {
	const domains = ['example.com', 'test.com', 'demo.com', 'fake.com'];
	const domain = domains[Math.floor(Math.random() * domains.length)];
	return generateUsername().toLowerCase() + '@' + domain;
};

const userList = [
	{ id: 1, username: generateUsername(), email: generateEmail() },
	{ id: 2, username: generateUsername(), email: generateEmail() },
	{ id: 3, username: generateUsername(), email: generateEmail() },
	{ id: 4, username: generateUsername(), email: generateEmail() },
	{ id: 5, username: generateUsername(), email: generateEmail() },
	{ id: 6, username: generateUsername(), email: generateEmail() },
	{ id: 7, username: generateUsername(), email: generateEmail() },
	{ id: 8, username: generateUsername(), email: generateEmail() },
	{ id: 9, username: generateUsername(), email: generateEmail() },
	{ id: 10, username: generateUsername(), email: generateEmail() },
	{ id: 11, username: generateUsername(), email: generateEmail() },
	{ id: 12, username: generateUsername(), email: generateEmail() },
	{ id: 13, username: generateUsername(), email: generateEmail() },
	{ id: 14, username: generateUsername(), email: generateEmail() },
	{ id: 15, username: generateUsername(), email: generateEmail() },
	{ id: 16, username: generateUsername(), email: generateEmail() },
	{ id: 17, username: generateUsername(), email: generateEmail() },
	{ id: 18, username: generateUsername(), email: generateEmail() },
	{ id: 19, username: generateUsername(), email: generateEmail() },
	{ id: 20, username: generateUsername(), email: generateEmail() },
	{ id: 21, username: generateUsername(), email: generateEmail() },
	{ id: 22, username: generateUsername(), email: generateEmail() },
	{ id: 23, username: generateUsername(), email: generateEmail() },
	{ id: 24, username: generateUsername(), email: generateEmail() },
	{ id: 25, username: generateUsername(), email: generateEmail() },
	{ id: 26, username: generateUsername(), email: generateEmail() },
	{ id: 27, username: generateUsername(), email: generateEmail() },
	{ id: 28, username: generateUsername(), email: generateEmail() },
	{ id: 29, username: generateUsername(), email: generateEmail() },
	{ id: 30, username: generateUsername(), email: generateEmail() },
	{ id: 31, username: generateUsername(), email: generateEmail() },
	{ id: 32, username: generateUsername(), email: generateEmail() },
	{ id: 33, username: generateUsername(), email: generateEmail() },
	{ id: 34, username: generateUsername(), email: generateEmail() },
	{ id: 35, username: generateUsername(), email: generateEmail() },
	{ id: 36, username: generateUsername(), email: generateEmail() },
	{ id: 37, username: generateUsername(), email: generateEmail() },
	{ id: 38, username: generateUsername(), email: generateEmail() },
	{ id: 39, username: generateUsername(), email: generateEmail() },
	{ id: 40, username: generateUsername(), email: generateEmail() },
	{ id: 41, username: generateUsername(), email: generateEmail() },
	{ id: 42, username: generateUsername(), email: generateEmail() },
	{ id: 43, username: generateUsername(), email: generateEmail() },
	{ id: 44, username: generateUsername(), email: generateEmail() },
	{ id: 45, username: generateUsername(), email: generateEmail() },
	{ id: 46, username: generateUsername(), email: generateEmail() },
	{ id: 47, username: generateUsername(), email: generateEmail() },
	{ id: 48, username: generateUsername(), email: generateEmail() },
	{ id: 49, username: generateUsername(), email: generateEmail() },
	{ id: 50, username: generateUsername(), email: generateEmail() },
];

module.exports = userList;
