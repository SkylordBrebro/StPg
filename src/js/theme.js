let currentIndex = localStorage.getItem("currentIndex") || document.currentScript.getAttribute('currentIndex');
currentIndex = parseInt(currentIndex);

const images = ["cover1.webp"];
const colorSets = [
	{
		"--text-color": "#c0caf5",
		"--hover-color": "#bb9af7",
		"--accent-color": "#7aa2f7",
		"--accent-color-2": "#f7768e",
		"--background-color": "#1a1b26",
	},
];

function updateColors() {
	const colorSet = colorSets[currentIndex];
	// Iterate through the colorSet and set the CSS variables
	for (const [property, value] of Object.entries(colorSet)) {
		document.documentElement.style.setProperty(property, value);
	}
}

// Set colors with current index first
updateColors(currentIndex);

// Set the initial image
document.getElementById("carouselImage").src = "../src/images/" + images[currentIndex];

// Image is opacity 0 and text is translated off screen by default
// Add the loaded class to the image and text to animate them in
window.onload = function() {
	document.getElementById("image").classList.add('loaded');
	document.getElementById("text").classList.add('loaded');
	// Preload the remaining images
	preloadImages();
};
