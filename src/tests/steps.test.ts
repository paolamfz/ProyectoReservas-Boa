import { chromium, Browser, BrowserContext, Page } from "playwright";

declare global {
  interface HTMLSelectElement {
    value: string;
  }
};

describe("Pruebas automatizadas", () => {
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

  it("Selecciona COCHABAMBA en el campo de origen", async () => {
    await page.goto("https://www.boa.bo/");
    await page.waitForSelector(".menu");
    await page.click('[data-content="reserva_vuelos"]');
    await page.waitForSelector("#select_desde", { state: "visible" });
    await page.selectOption("#select_desde", "CBB");
    await page.waitForFunction(() => {
      const select = document.querySelector(
        "#select_desde"
      ) as HTMLSelectElement;
      return select.value === "CBB";
    });
    const selectHandle = await page.$("#select_desde");
    const selectedValue = await selectHandle?.evaluate(
      (select) => (select as HTMLSelectElement).value
    );

    expect(selectedValue).toBe("CBB");
  });
});