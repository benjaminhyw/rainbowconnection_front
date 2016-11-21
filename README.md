# RainbowConnection Front

I was not able to create a frontend application that successfully connected with my Laravel backend.  As a result, this repository is very bare bones.

Things I did:

- Generate route for Users (as well as a User Model)
- Generate adapter to try and get a connection running.
- Generate a serializer to aid the connection.

After troubleshooting a lot I'm still not sure why my Ember app couldn't connect with my Laravel app.  The last error I read on the chrome console was

'jQuery.Deferred exception: Cannot read property 'extend' of undefined TypeError: Cannot read property 'extend' of undefined
    at Module.callback'

I think this is in regards to my user model, but I couldn't resolve it.

Cloning this repository will show a very basic hello world, and my attempt to get my API working with my local server Laravel backend.
