import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskTrackerService {

  constructor(public http:HttpClient) { }

storeTask(empRef:any){
  this.http.post("http://localhost:3000/tasks",empRef).subscribe(result => console.log(result), error => console.log(error));
}

loadTasks() : Observable<Task[]>
{
 return this.http.get<Task[]>("http://localhost:3000/tasks");
}
}
