import { Sales } from './modules/sales.js';
const newSale = new Sales('Home', 'Aidan', 400, '23-Dec-2023');
console.log(newSale);
let singleSale = [];
const form = document.querySelector('form');
const date = document.querySelector('#date-input');
;
const customerName = document.querySelector('#ustomer-name');
const purchasedAmount = document.querySelector('#amount-purchased');
const category = document.querySelector('#category');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(category.valueAsDate, date.value, customerName.value, purchasedAmount.valueAsNumber);
});
