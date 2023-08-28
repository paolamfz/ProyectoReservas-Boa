import { Page } from 'playwright';
import { Selectors } from '../config/siteConfig';

export default class ChoosingFlight {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async chooseFlights() {
    await this.page.click(Selectors.ChoosingFlight.chosenFlight);
    await this.page.click(Selectors.ChoosingFlight.chosenTicket);
    await this.page.click(Selectors.ChoosingFlight.confirmTicket);
  }
}
