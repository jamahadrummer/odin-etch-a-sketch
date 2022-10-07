function gridAdd(insert, container) {
	insert.classList.add('grid');
	container.appendChild(insert);
};

function gridClear(container) {
	container.innerHTML = '';
};

function gridBuild(size) {
	for (i = 1; i <= size; i++) {
		const gridDiv = document.createElement('div');
		gridAdd(gridDiv, gridContainer);
	}
	const grids = document.querySelectorAll('.grid');
	grids.forEach(function (square) {
		square.addEventListener('mouseover', function () {
			square.classList.add('hover');
		});
	});
};

function gridMath(input) {
	if (input > 0) {
		let output = input * input;;
		return output;
	} else { return NaN };
};

function checkForm() {
	let value = document.getElementById('gridSize').value;
	return value;
};

const gridContainer = document.getElementById('gridContainer');
const gridSize = document.getElementById('gridSize');
const reset = document.getElementById('reset');
const enter = document.getElementById('enter');

enter.addEventListener('click', function () {
	let input = checkForm();
	let totalGrid = gridMath(input);
	gridClear(gridContainer);
	if (input <= 100) {
		gridContainer.style.gridTemplate = `repeat(${input}, 1fr) / repeat(${input}, 1fr)`
		gridBuild(totalGrid);
	}
});

gridSize.addEventListener('keyup', function (e) {
	if (e.code === 'Enter' || e.code === 'NumpadEnter') {
		enter.click()
	}
})

reset.addEventListener('click', function () {
	const grids = document.querySelectorAll('.grid')
	grids.forEach(square => {
		square.classList.remove('hover');
	});
});



