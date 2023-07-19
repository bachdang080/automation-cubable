class Workspace{
    static createWorkspace(workspaceName) {

        cy.get('.content > .wgc-button > .wgc-button-wrapper').click();
        cy.xpath("//input[@placeholder='Nhập tên Workspace']").type(workspaceName);
        cy.wait(3000);
        cy.get('#signup-finish > .wgc-button-wrapper').click();
        cy.wait(5000);
    }
}

export default Workspace;