

describe('office365 App Testing', function () {

    //Change these values
    
   var office365AppLauncherUrl = 'https://spbreed02.sharepoint.com/sites/appdev/_layouts/15/appredirect.aspx?instance_id={73665B91-5075-48C2-B20D-A5C110E65E4A}';
   var baseUrl = 'https://spbreed02-7ba9b30aa5f095.sharepoint.com/sites/appdev/ExpensesAngularApp/app.html';
   var userName = 'admin@spbreed02.onmicrosoft.com';
   var password = 'password@123'; 

    it('should login the named user', function () {
        browser.driver.get(office365AppLauncherUrl);
        
        browser.driver.findElement(by.id('cred_userid_inputtext')).sendKeys(userName);
        browser.driver.findElement(by.id('cred_password_inputtext')).sendKeys(password);
        browser.actions()
        .mouseMove(browser.driver.findElement(by.id('cred_sign_in_button')))
        .click()
        .perform();
        browser.sleep(500);
        browser.driver.findElement(by.id('cred_sign_in_button')).click();
    });
    
    
    describe("Office 365 SPA App Testing", function () {
        var expenseList;
       // var ptor;
        beforeEach(function () {
            ptor = protractor.getInstance();
            ptor.ignoreSynchronization = true;
            console.log("What's up with ignoreSynchronization?" + ptor.ignoreSynchronization);
            browser.get( baseUrl +'#/Expenses');
            browser.sleep(500);        
        });
        
        it('Check Item count ', function () {
            expenseList = element.all(by.repeater('item in vm.ExpenseItems'));
            console.log(expenseList.count())
            expect(expenseList.count()).toEqual(10);
        });
       
        it('check first item last name',function(){
            expenseListItem = element.all(by.repeater('item in vm.ExpenseItems').row(2).column("{{item.Title}}"));
            var lastName = [ 'Gu' ];
            expect(expenseListItem.getText()).toEqual(lastName);
        });
        
        it('create new item',function(){
             createNewItem = element(by.className('ms-heroCommandLink'));
             createNewItem.click();
             browser.sleep(500);
            
            var title = element(by.model('vm.expenseListItem.Title'));
            var firstName = element(by.model('vm.expenseListItem.FirstName'));
            var expense = element(by.model('vm.expenseListItem.Expense'));
            submitButton = element(by.css('[data-ng-click="vm.goSave()"]'));

            title.sendKeys('Paul');
            firstName.sendKeys('Fisher');
            expense.sendKeys('300');

            submitButton.click();
            browser.sleep(500);

        });

        it('check item count', function () {
            expenseList = element.all(by.repeater('item in vm.ExpenseItems'));
            console.log(expenseList.count())
            expect(expenseList.count()).toEqual(11);
        });
       

    });

});
