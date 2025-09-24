import {test as base} from '@playwright/test';
import {LoginPage, InventoryPage, CartPage, CheckoutPage} from '@pages';
import testData from '@/data/testData.json';

export interface PageObjects {
    loginPage: ReturnType<typeof LoginPage>;
    inventoryPage: ReturnType<typeof InventoryPage>;
    cartPage: ReturnType<typeof CartPage>;
    checkoutPage: ReturnType<typeof CheckoutPage>;
    testData: typeof testData;
}

export const test = base.extend<PageObjects>({
    // eslint-disable-next-line no-empty-pattern
    testData: async ({}, use) => {
        await use(testData);
    },
    loginPage: async ({page}, use) => {
        const loginPage = LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({page}, use) => {
        const inventoryPage = InventoryPage(page);
        await use(inventoryPage);
    },
    cartPage: async ({page}, use) => {
        const cartPage = CartPage(page);
        await use(cartPage);
    },
    checkoutPage: async ({page}, use) => {
        const checkoutPage = CheckoutPage(page);
        await use(checkoutPage);
    },
});

export {expect} from '@playwright/test';
