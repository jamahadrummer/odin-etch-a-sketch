function gridAdd(insert, container, text) {
	insert.classList.add('grid');
	insert.textContent = text;
	container.appendChild(insert);
};

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
		});
	});
};

function gridMath(input) {
	if (input > 0) {
		let output = input * input
		return output
	} else { return NaN }
}


function checkForm() {
	let value = document.querySelector('#gridSize').value;
	return value
};

const gridContainer = document.querySelector('.gridContainer');
const reset = document.querySelector('#reset');
const enter = document.querySelector('#enter');


enter.addEventListener('click', function () {
	let input = checkForm()
	let totalGrid = gridMath(input)
	gridClear(gridContainer);
	gridBuild(totalGrid);
});

reset.addEventListener('click', function () {
	const grids = document.querySelectorAll('.grid')
	grids.forEach(square => {
		square.classList.remove('hover');
	});
});
