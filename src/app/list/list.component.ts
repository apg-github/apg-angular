import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _fetch: FetchService) { }

  breweries: Object;

  async ngOnInit(): Promise<void> {
    (await this._fetch.fetchBeers()).subscribe(data => {
    this.breweries = data
    console.log(this.breweries)
    })
  }

}
