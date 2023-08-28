import { Page } from 'playwright';
import { Selectors } from '../config/siteConfig';

export default class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.boliviana.cob.bo/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async searchFlights(origin: string, destination: string ) {
    await this.page.fill(Selectors.HomePage.originInput, origin);
    await this.page.fill(Selectors.HomePage.destinationInput, destination);
    await this.page.click(Selectors.HomePage.onlyOneWay);
    await this.page.click(Selectors.HomePage.calendar);
    await this.page.locator(Selectors.HomePage.dateInput).nth(1).click();
    await this.page.click(Selectors.HomePage.searchButton);
  }
}
