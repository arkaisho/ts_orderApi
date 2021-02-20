# ts_orderApi
A simple API to organize orders in a confectionery.

* Using typeorm and express
* Online on [Heroku](https://ts-confectionery.herokuapp.com/)

# Https routes

Use this routes to insert, delete, update and list orders.

|  action | method  | url | body |
|---|---|---|---|
| list all|  GET | https://ts-confectionery.herokuapp.com/ | none |
|  create |  POST | https://ts-confectionery.herokuapp.com/create | {order} |
|  update |  PUT |  https://ts-confectionery.herokuapp.com/update/id | {order} |
|  detail |  GET |  https://ts-confectionery.herokuapp.com/show/id | none |
|  delete |  DELETE | https://ts-confectionery.herokuapp.com/delete/id  | none |

# Order JSON structure

Use this JSON structure to manipulate data.

```json
{
  "clientName": "nome do cliente",
  "telphone": "(00)99999-9999",
  "deliveryDate": "2021-01-15",
  "pasta": " masssa",
  "filling": "recheio",
  "cover": "cobertura",
  "observation": "observação"
}
```

# Run locally

First install the dependencies:
```bash
yarn install
```
Export yours environment variables to connect to your database:
```bash
export TYPEORM_HOST="database.address.com";
export TYPEORM_DATABASE="database";
export TYPEORM_USERNAME="username";
export TYPEORM_PASSWORD="password";
export PORT=8888;
```
Run with nodemon script:
```bash
yarn watch
```

# Deploy on heroku

Procfile and package.json scripts are already defineds to deploy on Heroku. To run the deploy on heroku do:
* Clone this repository in your own repository.
* Create a heroku app.
* Define environment variables on heroku plataform
* Configure the heroku application to automatically deploy from your git repository.