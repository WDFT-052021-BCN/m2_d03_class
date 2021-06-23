/*
1 - Query the DOM elements needed for search and manipulation
2 - Save the API variable to use for searching
3 - Set the event listener on form submit
4 - Prevent the default behaviour for the event
5 - Reset the display so we don't have old data
6 - Extract the value from the input and create the query string
7 - Use fetch to get the data
8 - convert data to JSON
9 - loop through all the results
10 - create the HTML markup
11 - Set the content to data
12 - Append to DOM
*/

//1 - Query the DOM elements needed for search and manipulation
const searchForm = document.getElementById('search');
const showDetails = document.getElementById('show-details');

//2 - Save the API variable to use for searching
const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

//3 - Set the event listener on form submit
searchForm.addEventListener('submit', (event) => {
	//4 - Prevent the default behaviour for the event
	event.preventDefault();

	//5 - Reset the display so we don't have old data
	showDetails.innerText = '';

	//6 - Extract the value from the input and create the query string
	let userInput = event.target[0].value;

	let queryString = apiUrl + userInput;

	//7 - Use fetch to get the data
	fetch(queryString)
		//8 - convert data to JSON	console.log(queryString);
		.then((data) => data.json())
		.then((allData) => {
			//9 - loop through all the results
			allData.forEach((eachElement) => {
				
				//10 - Set the content to data
				let title = eachElement.show.name;
				let image = eachElement.show.image.medium;
				let description = eachElement.show.summary;

				//11 - create the HTML markup
				let titleHtml = document.createElement('h3');
				titleHtml.innerText = title; //eachElement.show.name;

				let imageHtml = document.createElement('img');
				imageHtml.src = image;

				let descriptionHtml = document.createElement('div');
				descriptionHtml.innerHTML = description; //eachElement.show.summary;

				//12 - Append to DOM
				showDetails.appendChild(titleHtml);
				showDetails.appendChild(imageHtml);
				showDetails.appendChild(descriptionHtml);
			});
		})
		.catch((error) => console.log(error));

});
