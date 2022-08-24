import { Component } from '@angular/core';


interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  game_name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: []
})


export class DynamicsComponent {

  person: Person = {
    name: 'Ivan',
    favorites: [
      { id: 1, game_name: 'Mario Kart' },
      { id: 2, game_name: 'King Of Fighter' },
      { id: 3, game_name: 'Mortal Kombat' },
    ]
  }

  save() {
    console.log('Form posted!!')
  }

  deleteGame( index: number ) {
    this.person.favorites.splice( index, 1 );
  }

}
