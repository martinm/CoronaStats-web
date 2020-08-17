import { Component, OnInit, Inject, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
@Input() country: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const country = this.route.snapshot.paramMap.get('country');
    this.countryService.getCountry(country).subscribe(country => this.country = country);
  }

}
