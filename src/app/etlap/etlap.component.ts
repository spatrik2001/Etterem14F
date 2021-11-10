import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etlap',
  templateUrl: './etlap.component.html',
  styleUrls: ['./etlap.component.css']
})
export class EtlapComponent implements OnInit {

  public Cim: string = "Étlap és itallap";
  public etlap = [
    "Rántott hús",
    "Töltött káposzta",
    "Paprikás krumpli",
    "Palacsinta",
    "Szilvásgombóc"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
