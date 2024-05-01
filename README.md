# README

[Live Site](https://thawing-beach-94274-961d6daa8592.herokuapp.com/#/)

brewBottle is an e-commerce website, inspired from the Blue Bottle Coffee Company.

## Technologies

### Backend
  * Ruby on Rails 2.5.1
  * Postgresql 0.18
### Frontend
  * React
  * Redux
### Other
  * AWS
  * Heroku

## Features 

### User Authentication
  * Secure User Auth implemented by BCrypt salt hashing 
  * Users are able to create an account, login, and logout of an account 
  
```
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)    
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end
```
  * Demo account is available

### Product Index 
  * Users can view all products and click a an image for a show page

[productIndex](./screenshots/productIndex)

### Navigation bar
  * Responsive buttons on the navbar

[navbar](./screenshots/website.png)




<!-- bundle exec rails g migration CreateCart_items -->
<!-- bundle exec rails g model cart_item -->





























<!-- # README


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
