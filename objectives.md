# Bugs:

- When creating a post, the default timestamp is a day behind. 
    - cause: default post time is set to auto_new method, which return a day before server time.
    - fix: default the post time to `datetime.datetime.now` from server time.
- Edit time is changed whenever a blog post has been viewed.
- (Not necessary a bug) When creating a post, default timestamp is set to EST time. Might be a good idea to make it local time.


# Features to be added:

## Django

- adding a function so that each post has its views and display on the site

## Javscript

- Implement a function that validates that the input Vehicles. For details see ./src/app.js