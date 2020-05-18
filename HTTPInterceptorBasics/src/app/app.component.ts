import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HTTPInterceptorBasics';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAllPosts().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('error Occured ..!', error);
      }
    );
  }
}
