import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
})
export class DealComponent {
  @Input() deal: any;
}
