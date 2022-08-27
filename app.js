function gridAdd(insert, container, text) {
	insert.classList.add('grid')
	insert.textContent = text
	container.appendChild(insert)
}

const gridContainer = document.querySelector('.gridContainer')

for (i = 1; i <= 256; i++) {
	const gridDiv = document.createElement('div')
	gridAdd(gridDiv, gridContainer, i)
}

const grids = document.querySelectorAll('.grid')
const reset = document.querySelector('#reset')

grids.forEach(square => {
	square.addEventListener('mouseover', function () {
		square.classList.add('hover')
	})
});




reset.addEventListener('click', function () {
	grids.forEach(square => {
		square.classList.remove('hover')
	})
}

)