import { chromium, Browser, Page } from 'playwright';
import HomePage from '../src/pages/HomePage';
import BookingPage from '../src/pages/BookingPage';
import ChoosingFlight from '../src/pages/ChoosingFlightPage';


describe('Boliviana de Aviación Booking Flow', () => {
    let browser: Browser;
    let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should book a flight successfully', async () => {
    const homePage = new HomePage(page);
    const bookingPage = new BookingPage(page);
    const choosingFlight = new ChoosingFlight(page);

    await homePage.searchFlights('Cochabamba', 'La Paz');
    await choosingFlight.chooseFlights();
    await bookingPage.enterBookingDetails(
      'Paola', 
      'Montano', 
      'montanofernandezpaola@gmail.com',
      '79373947',
      'CI',
      '9315248cb');

    const confirmationMessage = await bookingPage.getBookingConfirmation();
    expect(confirmationMessage).toContain('CODIGO DE RESERVA');
  });
});

