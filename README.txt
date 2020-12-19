sudo npm install express --save
sudo npm install nodemon --save-dev
sudo npm install dotenv --save
sudo npm install mongoose --save
yarn add mustache-express --save

dbPath: /var/lib/mongodb - Caminho onde os arquivo do banco de dados vão está
path: /var/log/mongodb/mongod.log - Caminho do log do banco de dados.

Comando para iniciar o serviço do banco de dados.
     sudo service mongod start

Usando o framework express
     * Express - para usar na captura do metodo post via json.
     * Templates

para trabalhar com mensagem vamos usar essa 3 bibliotecas

npm install cookie-parser express-session express-flash --save