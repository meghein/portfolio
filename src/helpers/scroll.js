export default function scroll(page) {
	document
		.getElementById(page)
		.scrollIntoView({ behavior: 'smooth' });

};