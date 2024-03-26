import{expect, Page} from '@playwright/test';

export default class PageTwo
{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }


    komunikacjaButton = () => this.page.getByRole('link', { name: 'Komunikacja ' })
    nieruchomosciButton = () => this.page.getByRole('link', { name: 'Nieruchomości ' })
    podrozButton = () => this.page.getByRole('link', { name: 'Podróż ' })
    zycieButton = () => this.page.getByRole('link', { name: 'Życie i Zdrowie ' })
    emeryturaButton = () => this.page.getByRole('link', { name: 'Emerytura i Inwestycje ' })

    komunikacjaLink = () => this.page.getByRole('link', { name: 'Komunikacja' })
    nieruchomosciLink = () => this.page.getByRole('link', { name: 'Nieruchomości' })
    podrozLink = () => this.page.getByRole('link', { name: 'Podróż' })
    zycieLink = () => this.page.getByRole('link', { name: 'Życie i Zdrowie' })
    emeryturaLink = () => this.page.getByRole('link', { name: 'Emerytura i Inwestycje' })
    mieszkalnictwoLink = () => this.page.getByRole('link', { name: 'Mieszkalnictwo' })
    


    

    public async wait(){
        await this.page.waitForTimeout(500)
    }
    
    public async produktSwitch(a:string){
        switch (a){
            case 'KOMUNIKACJA':
                await this.komunikacjaButton().click();
            break; 
        }
        switch (a){
            case 'NIERUCHOMOSC':
                await this.nieruchomosciButton().click();
            break; 
        }
        switch (a){
            case 'TRAVEL':                
                await this.podrozButton().isVisible();
                await this.podrozButton().click();
            break; 
        }
        switch (a){
            case 'ZYCIE':
                await this.zycieButton().click();
            break; 
        }
        switch (a){
            case 'EMERYTURA':
                await this.emeryturaButton().click();
            break; 
        }           
    }
    
    public async produktsList(){
        await this.komunikacjaLink ().click();
        await this.nieruchomosciLink ().click();
        await this.podrozLink ().click();
        await this.zycieLink ().click();
        await this.emeryturaLink ().click();
        await this.mieszkalnictwoLink().click();
        
    }
    



}