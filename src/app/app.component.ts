import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentJsonUrl } from './app.constants';
import { GlobalService } from './global.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  siteContent: any;
  constructor(private http: HttpClient, private sharedService: GlobalService) {}

  ngOnInit() {
    this.http.get(contentJsonUrl).subscribe((data) => {
      this.siteContent = data;
      this.sharedService.siteContent.next(data);
    });
  }
}
