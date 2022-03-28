
# Just Scrap It

Just-Scrap-It is a web scraping api created in node.js for a challenge of an interview at Pelando  
The api returns information about any product based on a given link.  

## Limitations

For now, the api only accepts a select list of sites that can have their products returned:
| Sites mapped in the API  | 
| :---------- | 
| `www.amazon.com.br` | 
| `www.americanas.com.br` | 
| `www.saraiva.com.br` | 

So when testing, please use only one of those sites to get the products.
## Testing the API Without Downloading The Source Code
The api itself is current running in Heroku [https://just-scrap-it.herokuapp.com](https://just-scrap-it.herokuapp.com) in case you don't want test the project locally.
## Testing The API Locally


After download the project in your machine, run:

```bash
  npm i
```
To be able to run the local api, you gonna need the [mysql](https://www.mysql.com/downloads/) installed with a database created.  
Feel free to give the name you want to the database.  
You also gonna need an **.env** file created in project root with the informations of database connection.  
The .env file has to have this variables:  

```env
  DB_USERNAME = user name
  DB_PASSWORD = passoword of the database
  DB_NAME = name of database
  DB_HOST =  host of database (127.0.0.1 for localhost)
  DB_DIALECT = mysql
  DB_PORT = 3306
```

With the database sctructure created, run the sequelize migration to create the table in your database:
  
```env
 npx sequelize-cli db:migrate
```

Now you are good to test the API
## Api documentation


#### Get the product information

```http
  POST /scrap
```

| Parameter   | Type       | Description                         | 
| :---------- | :--------- | :---------------------------------- |
| `url` | `string` | **Mandatory**. the url of product |

#### Body example of request POST /scrap

```http
{
  "url": "https://www.amazon.com.br/Xiaomi-Vers%C3%A3o-Global-Lacrada-preta/dp/B07SNG23JW?th=1"
}
```
#### Body example of responde POST /scrap

```http
{
    "title": "Smartwatch Xiaomi Mi Band 4 Oled Preto Original Lacrado",
    "image": "https://m.media-amazon.com/images/I/61KbCI7wMjL._AC_SX425_.jpg",
    "price": "R$189,99",
    "description": " Mi Smart Band 4   - Monitor colorido e monitor...",
    "url": "https://www.amazon.com.br/Xiaomi-Vers%C3%A3o-Global-Lacrada-preta/dp/B07SNG23JW"
}
```
## Used Stack

**Back-end:** Node, Express, Sequelize

