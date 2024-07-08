import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {loadTestData} from '../utils/testUtils';

test.describe('Sauce Demo - Checkout', () => {
    let testData: any;

    test.beforeAll(async () => {
        testData = await loadTestData();
    });

    test.beforeEach(async ({page}) => {
        const loginPage = LoginPage(page);
        const inventoryPage = InventoryPage(page);
        await loginPage.navigate();
        await loginPage.login(testData.users.standard.username, testData.users.standard.password);
        await inventoryPage.addItemToCart(0);
        await inventoryPage.goToCart();
    });

    test('Complete the checkout process', async ({page}) => {
        const cartPage = CartPage(page);
        const checkoutPage = CheckoutPage(page);
        await cartPage.checkout();
        await checkoutPage.enterCheckoutInformation(
            testData.checkout.firstName,
            testData.checkout.lastName,
            testData.checkout.postalCode,
        );
        await checkoutPage.finishCheckout();
        const thankYouHeader = await checkoutPage.getThankYouHeader();
        expect(thankYouHeader).toBe('Thank you for your order!');
    });
});
