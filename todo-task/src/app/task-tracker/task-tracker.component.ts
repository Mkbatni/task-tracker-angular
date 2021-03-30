import { Component, OnInit } from '@angular/core';
import { TaskTrackerService } from '../task-tracker.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {

  arrayForTask:Array<Task> = [] ; 
  constructor(public taskServ:TaskTrackerService) { }

  ngOnInit(): void {
  }
  postToJson(formRef:any)
  {

    console.log(formRef)
    this.taskServ.storeTask(formRef);
  }
  getData()
  {
    this.taskServ.loadTasks().subscribe(result => this.arrayForTask = result, 
      error => console.log("An error accured", error), ()=> console.log("Completed."));
  }
}
