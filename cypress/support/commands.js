Cypress.Commands.add('login', () => {
    // Thực hiện các bước đăng nhập:
    cy.wait(500);
    cy.visit("https://line1.8aday.com/");
    // cy.visit('https://workblink.com/');
    cy.wait(500);
    cy.xpath('//input[@placeholder="Type your email"]').type("dang.do@cubable.com")
    cy.xpath('//input[@placeholder="Type a password"]').type("1");
    cy.get("button[type='submit'] div[class='wgc-button-wrapper']").click();
    cy.wait(500);
    //cy.xpath('//body[1]/app[1]/section[1]/sign-in[1]/div[1]/div[1]/div[1]/div[1]/div[2]/wgc-scroll-bar[1]/table[1]/tbody[1]/tr[2]/td[1]/div[1]/div[1]').click()

  
    // Lưu trạng thái đăng nhập vào Local Storage
    cy.window().then((window) => {
      window.localStorage.setItem('loggedIn', 'true');
    });
  });