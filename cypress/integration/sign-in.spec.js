/// <reference types="cypress" />

describe('Login', () => {
  it('should not login to invalid password', () => {
    cy.visit('http://localhost:3000');
    cy.get('.button-to-sign-in').click();
    cy.get('.email').type('c@du6.com');
    cy.get('input[type=password').type('12345');
    cy.get('.button-submit').click();

    cy.url().should('equal', 'http://localhost:3000/sign-in');
  });
  it('should not login to invalid email', () => {
    cy.visit('http://localhost:3000');
    cy.get('.button-to-sign-in').click();
    cy.get('.email').type('a');
    cy.get('input[type=password').type('123456');
    cy.get('.button-submit').click();

    cy.url().should('equal', 'http://localhost:3000/sign-in');
  });
  it('should login', () => {
    cy.visit('http://localhost:3000');
    cy.get('.button-to-sign-in').click();
    cy.get('.email').type('c@du6.com');
    cy.get('input[type=password').type('123456');
    cy.get('.button-submit').click();

    cy.url().should('equal', 'http://localhost:3000/plans');
  });
});
