import { Component, OnInit } from '@angular/core';
import { Master } from '../master';
import { MASTERS } from '../mock-masters';
@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {
  masters = MASTERS;

  selectedMaster: Master;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(master: Master): void {
    this.selectedMaster = master;
  }

}
