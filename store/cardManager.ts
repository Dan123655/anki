import { makeAutoObservable } from "mobx";
import { myCard } from "../types/typesImport";
import uuid from 'react-native-uuid';
class manageCards {
  newCardNameInput: string = "ima initial";
  newDescription: string = "ima intial description";
  myCards: myCard[] =
    [{ "description": "Cepitol of greit Briton7", "id": "d8b975bd-0002-43a8-b98f-e78e08bf4b6b", "name": "Lundun" },
      { "description": "A free and open source programming language by Microsoft. A superset of JavaScript, adds optional static typing to the language.", "id": "0d369017-c8ff-4a30-933c-8a22e13c4c52", "name": "Typescript" },
      { "description": "She's so fat, I swerved to miss her in my car and ran out of gas.", "id": "c8c593d8-71b4-47b3-9cce-8a8b09f4430e", "name": "Yo mama" }]
    constructor() {
    makeAutoObservable(this);
  }
  newName(value: string) {
    console.log(this.newCardNameInput);
    this.newCardNameInput = value;
    console.log('new card name ready' + this.newCardNameInput);
  }
  describeNew(value: string) {
    console.log(this.newDescription);
    this.newDescription = value;
    console.log('new description ready: '+this.newDescription);
  }
  clear() {
    this.newCardNameInput = "";
    this.newDescription = "";
  }
  saveCard() {
    console.log(this.myCards);
      const newCard = {
        id:uuid.v4(),
      name: this.newCardNameInput,
      description: this.newDescription,
    };
    this.myCards.push(newCard);
    this.clear();
    console.log(this.myCards);
    }
    deleteCard(id:string|number[]){
      this.myCards = this.myCards.filter((card)=>card.id !== id)
    }
}
export default new manageCards();
