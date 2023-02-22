"use strict";
const form = document.querySelector('form');
const date = document.querySelector('#date-input');
;
const customerName = document.querySelector('#ustomer-name');
const purchasedAmount = document.querySelector('#amount-purchased');
const category = document.querySelector('#category');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(category.value, date.value, customerName.value, purchasedAmount.value);
});
