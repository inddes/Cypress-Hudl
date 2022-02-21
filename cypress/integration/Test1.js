///<reference types ="cypress" />
describe('This is my First Test suite' , function() {

it('This is my first test case',function(){

    cy .visit('https://thetesttribe.com/worqference/')
    cy.url().should('include','worqference')
    // const title1 = cy.title();

    // cy.log(title1)

})



})