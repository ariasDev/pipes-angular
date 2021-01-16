import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pipes',
  templateUrl: './table-pipes.component.html',
  styleUrls: ['./table-pipes.component.css']
})
export class TablePipesComponent implements OnInit {

  pipesList: any;
  urlVideo: string = 'https://www.youtube.com/embed/ISJGSSwpfSo'

  constructor() { }

  ngOnInit(): void {
    this.pipesList = [
      {
        input: 'ariasDev',
        pipe: 'upppercase',
        use: '{{ input | upppercase }}',
      },
      {
        input: 'ariasDev',
        pipe: 'lowercase',
        use: '{{ input | lowercase }}',
      },
      {
        input: Math.PI,
        pipe: 'number',
        use: '{{ input | number:1.0-3 }}',
      },
      {
        input: 0.235,
        pipe: 'percent',
        use: '{{ input | percent:2.0-2 }}',
      },
      {
        input: 12345.65,
        pipe: 'currency',
        use: '{{ input | currency }}',
      },
      {
        input: 'juan aRias',
        pipe: 'capitalize',
        use: '{{ input | capitalize }}',
      }
    ];
  }
}
