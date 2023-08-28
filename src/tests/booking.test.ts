import { chromium, Browser, Page, BrowserContext } from 'playwright';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ChoosingFlight from '../pages/ChoosingFlightPage';


describe('Boliviana de Aviación Booking Flow', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () => {
      const browserOptions: Parameters<typeof chromium.launch>[0] = {
        headless: false,
      };
      const contextOptions: Parameters<typeof browser.newContext>[0] = {};
  
      browser = await chromium.launch(browserOptions);
      context = await browser.newContext(contextOptions);
      page = await context.newPage();
    });

  afterAll(async () => {
    await browser.close();
  });

  it('should book a flight successfully', async () => {
    const homePage = new HomePage(page);
    const bookingPage = new BookingPage(page);
    const choosingFlight = new ChoosingFlight(page);

    await homePage.navigate();
    await homePage.searchFlights('COCHABAMBA', 'LA PAZ');
    await choosingFlight.chooseFlights();
    await bookingPage.enterBookingDetails(
      'Paola', 
      'Montano', 
      'montanofernandezpaola@gmail.com',
      '79373947',
      'CI',
      '9315248cb');

    const confirmationMessage = await bookingPage.getBookingConfirmation();
    expect(confirmationMessage).toBeDefined();
  });
});

