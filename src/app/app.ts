import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './shared/presentation/components/layout/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [Layout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ea7800u201914367');
  private readonly translate = inject(TranslateService);
  constructor() {
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
