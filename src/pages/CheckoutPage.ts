import {Page} from '@playwright/test';

export const CheckoutPage = (page: Page) => ({
    enterCheckoutInformation: async (firstName: string, lastName: string, postalCode: string) => {
        await page.fill('#first-name', firstName);
        await page.fill('#last-name', lastName);
        await page.fill('#postal-code', postalCode);
        await page.click('#continue');
    },
    finishCheckout: async () => {
        await page.click('#finish');
    },
    getThankYouHeader: async () => {
        return await page.textContent('.complete-header');
    },
});
