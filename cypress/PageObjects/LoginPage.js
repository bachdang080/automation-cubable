//import { get } from "cypress/types/lodash";

class Login{
    login(email, password) {
            cy.get('input[placeholder="Type a email address"]').type(email);
            cy.get('input[placeholder="Type a password"]').type(password);
            cy.get('.wgc-button__content').click();
            cy.get('.side-title.text-center').should('have.text', 'Select a workspace to continue');
        }
}

export default Login;