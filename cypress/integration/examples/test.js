import faker from 'faker';
import Collection from '../../PageObjects/CollectionPage';
import {CreateField, Board} from '../../PageObjects/BoardPage';
import Workspace from '../../PageObjects/Workspace';
import User from '../../PageObjects/User';
import 'cypress-xpath';




describe('My first test suite', function() {
    beforeEach(() => {
        cy.login();
        cy.wait(500);
    }
    );

    it('Check 1', () => {
        const value = 'qatest106';
        const xpathWorkspace = `//h4[@class='wgc-truncate wgc-truncate--single-line']//p[contains(text(),"${value}")]`; 
        const workspaceName = 'WP Automation 1{enter}';
        //cy.xpath(xpathWorkspace).click();
        Workspace.createWorkspace(workspaceName);
        cy.get('.cdk-overlay-backdrop').click();
        cy.wait(500);
        User.changeLanguage();
        
        /*User.goToRoleAndPermission();
        //invite user
        for(let i = 2; i <= 20; i++) {
            const email_invite = "bachdang" + i + "@mailinator.com{enter}";
            cy.get('.icon.icon-user-plus').click();
            cy.wait(500);
            cy.get('.wgc-form-field.mb-10 > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type(email_invite);
            cy.wait(500);
            // cy.get('.wgc-dropdown.ng-invalid > .wgc-form-field > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
            // cy.wait(500);
            // cy.get(':nth-child(2) > .wgc-menu-item__content').click();
            // cy.wait(500);
            cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
            cy.wait(500);
        }
        cy.wait(500);
        User.goToRoleAndPermission();
        User.createRole();*/
        Collection.createCollection();
        
        cy.wait(500);
        const boardName = 'Board 1';
        Board.createBoard(boardName);
        CreateField.dateField();
        //Tạo field Dropdown cho board
        const dropName = "Field Dropdown";
        const dropDes = "Des cùa field Dropdown";
        CreateField.dropdownField(dropName, dropDes);
        CreateField.checkboxField();
        CreateField.paragraphField();
        CreateField.attachmentField();
        CreateField.emailField();
        CreateField.moneyField();
        CreateField.numberField();
        CreateField.peopleField();
        CreateField.phoneField();
        CreateField.websiteField();
        CreateField.formulaField();
        CreateField.ratingField();
        CreateField.labelField();
        CreateField.progressManualField();
        CreateField.progressAutoField();
        CreateField.timeTrackerField();
        CreateField.locationField();
        CreateField.priorityField();
        CreateField.imageField();
        CreateField.pollField();
        CreateField.docsField();
        // CreateField.refField();
        // CreateField.lookupField();
        // CreateField.lastModifiedByField();
        // CreateField.lastModifiedTimeField();
        for (let i = 1; i <= 20; i++) {
            cy.get('.inserting-row__left > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView().click();
            const rowNumber = "row " + i;
            cy.get('.ng-invalid').type(rowNumber);
            cy.get('.inserting-row__right > .wgc-primary > .wgc-button-wrapper').click();
            cy.wait(500);
        }

    })

})