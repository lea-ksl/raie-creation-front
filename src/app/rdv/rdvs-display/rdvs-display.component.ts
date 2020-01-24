import { Component, OnInit } from '@angular/core';
import { Rdv } from '../../model/Rdv';

@Component({
  selector: 'app-rdvs-display',
  templateUrl: './rdvs-display.component.html',
  styleUrls: ['./rdvs-display.component.css']
})
export class RdvsDisplayComponent implements OnInit {
   public rdv: Rdv =  {
     id: 1,
     date: ''
    };
    public selectedRdv = JSON.parse('{ "selectedDate": "2018-12-18T08:56:00+00:00"}')
    public model_result: string = JSON.stringify(this.selectedRdv);

  constructor() { }
    

  ngOnInit() {
    this.rdv = this.selectedRdv;
  }

  onChange(args) {
    this.selectedRdv.selectedDate = args.value;
    this.model_result = JSON.stringify(this.selectedRdv.selectedDate);
   
  return this.model_result;
}

}
