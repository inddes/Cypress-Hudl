Following are the steps to run Cypress Project:

1.Install NodeJS on your machine.

2.Install VisualStudio Code on your machine (you can install any editor but I like VSCode most so chosen that)

3.Create a empty folder in your Local ex: "CypressProject".

4.Clone the repo from Github to above newly create folder "CypressProject".

5.Open "CypressProject" in VisualStudio code and put your credentials for Hudl account in describe block as below:
 email: <replace with your email>
 password: <replace with your password>

6. In VisualStudio code terminal move to project folder and then type below command to open test runner dashboard:

"node ./node_modules/cypress/bin/cypress open"

OR

"npx cypress open"

Note:[ If Above command doesn't work (ie; test runner dashboard doesn't open) then follow below all the steps otherwise jump to Step-9 and 10.

7.Open VisualStudio Code terminal and navigate to the project folder and then type command "npm init".

8.Install Cypress using command "npm install cypress --save-dev"

9.Upon successful completion of this command, the Cypress Dashboard launches and it will show INTEGRATION TESTS folder
and spec.js file inside it.

10.Click the "Login.spc.js"  file to run the test.


