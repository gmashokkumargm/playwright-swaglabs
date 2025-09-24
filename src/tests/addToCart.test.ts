import {test, expect} from '@fixtures';

test.describe('Sauce Demo - Add to Cart', () => {
    test.beforeEach(async ({loginPage, testData}) => {
        await loginPage.navigate();
        await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    });

    test('Add items to cart', async ({inventoryPage, page}) => {
        await inventoryPage.addItemToCart(0);
        await inventoryPage.goToCart();
        const cartItemCount = await page.$$eval('.cart_item', (items) => items.length);
        expect(cartItemCount).toBe(1);
    });
});
