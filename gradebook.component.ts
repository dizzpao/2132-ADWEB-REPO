import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
 
// NGMODEL AND FORMSMODULE
studName = ""
pre = 0
mid = 0
fil = 0
ave = (+this.pre + +this.mid + +this.fil)/3;


// IF ELSE
isLogIn:boolean=false;
isLogOut:boolean=true;

// ngFOR

list = [1,2,3,4,5];

users = [
  { firstName: 'Xiao', lastName: 'Adepti', email: 'xiao@test.com', role: 'Teacher'},
  { firstName: 'Bennett', lastName: 'Pyro', email: 'bennett@test.com', role: 'Teacher'},
  { firstName: 'Zhongli', lastName: 'Morax', email: 'zhongli@test.com', role: 'Admin'},
  { firstName: 'Venti', lastName: 'Anemo', email: 'venti@test.com', role: 'Admin'},
  { firstName: 'Jean', lastName: 'Barbara', email: 'jean@test.com', role: 'Teacher'},

]
//TRACK BY

  studentArr: any[] = [
    {"id": 1,
    "name": "Student_1"},
    {"id": 2,
    "name": "Student_2"},
    {"id": 3,
    "name": "Student_3"},
    {"id": 4,
    "name": "Student_4"}];
    trackByData(index:number, studentArr:any): number
    {
      return studentArr.id;
        }

// SWITCH
logInName = 'admin';


    


  constructor() { }

  ngOnInit(): void {
  }

}