import{expect, Page} from '@playwright/test';

export default class PageOne{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    

    cookieAkcept = () => this.page.getByRole('button', { name: 'Akceptuj wszystkie cookies' }) 

    samochodLink = () => this.page.getByRole('link', { name: 'Samochód' })
    dzieckoLink = () => this.page.getByRole('link', { name: 'Dziecko' })
    podrozLink = () => this.page.getByRole('link', { name: 'Podróż' })
    zycieIZdrowieLink = () => this.page.getByRole('link', { name: 'Życie i zdrowie' })
    
    linkJeden = () => this.page.getByRole('link', { name: 'Wypełnij formularz ' }).first()
    linkDwa = () => this.page.getByRole('link', { name: 'Wypełnij formularz ' }).nth(1)
    linkTrzy = () => this.page.getByRole('link', { name: 'Wypełnij formularz ' }).nth(2)
    linkCztery = () => this.page.getByRole('link', { name: 'Wypełnij formularz ' }).nth(3)

    infoJeden = () => this.page.getByText('Integracja AXA/UNIQA')



    
    infoDwa = () => this.page.getByText('Jak kupić ubezpieczenie')
    infoTrzy = () => this.page.getByText('Zakup ubezpieczenia na życie')
    infoCztery = () => this.page.getByText('Zgłoszenie szkody')
    OcenaMax = () => this.page.getByRole('button', { name: '- Highest rating' })


    wszystkiePoradyLink = () => this.page.getByRole('link', { name: 'Zobacz wszystkie porady' })

    

    public async cookieBot(){
        await this.cookieAkcept().click();
    }

    public async mainPageButtons(){
        
        await this.wszystkiePoradyLink().click();
               
        
    }


}