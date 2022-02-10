import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   res: string="";
   constructor() {}
   ngOnInit(): void {
   }
       RegisterStudent(studentForm: NgForm): void {
         var first_name=studentForm.controls['name'].value;
         this.res="Thank You"+first_name+"if we will contact you soon!!";
       
   }
}
