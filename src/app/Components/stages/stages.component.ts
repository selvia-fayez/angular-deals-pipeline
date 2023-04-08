import { Component } from '@angular/core';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css'],
})
export class StagesComponent {
  word: string = '';
  stages: string[] = [
    'Potential Value',
    'Focus',
    'Contact Made',
    'Offer Sent',
    'Getting Ready',
  ];
}
