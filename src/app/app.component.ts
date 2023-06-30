import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Miehika Sahu | Visual Designer';
  siteContent: any;
  headerData: any;
  homepage_slider: any;
  homepage_jumbotron_1: any;
  jsonUrl = 'assets/content.json';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.jsonUrl).subscribe((data) => {
      this.siteContent = data;
      this.headerData = this.siteContent.header;
      this.homepage_slider = this.siteContent.homepage_slider;
      this.homepage_jumbotron_1 = this.siteContent.homepage_jumbotron_1;
    });
  }
}
