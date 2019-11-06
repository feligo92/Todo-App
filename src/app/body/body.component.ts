import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  userTasks: string[] = [];

  selectedTask:number = -1;


  constructor() { 
    
    let tareasLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    this.userTasks = (tareasLocalStorage != null ? tareasLocalStorage : []);
  }

  ngOnInit() {
  }

  changeSelectedTask(index){
    this.selectedTask = index;
  }

  addTask() {

    

    let task: string = (<HTMLInputElement>document.querySelector("#myInput")).value;

    if(task != ""){
      this.userTasks.push(task)
    }
    (<HTMLInputElement>document.querySelector("#myInput")).value = "";

    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem("tasks", JSON.stringify(this.userTasks))
    } 
  }

  removeTask(index:number):void {

    this.userTasks.splice(index,1)
    
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem("tasks", JSON.stringify(this.userTasks))
    } 
  }


}
