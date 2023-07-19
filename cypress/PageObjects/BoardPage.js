class Board {
    static createBoard(boardName) {
        //Create new board
        cy.xpath('//div[contains(text(),"New board")]').click();
        //cy.get('.wgc-form-field__input > .ng-star-inserted').type("test 1");
        cy.xpath('//input[@placeholder="Type a name"]').type(boardName);
        cy.xpath('//wgc-icon[@class="wgc-icon ng-star-inserted"]//i[@class="icon icon-check ng-star-inserted"]').click();
        // tạo màu board
        cy.xpath('//div[@class="cdk-drag wgc-list-item ng-star-inserted wgc-list-item--active"]//div[@class="wgc-color-dot-wrapper ng-star-inserted"]').click()
        cy.get('[style="--color-picker-item-color: #242426; --color-picker-item-bg-color: #ffd426;"]') .click();
        cy.wait(500);
    }
}


class CreateField {
        static textField() {
        //Tạo field text cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .wgc-menu-item__content').click();
        cy.wait(1000);
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field text");
        cy.wait(1000);
        //cy.get("input[placeholder='Type description']").type("Des cùa field test");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500);
    }

    static dateField() {
        //Tạo field Date cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(2) > .wgc-menu-item__content').click()
        cy.wait(1000)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Date")
        cy.wait(1000);
        //cy.get("input[placeholder='Type description']").type("Des cùa field Date")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static dropdownField(dropName, dropDes) {
        //Tạo field dropdown cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .wgc-menu-item__content').click();
        cy.wait(500);
        cy.get('.wgc-form-field__input > .ng-invalid').type(dropName);
        //cy.get("input[placeholder='Type description']").type(dropDes);
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500);
    }

    static checkboxField() {
        //Tạo field Checkbox cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .wgc-menu-item__content').click();
        cy.wait(500);
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Checkbox");
        //cy.get("input[placeholder='Type description']").type("Des cùa field Checkbox");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500);
    }

    static paragraphField() {
        //Tạo field Paragraph cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(5) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Paragraph")
        cy.get('form.ng-touched > :nth-child(2) > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type("Des cùa field Paragraph")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static attachmentField() {
        //Tạo field Attachment cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(6) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Attachment")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Attachment")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static emailField() {
        //Tạo field Email cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(7) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Email")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Email")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static moneyField() {
        //Tạo field Money cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(8) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Money")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Money")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static numberField() {
        //Tạo field Number cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(9) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Number")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Number")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }
    static peopleField() {
        //Tạo field People cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(10) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field People")
        //cy.get("input[placeholder='Type description']").type("Des cùa field People")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }
    static phoneField() {
        //Tạo field Phone cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(11) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Phone")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Phone")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }
    static websiteField() {
        //Tạo field Website cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(12) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Website")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Website")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500) 
    }
    static formulaField() {
        //Tạo field Formula cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView()
        cy.wait(500)
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(13) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Formula")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Formula")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static ratingField() {
        //Tạo field Rating cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView();
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500)
        cy.get(':nth-child(14) > .wgc-menu-item__content').click();
        cy.wait(500);
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Rating");
        ////cy.get("input[placeholder='Type description']").type("Des cùa field Rating");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static labelField() {
        //Tạo field Label cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView();
        cy.wait(500)
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500)
        cy.get(':nth-child(15) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Label");
        //cy.get("input[placeholder='Type description']").type("Des cùa field Label");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static progressManualField() {
        //Tạo field Progress (Manual) cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView();
        cy.wait(500)
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500)
        cy.get(':nth-child(16) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Progress (Manual)")
        ////cy.get("input[placeholder='Type description']").type("Des cùa field Progress (Manual)");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static progressAutoField() {
        //Tạo field Progress (Auto) cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').scrollIntoView();
        cy.wait(500)
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click();
        cy.wait(500)
        cy.get(':nth-child(17) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Progress (Auto)");
        ////cy.get("input[placeholder='Type description']").type("Des cùa field Progress (Auto)");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static timeTrackerField() {
        //Tạo field Time Tracker cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
        cy.wait(500)
        cy.get(':nth-child(18) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Time Tracker")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Time Tracker")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500)
    }

    static locationField() {
        //Tạo field Location cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(19) > .wgc-menu-item__content').click()
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Location")
        //cy.get("input[placeholder='Type description']").type("Des cùa field Location")
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click()
        cy.wait(500);
    }

    static priorityField() {
        //Tạo field Priority cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(20) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Priority");
        //cy.get("input[placeholder='Type description']").type("Des của field Priority");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static imageField() {
        //Tạo field Image cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(22) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Image");
        //cy.get("input[placeholder='Type description']").type("Des của field Image");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static pollField() {
        //Tạo field Poll cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(24) > .wgc-menu-item__content').click();
        cy.wait(500)
        //cy.get(':nth-child(1) > .wgc-form-field__input-container > .wgc-form-field__input > .ng-star-inserted').type("Field Poll")
        cy.xpath("//input[@placeholder='Type a name']").type("Field Poll");
        cy.get('.wgc-form-field--invalid.wgc-form-field--pristine > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type("Question Field Poll");
        //cy.get("input[placeholder='Type description']").type("Des của field Poll");
        //cy.get('.wgc-form-field--invalid > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type("Question 1");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static docsField() {
        //Tạo field Docs link cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(25) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Docs link");
        //cy.get("input[placeholder='Type description']").type("Des của field Docs link");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static refField() {
        //Tạo field reference link cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(21) > .wgc-menu-item__content').click();
        cy.wait(500)
        //cy.get('.wgc-form-field__input > .ng-invalid')
        cy.get('.wgc-form-field--dirty > .wgc-form-field__input-container > .wgc-form-field__input > .ng-invalid').click
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Reference");
        //cy.get("input[placeholder='Type description']").type("Des của field reference");
        cy.get('.wgc-form-field.cursor > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
        cy.get(':nth-child(7) > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-expansion-panel__header__content > .wgc-truncate > p')
            .scrollIntoView()
            .click();
        cy.get('.wgc-expansion-panel__content-wrapper > .wgc-expansion-panel > .wgc-expansion-panel__header > .wgc-expansion-panel__header-wrapper > .wgc-expansion-panel__header__content > .wgc-truncate > p')
            .scrollIntoView()
            .click();
        cy.get('.wgc-menu-item__content > .wgc-truncate > p')
            .scrollIntoView()
            .click();
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static lookupField() {
        //Tạo field reference link cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(23) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Lookup");
        //cy.get("input[placeholder='Type description']").type("Des của field Lookup");
        //select the source
        cy.get(':nth-child(4) > .wgc-form-field > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
        cy.get(':nth-child(1) > .wgc-menu-item__content').click();
        //select target
        cy.get('.wgc-dropdown.ng-invalid > .wgc-form-field > .wgc-form-field__input-container > .wgc-form-field__suffix').click();
        cy.get(':nth-child(1) > .wgc-menu-item__content').click();
        //button save
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }
    
    static relationField() {
        //Tạo field reference link cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(26) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Relation");
        //cy.get("input[placeholder='Type description']").type("Des của field Relation");
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static lastModifiedByField() {
        //Tạo field Last modified by cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(27) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Last modified by");
        //cy.get("input[placeholder='Type description']").type("Des của field Last modified by");
        cy.get("input[placeholder='Select a field']").click();
        cy.get(':nth-child(2) > .wgc-menu-item__content').click();
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

    static lastModifiedTimeField() {
        //Tạo field Last modified time cho board
        cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content')
            .scrollIntoView()
            .click();
        cy.wait(500)
        cy.get(':nth-child(28) > .wgc-menu-item__content').click();
        cy.wait(500)
        cy.get('.wgc-form-field__input > .ng-invalid').type("Field Last modified time");
        //cy.get("input[placeholder='Type description']").type("Des của field Last modified time");
        cy.get("input[placeholder='Select a field']").click()
        cy.wait(500)
        cy.get(':nth-child(2) > .wgc-menu-item__content').click();
        
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
        cy.wait(500)
    }

  }
  
  export default {CreateField, Board};
  