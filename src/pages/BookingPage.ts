import { Page } from 'playwright';
import { Selectors } from '../config/siteConfig';

export default class BookingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterBookingDetails(name: string, lastName: string, emailInput : string, phone: string, documentType: string, documentId: string) {
    await this.page.click(Selectors.BookingPage.bookButton);
    await this.page.fill(Selectors.BookingPage.name, name);
    await this.page.fill(Selectors.BookingPage.lastName, lastName);
    await this.page.fill(Selectors.BookingPage.emailInput, emailInput);
    await this.page.fill(Selectors.BookingPage.phone, phone);
    await this.page.fill(Selectors.BookingPage.documentType, documentType);
    await this.page.fill(Selectors.BookingPage.documentId, documentId);
    await this.page.click(Selectors.BookingPage.bookButton);
  }
  async getBookingConfirmation() {
    // Espera a que se muestre la confirmación de la reserva
    await this.page.waitForSelector(Selectors.BookingPage.confirmationMessage);

    // Obtiene el mensaje de confirmación y lo devuelve
    const confirmationMessage = await this.page.textContent(Selectors.BookingPage.confirmationMessage);
    return confirmationMessage;
  }


}
