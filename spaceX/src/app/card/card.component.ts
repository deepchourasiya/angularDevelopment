import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  _url: string = 'https://api.spacexdata.com/v3/launches?limit=100';

  data: any;

  getData() {
    this.http.get(this._url).subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
