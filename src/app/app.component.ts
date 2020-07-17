import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  pizzaForm = this.formBuilder.group({
    name: [''],
    details: [''],
  });

  constructor(private formBuilder: FormBuilder) {}
}
