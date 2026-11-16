import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBackpackToCart(): Promise<void> {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
