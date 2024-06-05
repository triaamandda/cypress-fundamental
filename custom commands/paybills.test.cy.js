// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
   
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('#user_remember_me').check();
    });
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            const amount = user.amount
            const desc = user.desc

            cy.login(username,password)
            cy.pembayaran(amount,desc)
        })
    });  
  });