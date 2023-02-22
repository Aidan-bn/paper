export class Sales {
    category: string
    name: string
    amount: number
    dateSold: string

    constructor(category: string, name: string, amount: number, dateSold: string){
        this.category = category;
        this.name = name;
        this.amount = amount;
        this.dateSold = dateSold;
    }

    print(){
        return `${this.category} was offered to ${this.name} at cost of ${this.amount} on ${this.dateSold}`
    }
}