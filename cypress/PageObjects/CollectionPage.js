class Collection {
    static createCollection() {
        // bấm button new
        const button_new_collection = "//button[@class='wgc-button ml-15 wgc-primary wgc-button--has-icon wgc-button--medium wgc-button--center']//div[@class='wgc-button-wrapper']";
        const new_collection = "//button[@icon='collection-plus']";
        
        //bấm vào collection
        cy.get('.direction__top > :nth-child(2) > :nth-child(1)').click();
        
        cy.xpath(button_new_collection).click();
        cy.wait(500);
        cy.xpath(new_collection).click();
        cy.wait(500);
        cy.get("wgc-card[class='wgc-card mr-30'] div[class='wgc-button__content']").click();
        cy.wait(500);
        cy.get("input[placeholder='Type a name']").type("test automation 4");
        cy.wait(500);
        cy.get("div[emptymode='background']").click();
        cy.wait(500);
        cy.xpath("//div[@class='cdk-overlay-container']//button[2]").click();
        cy.wait(500);
        cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();

        // select field cho collection
        let totalItems = 7;
        for(let p=1; p <= totalItems; p++){
            cy.log("Active page is ===" +p);
        cy.wait(500);
        cy.get(":nth-child(1) > .collection-create__field > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon").click();
        cy.wait(500);
        };
        
        cy.get('.pv-20 > .wgc-button > .wgc-button-wrapper').click();
        cy.wait(500);
    }
}
export default Collection;