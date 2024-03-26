import {test, expect} from '@playwright/test';
import Config from './Config';
import Assertion from './Assertion';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import datajason from './TestPlans/demo.json'


test.describe("Testy Travel", function()
{
    for(const data of datajason.przypadki)
    {
        test.describe(`Wariant ${data.id}`, function()
        {
            test.beforeEach(async ({ page }, testInfo) => 
            {
                const config = new Config(page);
                let env = await config.GetTestEnviromentBaseUrl(datajason.env);
                await page.goto('' + env)
            });

            
                test('Travel', async ({ page }) => 
                {
                    const pageOne = new PageOne(page);

                    await pageOne.cookieBot();





                });             
        });
    }
});