import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Cart', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('user can add an item to the cart and see its details', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.openCart();
    const cartPage = new CartPage(page);
    await expect(cartPage.itemByName('Sauce Labs Backpack')).toBeVisible();
    await expect(cartPage.itemByName('Sauce Labs Backpack')).toContainText('$29.99');
  });

  test('user can remove an item from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.removeBackpack();
    await expect(cartPage.cartItems).toHaveCount(0);
  });
});
