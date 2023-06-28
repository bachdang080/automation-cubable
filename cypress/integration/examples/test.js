import faker from 'faker';
import Collection from '../../PageObjects/CollectionPage';
import {CreateField, Board} from '../../PageObjects/BoardPage';
import User from '../../PageObjects/User';
import 'cypress-xpath';




describe('My first test suite', function() {
    // beforeEach(() => {
    //     cy.login();
    //     cy.wait(500);
    // }
    // );

   
    //p[normalize-space()='Check 1']

    it('Check 1', () => {
        // const value = 'check 1';
        // const xpathWorkspace = `//p[normalize-space()="${value}"]`;
        // cy.xpath(xpathWorkspace).click();
        // User.goToRoleAndPermission();
        // cy.wait(500);
        // User.createRole();
        
        // cy.wait(3000);
        // cy.xpath("//p[normalize-space()='check 1']").click();
        
        // cy.wait(1000);
        // cy.get('.cdk-overlay-backdrop').click()
        // cy.wait(500);
        
        //qua mailinator
            cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?trialshow=true')
            cy.wait(1000)
            cy.get('#requestTrial').type('{esc}')
            const email_invite = "bachdang1{enter}"
            cy.get('#inbox_field').type(email_invite)
            cy.get('[style="float:left;margin-top: 10px;overflow:hidden;"] > .fw-700').click()
            cy.get("tr[id='row_bachdang1-1687855083-230049656'] td:nth-child(3)").click()
            cy.get('#pills-links-tab').click()
            cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click()

            cy.get('.wgc-form-field__input-container > .wgc-form-field__input > .ng-invalid').type("Dang 1");
            

        /*for(let i = 1; i <= 10; i++) {
            const email_invite = "bachdang" + i + "@mailinator.com";
            cy.get('.icon.icon-user-plus').click();
            cy.wait(500);
            cy.get('.wgc-form-field.mb-10 > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type(email_invite);
            cy.wait(500);
            cy.get('.wgc-dropdown.ng-invalid > .wgc-form-field > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
            cy.wait(500);
            cy.get(':nth-child(2) > .wgc-menu-item__content').click();
            cy.wait(500);
            cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
            cy.wait(500);
        }*/
        

        /*
        // Tạo list view
        cy.get("button[class='wgc-icon-button board-function__btn-action wgc-icon-button--small ng-star-inserted'] div[class='wgc-icon-button-wrapper']").click();
        cy.wait(500)
        cy.get('.mt-5 > .wgc-radio__label').click();
        cy.wait(500)
        //button new
        cy.get('.wgc-primary > .wgc-button-wrapper').click();
        cy.wait(500)
        // enter view name
        cy.get('.wgc-form-field__input > .ng-invalid').type("Check list");
        cy.wait(500)
        cy.get('.wgc-primary > .wgc-button-wrapper').click();
        //cy.get('.wgc-form-field.mb-30 > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
        cy.wait(500)
        // tạo form view
        cy.get("button[class='wgc-icon-button board-function__btn-action wgc-icon-button--small ng-star-inserted'] div[class='wgc-icon-button-wrapper']").click();
        cy.wait(500)
        cy.get('.mt-10 > .wgc-radio__circle').click();
        cy.wait(500)
        //button new
        cy.get('.wgc-primary > .wgc-button-wrapper').click();
        cy.wait(500)
        // type name
        cy.get('.wgc-form-field__input > .ng-invalid').type("Check form");
        cy.wait(500)
        cy.get('.wgc-primary > .wgc-button-wrapper').click(); 

        // Tạo list view
        cy.get('.color-label > :nth-child(1) > :nth-child(1) > :nth-child(1) > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click();
        cy.wait(500)
        cy.get('.mv-15 > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500)
        cy.get('.mt-5 > .wgc-radio__label').click();
        cy.wait(500)
        //button new
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
        cy.wait(500)
        // enter view name
        cy.get('.wgc-form-field__input > .ng-invalid').type("Check list");
        cy.wait(500)
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
        //cy.get('.wgc-form-field.mb-30 > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
        cy.wait(500)

        // tạo form view
        cy.get('.color-label > :nth-child(1) > :nth-child(1) > :nth-child(1) > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click();
        cy.get('.mv-15 > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        //Chọn formview
        cy.get('.mt-10 > .wgc-radio__circle').click();
        cy.wait(500)
        //button new
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
        cy.wait(500)
        // type name
        cy.get('.wgc-form-field__input > .ng-invalid').type("Check form");
        cy.wait(500)
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();

        cy.get('.color-label > :nth-child(1) > :nth-child(1) > :nth-child(1) > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click();
        cy.get(':nth-child(1) > .tab-arrangement > .view-function > .wgc-menu-item').trigger('mouseover')
        cy.get(':nth-child(1) > .tab-arrangement > .view-function > .wgc-menu-item > .wgc-menu-item__suffix > .mr-5 > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click();
        //cy.get(':nth-child(2) > .tab-arrangement > .view-function > .wgc-menu-item > .wgc-menu-item__suffix > .mr-5 > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon')
        
        cy.get('.color-label > :nth-child(1) > :nth-child(1) > :nth-child(1) > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click();
        cy.get(':nth-child(2) > .tab-arrangement > .view-function > .wgc-menu-item > .wgc-menu-item__suffix > .mr-5 > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon')
            .trigger('mouseover')
            .click();
        
        cy.get('.color-label > :nth-child(1) > :nth-child(1) > :nth-child(1) > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click();
        cy.get(':nth-child(3) > .tab-arrangement > .view-function > .wgc-menu-item > .wgc-menu-item__suffix > .mr-5 > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon')
            .trigger('mouseover')
            .click();

            cy.xpath("//p[normalize-space()='test 4 premium']").click();
            cy.wait(1000);
            Collection.createCollection();
            cy.wait(2000);
            Board.createBoard();
            cy.wait(2000);
            CreateField.dateField();
            cy.wait(1000);
            //Tạo field Dropdown cho board
            const dropName = "Field Dropdown";
            const dropDes = "Des cùa field Dropdown";
            CreateField.dropdownField(dropName, dropDes);
            
            
        //Dang ký ngoài 
        for (let i = 1; i <= 100; i++) {
            cy.visit('https://line1.8aday.com/');
            cy.get(':nth-child(2) > a').click();
            const email_invite = "bachdang" + i + "@mailinator.com";
            cy.get('.wgc-form-field__input > .ng-invalid').type(email_invite);
            cy.get('.mb-25.ng-dirty > .wgc-button > .wgc-button-wrapper').click();
            cy.wait(500)
        }

            */
        // CreateField.checkboxField();
        // CreateField.paragraphField();
        // CreateField.attachmentField();
        // CreateField.emailField();
        // CreateField.moneyField();
        // CreateField.numberField();
        // CreateField.peopleField();
        // CreateField.phoneField();
        // CreateField.websiteField();
        // CreateField.formulaField();
        // CreateField.ratingField();
        // CreateField.labelField();
        // CreateField.progressManualField();
        // CreateField.progressAutoField();
        // CreateField.timeTrackerField();
        // CreateField.locationField();
        // CreateField.priorityField();
        // CreateField.imageField();
        // CreateField.pollField();
        // CreateField.docsField();
        // CreateField.refField();
        // CreateField.lookupField();
        // CreateField.lastModifiedByField();
        // CreateField.lastModifiedTimeField();
        // for (let i = 1; i <= 100; i++) {
        //     cy.get('.inserting-row__left > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView().click();
        //     const rowNumber = "row " + i;
        //     cy.get('.ng-invalid').type(rowNumber);
        //     cy.get('.inserting-row__right > .wgc-primary > .wgc-button-wrapper').click();
        //     cy.wait(500);
        // }

    })

})