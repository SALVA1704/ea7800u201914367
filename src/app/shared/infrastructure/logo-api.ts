import { Service } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * Service that builds logo image URLs using the Logo API from logo.dev.
 *
 * @see https://www.logo.dev/
 */
@Service()
export class LogoApi {
  private readonly baseUrl = environment.logoProviderApiBaseUrl;
  private readonly apiKey = environment.logoProviderApiKey;

  /**
   * Builds the URL of the logo for the given company domain.
   * @param domain - Company domain, e.g. 'redcross.org'.
   * @returns The logo image URL.
   */
  getUrlToLogo(domain: string): string {
    return `${this.baseUrl}/${domain}?token=${this.apiKey}`;
  }
}
