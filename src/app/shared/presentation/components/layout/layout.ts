import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { LogoApi } from '../../../infrastructure/logo-api';

/**
 * Application layout component.
 *
 * @summary Shows the toolbar (IEA logo and title, navigation options and language switcher) and the routed view.
 * @author Student Name
 */
@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    TranslatePipe,
    LanguageSwitcher,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private readonly logoApi = inject(LogoApi);

  /** Red Cross logo URL obtained from the Logo API. */
  protected readonly logoUrl = this.logoApi.getUrlToLogo('redcross.org');

  /** Navigation options shown at the center of the toolbar. */
  protected readonly options = signal([{ link: '/home', label: 'option.home' }]);
}
