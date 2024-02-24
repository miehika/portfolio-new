import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  siteContent: any;
  constructor(private sharedService: GlobalService) {
    this.sharedService.siteContent.subscribe((data) => {
      this.siteContent = data;
    });
  }
}
