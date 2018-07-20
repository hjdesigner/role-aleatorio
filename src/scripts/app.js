import { day, month, colors } from './components/dateJson';
import './app.scss';

const buttonDiscover = document.querySelector('[data-js="discover"]');
const selectDay = document.querySelector('[data-js="selectDay"]');
const selectMonth = document.querySelector('[data-js="selectMonth"]');
const selectColors = document.querySelector('[data-js="selectColors"]');
const title = document.querySelector('[data-js="title"]');
const form = document.querySelector('[data-js="form"]');
const button = document.querySelector('[data-js="button"]');
const result = document.querySelector('[data-js="result"]');
const resultTitle = document.querySelector('[data-js="result-title"]');

buttonDiscover.addEventListener('click', () => {
	const valueDay = selectDay.options[selectDay.selectedIndex].value;
	const valueMonth = selectMonth.options[selectMonth.selectedIndex].value;
	const valueColors = selectColors.options[selectColors.selectedIndex].value;
	const textDay = day.filter(item => +valueDay === item.id + 1);
	const textMonth = month.filter(item => +valueMonth === item.id + 1);
	const textColors = colors.filter(item => +valueColors === item.id + 1);
	title.classList.add('hide');
	form.classList.add('hide');
	button.classList.add('hide');
	result.classList.add('show');

	resultTitle.innerHTML = `Seu rolê aleatório é: ${textDay[0].text} ${textMonth[0].text} ${textColors[0].text}`;
});
