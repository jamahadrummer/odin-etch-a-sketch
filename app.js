function gridAdd(insert, container, text) {
	insert.classList.add('grid');
	insert.textContent = text;
	container.appendChild(insert);
}

function gridClear(container) {
	container.innerHTML = '';
};

function gridBuild(size) {
	for (i = 1; i <= size; i++) {
		const gridDiv = document.createElement('div');
		gridAdd(gridDiv, gridContainer, i);
	}
	const grids = document.querySelectorAll('.grid');
	grids.forEach(square => {
		square.addEventListener('mouseover', function () {
			square.classList.add('hover');
		})
	})
}

function checkForm() {
	let value = document.getElementById('gridSize').value;
	return value 
}

const gridContainer = document.querySelector('.gridContainer');
const reset = document.querySelector('#reset');
const enter = document.querySelector('#enter');


enter.addEventListener('click', function () {
	let input = checkForm()
	gridClear(gridContainer);
	gridBuild(input);
})

reset.addEventListener('click', function () {
	const grids = document.querySelectorAll('.grid')
	grids.forEach(square => {
		square.classList.remove('hover');
	});
});