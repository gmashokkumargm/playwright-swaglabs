import {Page} from '@playwright/test';

export const CartPage = (page: Page) => ({
    getCartItemCount: async () => {
        return await page.$$eval('.cart_item', (items) => items.length);
    },
    checkout: async () => {
        await page.click('#checkout');
    },
});
