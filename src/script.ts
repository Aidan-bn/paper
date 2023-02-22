import { Sales } from './modules/sales.js';

const newSale = new Sales('Home', 'Aidan', 400, '23-Dec-2023');
console.log(newSale);

//inorder pass the contents in an array based on class format
let singleSale: Sales[] = []

const form = document.querySelector('form') as HTMLElement;
const date = document.querySelector('#date-input') as HTMLInputElement;;
const customerName = document.querySelector('#ustomer-name') as HTMLInputElement;
const purchasedAmount = document.querySelector('#amount-purchased') as HTMLInputElement;
const category = document.querySelector('#category') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        category.valueAsDate,
        date.value,
        customerName.value,
        purchasedAmount.valueAsNumber
    );
    
});