const form = document.querySelector('form') as HTMLElement;
const date = document.querySelector('#date-input') as HTMLInputElement;;
const customerName = document.querySelector('#ustomer-name') as HTMLInputElement;
const purchasedAmount = document.querySelector('#amount-purchased') as HTMLInputElement;
const category = document.querySelector('#category') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        category.value,
        date.value,
        customerName.value,
        purchasedAmount.value
    );
    
});