import{expect, Page} from '@playwright/test';

export default class PageOne{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    

    cookieAkcept = () => this.page.getByRole('button', { name: 'Akceptuj wszystkie cookies' }) 

    // swiatButton
    // europaButton
    // inPolandYes
    // inPolandNo

    // dateStartPicker


    public async cookieBot(){
        await this.cookieAkcept().click();
    }


}