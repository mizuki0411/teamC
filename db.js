var {Client} = require('pg');
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: 'Nnkrut1023',
    port: 5432
})
 
client.connect()
