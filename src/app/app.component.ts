import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  photos = [
    {
      url: "https://s2.glbimg.com/vEQUudcmd1LgW5tI4Oi3R2Z_wsw=/620x413/e.glbimg.com/og/ed/f/original/2015/07/30/dsc9081.jpg", 
      description: "Subaru Impreza"},
    {
      url: "https://www.caranddriver.com/images/17q1/674191/2018-jaguar-xe-updated-with-new-engine-options-news-car-and-driver-photo-675945-s-original.jpg",
      description:"Jaguar XE"
    }
  ]
 
}
