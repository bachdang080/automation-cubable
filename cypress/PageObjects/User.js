import faker from 'faker';
class User {
    //Workspace setting -> User -> Manage workspace setting & permission
    static goToRoleAndPermission() {
        //button workspace
        cy.get('switcher.mb-20 > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500);
        //button workspace setting
        cy.get('[icon="settings"] > .wgc-menu-item__content').click();
        cy.wait(500);
        //user
        cy.get(':nth-child(2) > .wgc-list-item__content > .wgc-list-item__content-wrapper > .wgc-list-item__content-label > .wgc-inline-input > .wgc-truncate > p > span').click();
        cy.wait(500);
        //Manage workspace setting & permission
        // cy.get('.wgc-tab-group__header-list > :nth-child(2)').click();
        // cy.wait(500);
        // //Tatws help center
        // cy.get('.help-center__btn-toggle').click();
        // cy.wait(500);
    }
    //Tao role
    static createRole() {
        let totalItems = 10;
        //cy.get(':nth-child(4) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > .wgc-switch > .wgc-switch__box').click();//.should('have.class', 'active',{ timeout: 5000 });
        cy.get('.wgc-tab-group__header-list > :nth-child(2)').click();
        for (let i = 1; i <= totalItems; i++) {
            //Click create new role
            cy.get(':nth-child(3) > .layout-row > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
            const randomItem = faker.lorem.words();
            cy.get('.wgc-form-field--invalid > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type(randomItem);
            cy.get('.wgc-form-field--valid > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type('description của ' + randomItem);
            // //click setting permission
            // cy.get('.wgc-card-wrapper > .layout-row > .mr-5').click();

            // //Select/unselect collection/access public boards in collection
            // cy.get("wgc-checkbox[class='wgc-checkbox mb-10 wgc-primary'] div[class='wgc-checkbox__box']").click();
            // //select/unselect collection/ create collections
            // cy.get("wgc-checkbox[class='wgc-checkbox wgc-primary'] div[class='wgc-checkbox__box']").click();
            // //select full option
            // cy.get(':nth-child(2) > .wgc-radio__label').click();
            // cy.wait(500);

            // //click on Document
            // cy.get(':nth-child(3) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-icon > .icon').click();
            // //
            // cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > .mb-10 > .wgc-checkbox__box').click();
            // cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > :nth-child(2) > .wgc-checkbox__box').click();
            // //select full
            // cy.get(':nth-child(3) > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > .wgc-radio-group > :nth-child(2) > .wgc-radio__label').click();
            // cy.wait(500);
            //cy.get('.inserting-row__right > .wgc-primary > .wgc-button-wrapper').click();
            
            // click button save
            cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
            cy.wait(2000);
         }
    }
    //Change status của permission collection
    static statusPermissionCollection(status) {
        switch (status) {
            case 'Full':
                //cy.get(':nth-child(2) > .wgc-radio__lable', { timeout: 5000 }).click();
                cy.xpath("//div[normalize-space()='Full']").click();
                break;
            case 'Flexible':
                cy.xpath("//div[normalize-space()='Flexible']").click();
                break;
            case 'Retriced':
                cy.xpath("//div[normalize-space()='Retriced']").click();
                break;
            default:
                cy.log('Invalid status imput');
        }
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
        cy.wait(2000);
    }
    //Change status của permission collection
    static statusPermissionDoc(status) {
        switch (status) {
            case 'Full':
                cy.xpath("//div[normalize-space()='Full']").click();
                break;
            case 'Flexible':
                cy.xpath("//div[normalize-space()='Flexible']").click();
                break;
            case 'Retriced':
                cy.xpath("//div[normalize-space()='Restricted']").click();
                break;
            default:
                cy.log('Invalid status imput');
        }
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
        cy.wait(2000);
    }
    static statusInvite() {
        //
        cy.get(`:nth-child(${i}) > .wgc-card-wrapper > .layout-align-space-between-center > .layout-column > .ml-20 > .text-nowrap`).click();
        //Click vào phần invite
        cy.get('[style="--expansion-panel-header-text-font-size: 16px;"] > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-expansion-panel__header__content > .wgc-truncate > p').click();
        //CLick check invite
        cy.get('[style="--expansion-panel-header-text-font-size: 16px;"] > .wgc-expansion-panel__content > .wgc-expansion-panel__content-wrapper > .wgc-checkbox > .wgc-checkbox__label').click();
        //Bam Save
        cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click();
        cy.wait(500);
    }
    static deleteRole() {
        cy.get(':nth-child(1) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > [icon="trash"] > .wgc-icon-button-wrapper > .wgc-icon > .icon').click();
        cy.wait(500);
        cy.get('[wgcdialogfooter=""] > .wgc-primary > .wgc-button-wrapper').click();
        cy.wait(500);
    }
    static statusRole() {
        cy.get(`:nth-child(3) > .wgc-scroll-bar > :nth-child(${i}) > .wgc-card-wrapper > .layout-align-space-between-center > :nth-child(2) > .wgc-switch > .wgc-switch__box`).click();
        cy.wait(500);
    }
    static changeLanguage() {
        //Đổi language sang tiếng Anh
        cy.get('.wgc-basic-button__content > .wgc-avatar > .wgc-avatar__image').click();
        cy.get('[icon="globe"] > .wgc-menu-item__content').click();
        cy.xpath("//div[normalize-space()='English']").click();
        cy.get('.cdk-overlay-backdrop').click();
        cy.wait(500);
    }
    
}


export default User;