import faker from 'faker';
import Collection from '../../PageObjects/CollectionPage';
import {CreateField, Board} from '../../PageObjects/BoardPage';
import User from '../../PageObjects/User';
import 'cypress-xpath';




describe('My first test suite', function() {
    beforeEach(() => {
        cy.login();
        cy.wait(500);
    });

    const value = 'test 4 premium';
    const xpathWorkspace = `//p[normalize-space()="${value}"]`;
    //p[normalize-space()='Check 1']

    it('Check 1', () => {
        cy.xpath("//p[normalize-space()='test 4 premium']").click();
        cy.wait(1000);
        Collection.createCollection();
        cy.wait(1000);
        Board.createBoard();
        cy.wait(1000);
        CreateField.dateField();
        cy.wait(1000);
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
        CreateField.refField();
        CreateField.lookupField();
        CreateField.lastModifiedByField();
        CreateField.lastModifiedTimeField();
        for (let i = 1; i <= 100; i++) {
            cy.get('.inserting-row__left > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView().click();
            const rowNumber = "row " + i;
            cy.get('.ng-invalid').type(rowNumber);
            cy.get('.inserting-row__right > .wgc-primary > .wgc-button-wrapper').click();
            cy.wait(500);
        }

    })

})