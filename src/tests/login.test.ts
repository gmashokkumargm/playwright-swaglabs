import {test, expect} from '@fixtures';

test.describe('Sauce Demo - Login', () => {
    test('Login with standard user', async ({loginPage, page, testData}) => {
        await loginPage.navigate();
        await loginPage.login(testData.users.standard.username, testData.users.standard.password);
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    });
});
