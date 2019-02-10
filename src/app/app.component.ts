import { Component } from '@angular/core';
import { Card } from './card'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  get Sorted(): Card[]{
    console.log('access')
   return this.cards.sort((a,b) => b.votes - a.votes); //arrow function and use simple sort *if use b,a is desc sort
  }
  onClick(firstName: HTMLInputElement,lastName: HTMLInputElement){
   const card = new Card(firstName.value, lastName.value, 0);
   this.cards.push(card);
   console.log(this.cards);
   firstName.value = '';
   lastName.value = '';
   
  }
}

