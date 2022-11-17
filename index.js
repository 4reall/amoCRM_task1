const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
	let timerId;

	const getRemainingTime = (seconds) => {
		let h = Math.floor(seconds / 3600);
		let min = Math.floor((seconds % 3600) / 60);
		let sec = seconds % 60;

		h = h < 10 ? `0${h}` : h;
		min = min < 10 ? `0${min}` : min;
		sec = sec < 10 ? `0${sec}` : sec;

		return `${h}:${min}:${sec}`;
	};

	return (seconds) => {
		if (timerId) clearInterval(timerId);

		timerEl.innerText = getRemainingTime(seconds);

		timerId = setInterval(() => {
			seconds--;

			if (seconds === 0) clearInterval(timerId);

			timerEl.innerText = getRemainingTime(seconds);
		}, 1000);
	};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
	inputEl.value = e.target.value.replace(/\D/gi, '');
});

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value);

	animateTimer(seconds);

	inputEl.value = '';
});
