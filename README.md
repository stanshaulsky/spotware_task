 # Spoware playwright test task.
 ## Setup
 Create .env file with credentials for authorization, should look like this:
 ```
USER_EMAIL = "email"
USER_PASSWORD = "pasword"
```
 ## Launch
 To launch test using all projects (3 browsers, setup file) use:
```
npx run playwright
```
Quicker way is to launch just chrome project with
```
npm run pw:chrome
npm run pw:chrome_debug
```
Test using setup file for authorization which will create playwright/.auth/user.json file that will be used by test.
After this file is created you can use
```
npm run pw:chrome_authorised
```
to skip setup phase and launch test with already authorised user
## Some project info
Project based mainly on element object and page object pattern (page element mostly) which is represented by components classes and one page class.
The idea is to create easy and scalable way to create composite components with basic classes which then can be used for complex page classes.
Implementation is not perfect and would be different for real project task (e.g TradeWatchMultitab class decomposition, separate order actions class etc.), but I think I managed to show the main approach.
