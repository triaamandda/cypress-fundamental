// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.url().should('include', 'v1/index.html')
   
        cy.fixture("user").then(user => {
        cy.get('input[name="user-name"]').clear()
        cy.get('input[name="user-name"]').type('Username')

        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Password')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('input[name="user-name"]').clear()
            cy.get('input[name="user-name"]').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('.btn_action').click()

                cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    });  
  });
});