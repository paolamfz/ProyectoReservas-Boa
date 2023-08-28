import { chromium, LaunchOptions, BrowserContextOptions } from "playwright";

declare global {
  interface HTMLSelectElement {
    value: string;
  }
}

(async () => {
  const browserOptions: LaunchOptions = { headless: false };
  const contextOptions: BrowserContextOptions = {};

  const browser = await chromium.launch(browserOptions);
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  try {
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

    const selectedValue = await page.$eval(
      "#select_desde",
      (select) => (select as HTMLSelectElement).value
    );
    console.assert(
      selectedValue === "CBB",
      `Valor seleccionado incorrecto: ${selectedValue}`
    );

    console.log("Selección exitosa: COCHABAMBA");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
})();