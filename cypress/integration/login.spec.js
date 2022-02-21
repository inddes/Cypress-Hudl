///<reference types ="cypress" />
import login from '../objects/login_page.obj'
import home from '../objects/home_page.obj'

describe('This is Login test ' , function() {
     
    const baseUrl = Cypress.config('baseUrl')
     const email = 'example@gmail.com'
     const password = 'abcdef'

     beforeEach(() =>{
        cy.visit('/login')
        cy.url().should('include','login')
        cy.title().should('eq','Log In - Hudl')
     })

    it('Verify login with correct email and correct password',function(){
        
        cy.get(login.emailField).type(email)
        cy.get(login.passwordField).type(password + '{enter}')
        cy.url().should('eq',`${baseUrl}/home`)
    
    })

    it('Verify login with incorrect username and correct password',function(){
        
        cy.get(login.emailField).type(email + `${12}`)
        cy.get(login.passwordField).type(password)
        cy.get(login.logInButton).click()
        cy.url().should('not.contain',`${baseUrl}/home`)
        cy.get('.login-error-container > p').should("contain.text","We didn't recognize that email and/or password. ")

    
    })
    
    it('Verify login with correct username and incorrect password',function(){

        
        cy.get(login.emailField).type(email)
        cy.get(login.passwordField).type(password + `${12}`)
        cy.get(login.logInButton).click()
        cy.url().should('not.contain',`${baseUrl}/home`)
        cy.get('.login-error-container > p').should("contain.text","We didn't recognize that email and/or password. ")

    
    })

    it('Verify login when both username and password is incorrect',function(){

        
        cy.get(login.emailField).type(email + `${12}`)
        cy.get(login.passwordField).type(password + `${12}`)
        cy.get(login.logInButton).click()
        cy.url().should('not.contain',`${baseUrl}/home`)
        cy.get('.login-error-container > p').should("contain.text","We didn't recognize that email and/or password. ")

    
    })

    it('Verify login when both username and password is blank',function(){

        
        cy.get(login.emailField).type(' ')
        cy.get(login.passwordField).type(' ')
        cy.get(login.logInButton).click()
        cy.url().should('not.contain',`${baseUrl}/home`)
        cy.get('.login-error-container > p').should("contain.text","We didn't recognize that email and/or password. ")

    
    })
    
    it('Verify "Remember Me" functionality',function(){

        cy.get(login.emailField).type(email)
        cy.get(login.passwordField).type(password)
        cy.get(login.rememberMeCheckbox).click()
        cy.get(login.logInButton).click()
        cy.url().should('eq',`${baseUrl}/home`)
        cy.get(home.menuHeader).click()
        cy.get(home.logoutMenuItem).click({force: true})
        cy.get('.mainnav__actions > .mainnav__btn--primary').click()
        cy.get(login.emailField).should('contain.value',email)

    
    })

    it('Verify Reset-Password functionality',function(){

        cy.get(login.emailField).type(email)
        cy.get(login.passwordField).type(password)
        cy.get(login.forgotPasswordButton).click()
        cy.get(login.forgotEmailField).should('contain.value', email)
        cy.get(login.sendPasswordResetButton).click()
        cy.get('.reset-info > p:nth-child(2)').should('have.text','Click the link in the email to reset your password.')
       

    })

    })