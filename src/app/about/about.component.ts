import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-about',

  templateUrl: './about.component.html',

  styleUrls: ['./about.component.css']

})

export class AboutComponent implements OnInit {

      /*isDisabled='true';*/

      name="Name of the oragnization appers here";

      evilTitle = "Template <script>alert('evil never sleeps')</script> Syntax";

      evilTitle2 = "Template <script>alert('evil never sleeps')</script> Syntax";



  constructor() { }



  ngOnInit(): void {

  }



  updateName()

  {

    this.name="Tata Technologies Ltd";

  }



  convertDate()

  {

    const today=new Date()

    return today.toLocaleDateString();

  }



}