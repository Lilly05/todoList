import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BackendtestService } from 'src/app/services/backendtest.service';
import { CardsDto } from "../../dto/cards.dto";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.css']
})
export class CardsPage implements OnInit {

  textSample?: Observable<string | null>;
  isDone: boolean = false;

  public cards: CardsDto[] =
      [ {title: 'Going grocery shopping', description: 'Stuff that keeps me alive', isDone: false},
        {title: 'Watering plants', description: 'Keeping my plants alive', isDone: false},
        {title: 'Giving my pets some love', description: 'Pretty important i gotta say', isDone: false},
        {title: 'Seeing if this shit works', description: 'Please', isDone: false}
      ];

  constructor(
    private backendService: BackendtestService
  ) { }

  ngOnInit(): void {
    this.backendService.getHelloWorl().subscribe(
      (res) => { this.textSample = of(res.body) }
    )
  }

}
