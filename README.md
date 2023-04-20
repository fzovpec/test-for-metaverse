## Description

The project provides interface to for Ethereum contract for storing gamer's losses and wins.

## Installation

```bash
$ npm install
```

You also need to configure .env file. First, create one in a root directory and fill in the following information:
```
API_PORT=Port where the app would be running
INFURA_KEY=Your Infura API key
CONTRACT_ADDRESS=Contract Address. Current Address - 0xAA400494dC16D657Ae98d2b092dD87fB25a29d0E
PRIVATE_KEY=Your wallet private key (the wallet from which you will make requests to the contract)
```

## Running the app

```bash
$ npm run start
```

## Get scores

Path: ```HOST:PORT/:username``` \
Method: ```GET```

Parameters:
```
username - gamer's username 
```
Success response code: 200 \
Sample response:
```
{
    "wins": 4,
    "losses": 6
}
```

# Update scores

Path: ```HOST:PORT/``` \
Method: ```POST```

Body parameters:
```
{
    username: gamer's username,
    wins: number of gamer's wins since the last update,
    losses: number of gamer's losses since the last update 
}
```

Success response code: 201
Response has empty body

