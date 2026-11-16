import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly cartItems: Locator;

  constructor(private readonly page: Page) {
    this.cartItems = page.locator('[data-test="inventory-item"]');
  }

  itemByName(name: string): Locator {
    return this.page.locator('[data-test="inventory-item"]', { hasText: name });
  }

  async removeBackpack(): Promise<void> {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }
}
