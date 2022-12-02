<h1 align="center"> Backend-NG </h1>


Back-end do projeto proposto pelo tech challenge da empresa NG.Cash. É uma api desenvolvida
em nodejs/express e que faz comunicação com o BD(postgres).


## :hammer: Funcionalidades do projeto

Rotas da api:

- `Get: /status`: Apenas uma rota de teste de funcionamento da api.
- `Post: /user`: Rota de criação de novas contas. O Body da requisição deve conter username e password.
- `Post: /login`: Rota de login e geração de token JWT. O Body da requisição deve conter username e password.

Rotas com autenticação:

- `Get: /balance`: Retorna o saldo da conta autenticada. 
- `Get: /alltransactions`: Retorna todas transações participadas pela conta autenticada.
- `Post: /transaction`: Rota de realização de transações de uma conta autenticada para outra. O body deve conter o value e usernameReceiver.
- `Post: /filter`: Rota de filtro por data, enviado e/ou recebido das transações realizadas pela conta autenticada. O body deve conter date, sent, received.

## :hammer: Como instalar

Com o docker instalado no ambiente, siga os seguintes passos:

- `Passo 1`: Crie o container do BD Postgres que será utilizado na aplicação:

"docker run --name teste-postgres -e POSTGRES_PASSWORD=test -e POSTGRES_DB=test -p 5432:5432 -d postgres"

- `Passo 2`: Verifique o ip do container teste-postgres pelo comando:

    "docker inspect -f '{{.NetworkSettings.IPAddress}}' teste-postgres" 

Caso o ip seja 172.17.0.2 , siga para o passo 3. Caso contrario vá até o arquivo app-data-source localizado no diretório src/database e mude o valor de 'host:' para o ip informado pelo comando. 

- `Passo 3`: O próximo passo é gerar a imagem do backend. No terminal navegue até o diretório raíz do projeto Backend-ng e execute o comando:

    "docker build -t backend-ng ."

- `Passo 4`: Em seguida irá gerar o container do backend da aplicação:

    "docker run --rm --name backend -d -p 5000:5000 backend-ng"

Feito esses procedimentos a API deverá estar devidamente funcionando e as tabelas do BD criadas automaticamente pelo Typeorm. Caso queira verificar é possível acessar no navegador pelo caminho 'localhost:5000/status'.

## :heavy_check_mark: Técnicas e tecnologias utilizadas

- `Node.js`
- `npm`
- `Express`
- `PostgreSQL`
- `JavaScript`
- `TypeScript`
- `JWT`
- `Typeorm`

## Autor
- `Jônathan Faria`