import{expect, Page} from '@playwright/test';

export default class Config
{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public async GetTestEnviromentBaseUrl(TestEnviroment: string){
        switch(TestEnviroment){
            case "PROD":
                return "https://www.uniqa.pl/" //https://www.uniqa.pl/kalkulator/ubezpieczenie-podrozne/destinations
        }        
    }
}