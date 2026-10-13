import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Home view.
 *
 * @summary Main view with the platform welcome text and the "My Energy Reports" section.
 * @author Student Name
 */
@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
