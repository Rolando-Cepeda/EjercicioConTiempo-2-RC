(function () {
	localStorage.clear();
})();

const crearEmoji = (emojiUrl) => {
	// Creamos o actualizamos la imagen
	let img = document.querySelector("#emoji_user");
	if (!img) {
		img = document.createElement("img");
		img.id = "emoji_user";
		img.height = 150;
		img.width = 150;
	}
	img.src = emojiUrl

	// Insertamos la img en el DIv(contenedor)
	let div = document.getElementById("emoji_display");
	div.appendChild(img);
	//document.body.appendChild(div);
};

// Accedemos a el valor de el input
const emojiApi = function () {
	const emojiCodeUser = document.getElementById("emoji_code").value.trim().toUpperCase();
	if (!emojiCodeUser) {
		alert("Por favor, introduce un código de emoji.");
		return;
	}

	fetch("emoji.json")
		.then(response => response.json())
		//.then(emoji => console.log(emoji[4]))
		.then(emojis => {
			// Buscamos el emoji por código
			const emojiCode = emojis.find(e => e.hexcode === emojiCodeUser);
			if (!emojiCode) {
				alert("El código del emoji introducido es incorrecto");
				return;
			}

			// Construimos la URL del emoji.
			const emojiUrl = "https://openmoji.org/data/color/svg/${emoji.hexcode}.svg";

			//Mostramos el emoji.
			crearEmoji(emojiUrl);
		}).catch(error => console.error("Error al cargar los emojis:", error));

};

// Enlazar el botón con la funcionalidad
document.getElementById("emoji_loading").addEventListener("click", emojiApi);
