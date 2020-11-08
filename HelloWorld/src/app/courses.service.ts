import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class CourseService{

    getCourse(){
        return ["DEV101","ILS201","ETS301"]
    }
}