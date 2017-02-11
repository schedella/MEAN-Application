## MEAN Application
### A simple navigation application using AngularJS, ExpressJS & NodeJS

- Bower used as frontend
- express used as web framework
- Node used as server

## Run

Do the following steps:
```
npm intstall
bower install
```

This application will run at [http://localhost:3000](http://localhost:3000/) if you run the following commands
```
npm start
node server.js
```
This application will run at [http://localhost:8095](http://localhost:8095/) if you run the following commands
```
gulp
```
## Heroku

### Creating Procfile with the followingcode
```
web: node server.js
```
### Following steps needs to be performer to push the changes
```
heroku create
git push heroku master
heroku ps:scale web=1
heroku open
```