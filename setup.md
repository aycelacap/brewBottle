# Journey of your first FullStack Project

** Rails Redux Configuration **
visit: https://open.appacademy.io/learn/swe-in-person/react/rails-react-redux-configuration-checklist

1. rails new

Add --database=postgresql if using Postgres.
Add --skip-turbolinks to skip the turbolinks gem.
2. Update your Gemfile.

better_errors
binding_of_caller
pry-rails
annotate
bcrypt
jquery-rails (When using rails 5.1+)
3. bundle install

4. When using Rails 5.1+, update your application.js manifest to include:

//= require jquery
//= require rails-ujs (if not already there)
5. git init

Update your .gitignore.
node_modules/
bundle.js
bundle.js.map

Once the above is complete, run the following on your terminal:
git add .
git push -u origin master
git push -u origin master --force (run of the above is not working)
git push -u
npm init --yes
git push

6. git remote add the proper remote.
git push -u the remote.
7. npm init --yes to create a package.json file with the default setup.

8. Create a frontend folder at the root of your project with an entry file inside of it.

9. npm install --save
webpack
webpack-cli
react
react-dom
react-router-dom
redux
react-redux
@babel/core
@babel/preset-react
@babel/preset-env
babel-loader

10. Create a webpack.config.js file.

The entry point should be in frontend, e.g. entry: 'frontend/index.jsx'.
The output path should be 'app/assets/javascripts'.
Configure your module.rules to use Babel transpilation for:
JSX
ES6
Include devtool: 'source-map'.

11. git commit again (Verify that your .gitignore works).

git push your skeleton.


* ...
