import { Component, OnInit } from '@angular/core';
import { CardsDto } from "../../dto/cards.dto";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.css']
})
export class CardsPage implements OnInit {

  isDone: boolean = false;

  public cards: CardsDto[] =
      [ {title: 'Going grocery shopping', description: 'Stuff that keeps me alive', isDone: false},
        {title: 'Watering plants', description: 'Keeping my plants alive', isDone: false},
        {title: 'Giving my pets some love', description: 'Pretty important i gotta say', isDone: false},
        {title: 'Seeing if this shit works', description: 'Please', isDone: false}
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
