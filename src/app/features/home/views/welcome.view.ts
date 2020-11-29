import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.view.html',
  styleUrls: ['./welcome.view.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Welcome Component init');
  }
}
