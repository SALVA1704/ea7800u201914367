import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Page not found view.
 *
 * @summary Shown for unsupported routes; displays the requested path and a button to return to Home.
 * @author Student Name
 */
@Component({
  imports: [TranslatePipe, MatButton],
  selector: 'app-page-not-found',
  styleUrl: './page-not-found.css',
  templateUrl: './page-not-found.html',
})
export class PageNotFound implements OnInit {
  /**
   * The invalid path that led to this page.
   */
  protected invalidPath = '';

  /**
   * Activated route instance.
   */
  private route: ActivatedRoute = inject(ActivatedRoute);

  /**
   * Router instance.
   */
  private router: Router = inject(Router);

  /**
   * Initializes the component and sets the invalid path from the route.
   */
  ngOnInit() {
    this.invalidPath = this.route.snapshot.url.map((url) => url.path).join('/');
  }

  /**
   * Navigates to the home page.
   */
  protected navigateToHome() {
    this.router.navigate(['/home']).then();
  }
}
