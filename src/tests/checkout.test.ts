import {test, expect} from '@fixtures';

test.describe('Sauce Demo - Checkout', () => {
    test.beforeEach(async ({loginPage, inventoryPage, testData}) => {
        await loginPage.navigate();
        await loginPage.login(testData.users.standard.username, testData.users.standard.password);
        await inventoryPage.addItemToCart(0);
        await inventoryPage.goToCart();
    });

    test('Complete the checkout process', async ({cartPage, checkoutPage, testData}) => {
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
