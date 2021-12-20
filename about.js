console.log("hello world");



const handleSubmit = (e) => {
	e.preventDefault();
	alert('Submitted Successfully!');
}

// const handleImg = (e) => {
// 	alert('Give the user a compliment.')
// }

let form = document.querySelector('form#submitBtn');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', () => alert('Great job moving your mouse!'))
