const img = document.querySelector("img");

const getImage = async (searchTerm) => {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=lDkRuc9Z9QMVlg8gGKU7tbZ8MelQjIJe&s=${searchTerm}`,
		{ mode: "cors" }
	);
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;

    // Written without using async and await;

	// fetch(
	// 	`https://api.giphy.com/v1/gifs/translate?api_key=lDkRuc9Z9QMVlg8gGKU7tbZ8MelQjIJe&s=${searchTerm}`,
	// 	{ mode: "cors" }
	// )
	// 	.then(function (response) {
	// 		return response.json();
	// 	})
	// 	.then(function (response) {
	// 		console.log(response.data.images.original.url);
	// 		img.src = response.data.images.original.url;
	// 	})
	// 	.catch((e) => {
	// 		console.log(e);
	// 		alert("No Images Found");
	// 	});
};

const btn = document.getElementById("newGif");
btn.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("clicked");
	const input = document.getElementById("input");
	let searchTerm = input.value;
	console.log(searchTerm);
	getImage(searchTerm);
});

window.onload = () => {
	getImage("dogs");
};
