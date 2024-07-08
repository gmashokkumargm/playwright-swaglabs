import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {loadTestData} from '../utils/testUtils';

test.describe('Sauce Demo - Add to Cart', () => {
    let testData: any;

    test.beforeAll(async () => {
        testData = await loadTestData();
    });

    test.beforeEach(async ({page}) => {
        const loginPage = LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    });

    test('Add items to cart', async ({page}) => {
        const inventoryPage = InventoryPage(page);
        await inventoryPage.addItemToCart(0);
        await inventoryPage.goToCart();
        const cartItemCount = await page.$$eval('.cart_item', (items) => items.length);
        expect(cartItemCount).toBe(1);
    });
});
