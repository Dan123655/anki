import { makeAutoObservable } from "mobx";

class manageCards{
    newCardNameInput:string = 'ima initial';
    newDescription:string = 'ima intial description';
    myCards: {}[] = [];//pour your data from mongo here(getCards i guess)
    constructor() {
        makeAutoObservable(this)
    }
    newName(value: string) {
        console.log(this.newCardNameInput)
        this.newCardNameInput = value;
        console.log(this.newCardNameInput)
    }
    describeNew(value: string) {
        console.log(this.newDescription)
        this.newDescription = value;
        console.log(this.newDescription)
    }
    clear() {
        this.newCardNameInput = ''
        this.newDescription = ''
    }
    saveCard() {
        console.log(this.myCards
        )
        const newCard = {
            name: this.newCardNameInput,
            description: this.newDescription
        }
        this.myCards.push(newCard)
        this.clear()
        console.log(this.myCards

            )
    }
}
export default new manageCards()