(function () {
	localStorage.clear();
})();

const crearEmoji = (emoji) => {
	let img = document.querySelector("#emoji_user");
	if (!img) {
		img.src = emoji;
		let div = document.getElementById("emoji_display");
		div.appendChild(img);
		document.body.appendChild(div);
	} else {
		img = document.createElement("img");
		img.id="emoji_user";
		img.src = emoji;
		img.height = 150;
		img.width = 150;
		let div = document.getElementById("emoji_display");
		div.appendChild(img);
		document.body.appendChild(div);
	}
}

const emojiApi = function () {
	fetch("emoji.json")
	.then(response => response.json())
	//.then(emoji => console.log(emoji[4]))
	.then(emoji => crearEmoji(emoji))

}


