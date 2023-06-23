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

    it('1. Uncheck Access public boards in collection', () => {
        cy.xpath(xpathWorkspace).click();
        cy.wait(500);
        User.goToRoleAndPermission();
        cy.wait(500);
    const value = 'Check 1';
    const xpathWorkspace = `//p[normalize-space()="${value}"]`;
    //p[normalize-space()='Check 1']

        Board.createBoard();
        CreateField.dateField();
        //Tatws help center
        cy.get('.help-center__btn-toggle').click();
        cy.wait(500);
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
    
    



        //vào collection
        // let isClicked = false;
        // for (let i = 1; i <= 100; i++) {
        //     console.log( '2', isClicked );
        //     if(isClicked == true) {
        //         break;  // Ngừng vòng lâp nếu đã click
        //     }
        //     const selector = `#cdk-drop-list-${i} > .w-280 > .layout-row > .wgc-inline-input > .wgc-truncate > p > span`;
            
        //     cy.get(selector)
        //         .invoke('text')
        //         .should('not.be.empty')
        //         .then((text) => {
        //             const expectedText = 'test automation 3';

        //             //So sánh với đoạn text đã cho
        //             if (text == expectedText) {
        //                 //Thực hiện click vào wp
        //                 cy.get(selector).click();
        //                 console.log( '1' );
        //                 isClicked = true;
                        
        //             }
                    
        //         })
        //         // .then(() => {
        //         //     //Tạm dừng check
        //         //     if(isClicked) {
        //         //         cy.wait(500);
        //         //     }
        //         // })
         
        // }
    
        
        
    
        


    
        //test case của role & permission

        //toggle of owner
        //cy.get("wgc-card:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) wgc-switch:nth-child(1) div:nth-child(1)").should('have.class', 'inactive');
        
        //cy.get(':nth-child(2) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > .wgc-switch > .wgc-switch__box').should('have.class', 'inactive');
        //cy.get(':nth-child(3) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > .wgc-switch > .wgc-switch__box').should('have.class', 'inactive');
        

        //Active/inactive role
        //let totalItems = 10;
        // for (let i = 1; i <= totalItems; i++) {
        //     cy.get(`:nth-child(3) > .wgc-scroll-bar > :nth-child(${i}) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > .wgc-switch > .wgc-switch__box`).click();
        // }
    /* it('1. Uncheck Access public boards in collection', () => {
        cy.xpath(xpathWorkspace).click();
        cy.wait(500);
        User.goToRoleAndPermission();
        cy.wait(500);
        //User.createRole();

        //Xoá role đi
        for (let i = 1; i <= 12; i++) {
            cy.get(':nth-child(1) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > [icon="trash"] > .wgc-icon-button-wrapper > .wgc-icon > .icon').click();
            cy.wait(500);
            cy.get('[wgcdialogfooter=""] > .wgc-primary > .wgc-button-wrapper').click();
            cy.wait(500);
        }
    })
    it('2. Check Access public boards in collection', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();

        //click setting permission
        cy.get(':nth-child(2) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        cy.wait(500);
        //check access public board
        cy.get('.mb-10 > .wgc-checkbox__box').click();
        cy.wait(500);
    })
    it('3. Check create collections with permission full', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        const full = 'Full';

        //click setting permission
        cy.get(':nth-child(3) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        cy.wait(1000);
        //select  option
        cy.get("wgc-checkbox[class='wgc-checkbox wgc-primary'] div[class='wgc-checkbox__box']").click();
        cy.wait(500);
        User.statusPermissionCollection(full);

    })
    it('4. Check create collections with permission Flexible', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        const flexible = 'Flexible';

        //click setting permission
        cy.get(':nth-child(4) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        //select/unselect collection/ create collections
        cy.get("wgc-checkbox[class='wgc-checkbox wgc-primary'] div[class='wgc-checkbox__box']").click();
        cy.wait(500);
        User.statusPermissionCollection(flexible);
        cy.wait(500);
    })
    it('5. Check create collections with permission Retriced', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        //click setting permission
        cy.get(':nth-child(5) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        //select/unselect collection/ create collections
        cy.get("wgc-checkbox[class='wgc-checkbox wgc-primary'] div[class='wgc-checkbox__box']").click();
        cy.wait(500);
    })
    it('6. Check Access public documents', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        //click setting permission
        cy.get(':nth-child(6) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        // bấm hiện ra list document
        cy.get(':nth-child(3) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-icon > .icon').click();
        //check vào checkbox Access public documents
        cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > .mb-10 > .wgc-checkbox__box').click();
        cy.wait(500);
    })
    it('7. UnCheck Access public documents', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        //click setting permission
        cy.get(':nth-child(7) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        // bấm hiện ra list document
        cy.get(':nth-child(3) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-icon > .icon').click();
        cy.wait(500);
    })
    it('8. Check Create documents with permission Retriced', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        //click setting permission
        cy.get(':nth-child(8) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        // bấm hiện ra list document
        cy.get(':nth-child(3) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-icon > .icon').click();
        //check vào checkbox Create documents
        cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > :nth-child(2) > .wgc-checkbox__box').click();
        cy.wait(500);
    })
    it('9. Check Create documents with permission Full', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        const Full = 'Full';
        //click setting permission
        cy.get(':nth-child(9) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        // bấm hiện ra list document
        cy.get(':nth-child(3) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-icon > .icon').click();
        //check vào checkbox Create documents
        cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > :nth-child(2) > .wgc-checkbox__box').click();
        cy.wait(500);
        User.statusPermissionDoc(Full);
    })
    it('10. Check Create documents with permission Flexible', () => {
        cy.xpath(xpathWorkspace).click();
        User.goToRoleAndPermission();
        User.createRole();
        const Flexible = 'Flexible';
        //click setting permission
        cy.get(':nth-child(10) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap').click();
        // bấm hiện ra list document
        cy.get(':nth-child(3) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-icon > .icon').click();
        //check vào checkbox Create documents
        cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > :nth-child(2) > .wgc-checkbox__box').click();
        cy.wait(500);
        User.statusPermissionDoc(Flexible);
    }) */

})