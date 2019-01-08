import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../ts/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  settings: AppConfig = AppConfig;
  constructor() { }

  ngOnInit() {
  }

}
