import { makeAutoObservable } from "mobx";
import { myCard } from "../types/typesImport";
import uuid from 'react-native-uuid';
class manageCards {
  newCardNameInput: string = "ima initial";
  listOfCategories: string[] = ["math","work","home","school"]
  newDescription: string = "ima intial description";
  newCategory: string = "math";
  newText: string = "white";
  newColor: string = "bg-slate-800";
  myCards: myCard[] =
    [{ "category":"math","color": "bg-slate-800", "text": "white", "description": "Cepitol of greit Briton7", "id": "d8b975bd-0002-43a8-b98f-e78e08bf4b6b", "name": "Lundun" },
    { "category":"math","color": "bg-lime-500", "text": "white", "description": "A free and open source programming language by Microsoft. A superset of JavaScript, adds optional static typing to the language.", "id": "0d369017-c8ff-4a30-933c-8a22e13c4c52", "name": "Typescript" },
    { "category":"math","color": "bg-orange-500", "text": "white", "description": "She's so fat, I swerved to miss her in my car and ran out of gas.", "id": "c8c593d8-71b4-47b3-9cce-8a8b09f4430e", "name": "Yo mama" }]
  constructor() {
    makeAutoObservable(this);
  }
  newName(value: string) {
    this.newCardNameInput = value;
  }
  describeNew(value: string) {
    this.newDescription = value;
  }
  clear() {
    this.newCardNameInput = "";
    this.newDescription = "";
  }
  text(text: string) {
    this.newText = text;
  }
  color(color: string) {
    this.newColor = color;
  }
  toCategory(category: string) {
    this.newCategory = category;
  }
  saveCard() {

    const newCard = {
      id: uuid.v4(),
      name: this.newCardNameInput,
      description: this.newDescription,
      color: this.newColor,
      text: this.newText,
      category:this.newCategory
      };
    this.myCards.push(newCard);
    this.clear();

  }
  

  deleteCard(id: string | number[]) {
    this.myCards = this.myCards.filter((card) => card.id !== id)
  }
  
  editCard(id: string | number[], name: string, description: string, color: string, text: string, category: string) {
    this.myCards = this.myCards.map((card) => {
      if (card.id === id) {
        card.name = name;
        card.description = description;
        card.color = color;
        card.text = text;
        card.category = category;
      }
      return card;
    })
  }
  addCategory(category: string) {
    this.listOfCategories.push(category);
  }
}
export default new manageCards();
