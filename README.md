![icebreakersreadmelogo](https://user-images.githubusercontent.com/60520496/91582308-3d48fd00-e915-11ea-9c97-45a667b72a0c.png)

##

Icebreakers is a social party game web app. It's quick and easy for anybody to play with a group from their own individual phone, and a fun way to get to know the people at your next party even better.

[Video Demo](https://www.youtube.com/watch?v=qW0Sl7JjD7Y&t=1s)

[Rails API github](https://github.com/DavidWolff218/icebreakers_backend)

### Future Updates
- Implementing more validation checks for room and user names
- Deploying Icebreakers
- Creating a voting feature where users are presented with two options and can vote on the next question
- Allowing the host to remove questions from the game

### Screenshots
Homepage and Login

<img width="470" alt="Screen Shot 2020-08-27 at 10 23 02 AM" src="https://user-images.githubusercontent.com/60520496/91499698-8d797e00-e887-11ea-9ea6-685c832abd5b.png">

<img width="466" alt="Screen Shot 2020-08-27 at 10 23 43 AM" src="https://user-images.githubusercontent.com/60520496/91499742-a5e99880-e887-11ea-8e7c-3188fb72b45c.png">

Lobby and Gameroom

<img width="441" alt="Screen Shot 2020-08-27 at 11 32 54 AM" src="https://user-images.githubusercontent.com/60520496/91499796-bf8ae000-e887-11ea-86d4-7645e3279224.png">

<img width="462" alt="Screen Shot 2020-08-27 at 11 33 16 AM" src="https://user-images.githubusercontent.com/60520496/91499831-d03b5600-e887-11ea-858e-077d466be0de.png">

### Installation and Usage

** I am currently refactoring the CSS to make Icebreakers more responsive with different screen sizes. At this time it is best viewed in a mobile screen. To do this, press ``` shift command c ``` to open the console, and press the mobile screen icon in the upper left corner, seen in the screenshot below in blue. **

<img width="560" alt="Screen Shot 2020-08-27 at 12 38 07 PM" src="https://user-images.githubusercontent.com/60520496/91590398-f8c35e80-e920-11ea-8c88-81c5cbfa948a.png">


- Clone the [backend](https://github.com/DavidWolff218/icebreakers_backend)
- Install gems
```
cd icebreakers_backend
bundle install
```
- Clone this repo
- Install dependencies
```
cd icebreakers_frontend
npm install
```
- From the backend directory, start the  server. Make sure the API server is running on localhost:3000.
```
rails s
```
This should run on localhost:3000, so make sure nothing else is using that port.
- From the frontend directory, start the server.
```
npm start
```
The front end server will pick the next avaiable port, most likely localhost:3001, and you will be prompted to approve the port. You can also open a new browser window in incognito/private mode, go to localhost:3001, and you will be able to join the room as another player.

### Contact

You can reach me on [LinkedIn](https://www.linkedin.com/in/davidwolff218/) or by email, dcwolff218@gmail.com


