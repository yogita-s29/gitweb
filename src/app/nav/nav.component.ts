import { Component, OnInit } from '@angular/core';

@Component({



  selector: 'app-nav',



  templateUrl: './nav.component.html',



  styleUrls: ['./nav.component.css']



})



export class NavComponent implements OnInit {



appTitle:string='Mauli Group of Institution college of engineering and technology shegaon';

division:string='Mech, Cse, ENTC';




  constructor() { }





  ngOnInit(): void {



  }





}
