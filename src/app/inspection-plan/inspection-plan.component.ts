import { Component, OnInit } from '@angular/core';
import { Service, Country } from '../services/inspection.service';

@Component({
  selector: 'app-inspection-plan',
  templateUrl: './inspection-plan.component.html',
  styleUrls: ['./inspection-plan.component.css']
})
export class InspectionPlanComponent implements OnInit {

  countries: Country[];

  constructor(service: Service) {
    this.countries = service.getCountries();
  }

  ngOnInit() {
  }

}
