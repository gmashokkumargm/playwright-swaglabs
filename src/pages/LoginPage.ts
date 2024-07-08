import {Page} from '@playwright/test';

export const LoginPage = (page: Page) => ({
    navigate: async () => {
        await page.goto('/');
    },
    login: async (username: string, password: string) => {
        await page.fill('#user-name', username);
        await page.fill('#password', password);
        await page.click('#login-button');
    },
});
