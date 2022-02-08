import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-act1',
  templateUrl: './lab-act1.component.html',
  styleUrls: ['./lab-act1.component.css']
})
export class LabAct1Component implements OnInit {

studName = ""
studSubject = ""
pre = 0
mid = 0
fil = 0
ave = (+this.pre + +this.mid + +this.fil)/3;

  constructor() { }

  ngOnInit(): void {
  }

}
