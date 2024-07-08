import {Page} from '@playwright/test';

export const InventoryPage = (page: Page) => ({
    addItemToCart: async (itemIndex: number) => {
        await page.click(`.inventory_item:nth-child(${itemIndex + 1}) .btn_inventory`);
    },
    goToCart: async () => {
        await page.click('.shopping_cart_link');
    },
});
