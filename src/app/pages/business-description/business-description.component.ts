import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CriteriaComponent } from '../../components/criteria/criteria.component';

@Component({
  selector: 'app-business-description',
  imports: [RouterLink,CriteriaComponent],
  templateUrl: './business-description.component.html',
  styleUrl: './business-description.component.scss'
})
export class BusinessDescriptionComponent {

}
