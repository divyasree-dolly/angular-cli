import { Component, OnInit, Input } from '@angular/core';
import {Master} from '../master';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @Input() master: Master;

  constructor() { }

  ngOnInit(): void {
  }

}
