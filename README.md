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