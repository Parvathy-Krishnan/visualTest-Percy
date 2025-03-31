![image](https://github.com/user-attachments/assets/1aeeccc1-42c4-48b0-bfa5-44d0b5b1c7d7)Configuration Steps:

1.	Create a Project Directory: 
•	mkdir testcafe-percy-demo 
•	cd testcafe-percy-demo

2.	Initialize Node.js Project:
•	npm init -y

3.	Install TestCafe and Percy Plugin:
•	npm install testcafe @percy/testcafe --save-dev

4.	Install Percy CLI Globally:
•	npm install -g @percy/cli

5.	Create a public directory:
•	mkdir public

6.	Create index.html in the public directory:
•	<refer the workspace>

7.	Make the local server up and running
•	npm install -g http-server
•	http-server

8.	Create your script (TestCafe)
•	mkdir tests
•	Create demo.test.js in the tests directory <refer workspace>

9.	Percy Setup
•	Go to percy.io and sign up.
•	Log in and create a new project.
•	Copy the PERCY_TOKEN from your project settings.
•	Set PERCY_TOKEN Environment Variable

10.	export PERCY_TOKEN=[YOUR_PERCY_TOKEN]
    
12.	Run Tests with Percy
•	Add a script to your package.json

13.	"scripts": { "test:percy": "percy exec -- testcafe chrome tests/" }
    
14.	Run the test
•	npm run test:percy

15.	Review the Percy Report
•	Go to Percy Dashboard (The link to navigate will be available in the terminal once the test is complete)
•	Review the Build
•	Inspect Visual Diffs
