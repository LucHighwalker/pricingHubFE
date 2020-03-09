# Some things to note:

- I started the project thinking that I was going to use redux, but due to never having needed cross component states, I never ended up using redux. Hence the unused redux exports.

# Run project:

- Should work just fine by running `npm start`. As long as the backend server is running locally on port 4200.

# Some things I would have changed:

- I'm not a fan of calling the backend whenever a competitor is selected, especially since currently I'm getting all the data when the chart is first displayed. Given more time, I would have created a client side service that manages and hides different aspects of the data.
- Styling definitely still needs work.
- My variables names could defnitely use some imporvement.
- Given more time, I would have implemented unit tests.