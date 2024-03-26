import{expect, Page} from '@playwright/test';
import Config from './Config';
import Assertion from './Assertion';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import datajason from './TestPlans/demo.json'
import { describe } from 'node:test';

test.describe("testy Travel", function)
{
    for(const data of datajason.przypadki)
    {
        test.describe(`Wariant ${data.id}`, function()  )
    }
}