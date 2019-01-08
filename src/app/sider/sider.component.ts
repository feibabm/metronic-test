import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../ts/app.config';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  settings: AppConfig = AppConfig;

  constructor() { }

  ngOnInit() {
  }

}
