GETTING STARTED
===============

`bundle install`

`rake db:create db:migrate`

`npm install`

`rails s`

visit `localhost:3000`


README
======

Please see `./my_notes.txt` for my notes about this scaffold.


Heroku Deploymeny
=================
`heroku addons:create heroku-postgresql:hobby-dev`

`heroku buildpacks:set heroku/ruby`

`heroku buildpacks:add --index 1 heroku/nodejs`

https://devcenter.heroku.com/articles/heroku-postgresql
https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app
