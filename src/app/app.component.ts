import {Component, OnInit} from '@angular/core';
import {AppConfig} from './ts/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  settings: AppConfig = AppConfig;

  ngOnInit(): void {
    const appConfig: AppConfig = new AppConfig();
    console.log(AppConfig.layout.pageContentWhite);
  }
}
