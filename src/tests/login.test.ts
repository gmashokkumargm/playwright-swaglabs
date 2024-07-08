import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {loadTestData} from '../utils/testUtils';

test.describe('Sauce Demo - Login', () => {
    let testData: any;

    test.beforeAll(async () => {
        testData = await loadTestData();
    });

    test('Login with standard user', async ({page}) => {
        const loginPage = LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(testData.users.standard.username, testData.users.standard.password);
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    });
});
