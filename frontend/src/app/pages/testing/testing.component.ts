import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BackendtestService } from 'src/app/services/backendtest.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  isLoading: Boolean = true;
  textSample?: Observable<string | null> ;

  constructor(
    private backendService: BackendtestService
  ) { }

  ngOnInit(): void {
    this.backendService.getHelloWorld().subscribe(
      (res) => {
        this.isLoading = false
        this.textSample = of(res.body) 
      }
    )
  }

}
