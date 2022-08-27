function gridAdd(insert, container, text) {
	insert.classList.add('grid')
	insert.textContent = text
	container.appendChild(insert)
}

const gridContainer = document.querySelector('.gridContainer')
// const gridDiv = document.createElement('div')

for (i = 1; i <= 256; i++) {
	const gridDiv = document.createElement('div')
	gridAdd(gridDiv, gridContainer, i)
}

const grids = document.querySelectorAll('.grid')

grids.forEach(square => {
	square.addEventListener('mouseover', function () {
		square.classList.add('hover')
	})
});
