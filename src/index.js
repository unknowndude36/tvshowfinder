const form = document.querySelector("#search-form");

const movieContainer = document.querySelector("#movie-container");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	let searchTerm = form.querySelector("input");

	const config = {
		params: {
			q: searchTerm.value,
		},
	};

	const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);

	makeImages(res.data);

	searchTerm.value = "";
});

const makeImages = (array) => {
	if (movieContainer.innerHTML != "") {
		movieContainer.innerHTML = "";
	}
	array.forEach((elem) => {
		if (elem.show.image) {
			const newImage = document.createElement("img");

			newImage.src = elem.show.image.medium;

			movieContainer.appendChild(newImage);
		}
	});
};
