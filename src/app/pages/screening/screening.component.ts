import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CriteriaComponent } from '../../components/criteria/criteria.component';

@Component({
  selector: 'app-screening',
  imports: [RouterLink,CriteriaComponent],
  templateUrl: './screening.component.html',
  standalone: true,
  styleUrl: './screening.component.scss'
})
export class ScreeningComponent {

}
