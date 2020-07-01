const container = document.querySelector('.container');
const text = document.querySelector('#text');
const pointer = document.querySelector('.pointer-container');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

const totalTime = 7500;
const breatheTime = totalTime / 5 * 2;
const holdTime = totalTime / 5;

btnStart.addEventListener('click', startRelaxation);
btnStop.addEventListener('click', stopRelaxation);

let interval;
let timeout;

function startRelaxation() {
	breatheAnimation();
	interval = setInterval(breatheAnimation, totalTime);
	pointer.style.animation = 'rotate 7.5s linear forwards infinite';
	btnStart.disabled = true;
	btnStart.style.backgroundColor = 'grey';
}

function stopRelaxation() {
	text.innerHTML = 'Waiting for your new start';
	pointer.style.animation = '';
	clearInterval(interval);
	clearTimeout(timeout);
	btnStart.disabled = false;
	btnStart.style.backgroundColor = 'lightblue';
}

function breatheAnimation() {
	text.innerHTML = 'Breath in!';
	container.className = 'container grow';

	timeout = setTimeout(() => {
		text.innerText = 'Hold';
		setTimeout(() => {
			text.innerText = 'Breath out!';
			container.className = 'container shrink';
		}, holdTime);
	}, breatheTime);
}
