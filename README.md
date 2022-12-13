# Diadromous React
A front-end to consume the back-end version of the same project. To go to the back-end version
[Click here](https://github.com/gregodiaz/diadromous-api)!

In this application you will be able to see all the fictitious boat trips created in the back. You can also view travels separately, where you will see the probabilities that the trip will be canceled according to the weather conditions of the departure city.
In addition, if you register, you can buy tickets for the available travels, see all the ones you have bought and cancel them if you want.
Both the cities and the weather forecast are real. The weather forecast is obtained from [open-meteo](https://open-meteo.com).


## Installation
1. Clone project and go to the folder
```bash
git clone https://github.com/gregodiaz/diadromous-react.git && cd diadromous-react
```
2. Install the dependencies 
```bash
npm i
```
3. Create the .env
```bash
cp .env.example .env
```
5. Init the project
```bash
npm start
```
6. Init the [back-end](https://github.com/gregodiaz/diadromous-api) and ready to go!


## Usage
-The backend should be running-
As soon as you start you will see the list of all available travels.
To see a travel in detail with its weather forecast, you can click on "**show**".
From that same detail screen, you can go through the travel one by one and buy a ticket if you want.
In order to buy a ticket, you have to login or register.
Once you are logged in you will be able to see the tickets you have purchased and cancel them if you wish by clicking the "**My Tickets**"
The "**buy**" button in the trip detail is automatically disabled if the weather conditions are not suitable

