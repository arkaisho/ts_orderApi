# ts_orderApi
A simple API to organize orders in a confectionery.

* Using typeorm and express
* Online on [Heroku](https://ts-confectionery.herokuapp.com/)

# Https routes

Use this routes to insert, delete, update and list orders.
* Notice that you have to login in order to get one token before acessing the actual data from the system.

|  action | method  | url | body | header |
|---|---|---|---|---|
| login|  POST | https://ts-confectionery.herokuapp.com/login | {"username":"username","password":"password"} |none |
| list all|  GET | https://ts-confectionery.herokuapp.com/ | none | {"token":"encrypted token"} |
|  create |  POST | https://ts-confectionery.herokuapp.com/create | {order} | {"token":"encrypted token"} |
|  update |  PUT |  https://ts-confectionery.herokuapp.com/update/id | {order} | {"token":"encrypted token"} |
|  detail |  GET |  https://ts-confectionery.herokuapp.com/show/id | none | {"token":"encrypted token"} |
|  delete |  DELETE | https://ts-confectionery.herokuapp.com/delete/id  | none | {"token":"encrypted token"} |

# Order JSON structure

Use this JSON structure to manipulate data.

```json
{
  "clientName": "nome do cliente",
  "telphone": "(00)99999-9999",
  "whatsApp": "(00)99999-9999",
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
export TYPEORM_HOST="database.address.com"; #the ip or dns address of the database
export TYPEORM_DATABASE="database"; #the database name
export TYPEORM_USERNAME="username"; #database username
export TYPEORM_PASSWORD="password"; #database password
export LOGIN_USERNAME="username"; #login username
export LOGIN_PASSWORD="password"; #login password
export JWT_KEY="jwt_key"; #encryption key
export PORT=8888; #system port (only local running)
```
Run with nodemon script:
```bash
yarn watch
```

# Deploy on heroku

Procfile and package.json scripts are already defineds to deploy on Heroku. To run the deploy on heroku do:
* Clone this repository in your own repository.
* Create a heroku app.
* Create a heroku postgres database for this app.
* Define environment variables  on heroku plataform (same as local running except for PORT)
* Configure the heroku application to automatically deploy from your git repository.