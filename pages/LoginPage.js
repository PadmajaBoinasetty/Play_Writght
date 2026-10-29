export class LoginPage{

    constructor(page)
    {
      
        this.page = page;
        this.emailInput = page.getByPlaceholder('Enter Email');
        this.passwordinput = page.getByPlaceholder("Enter Password");
        this.signInBtn = page.locator("//button[text()='Sign in']");

    }

    async goToUrl(){
        await this.page.goto("https://freelance-learn-automation.vercel.app/login");
    }

    async fillEmail(email){

        await this.emailInput.fill(email);

    }

    async fillPassword(password){
        await this.passwordinput.fill(password);
    }

    async submit(){

        await this.signInBtn.click();
    }
}