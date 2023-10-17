# Codifica Project

Aplicação feita com o propósito de adicionar, excluir, editar e filtrar orçamentos. 

## Tecnologias utilizadas

**Frontend**: 
 - ReactJS, com react-icons e material ui;
 - Axios;
 - Moment;

**Backend**: 
 - Laravel Lumen (PHP);
 
**Banco de dados**: 
 - MySQL;
 
**Ferramentas de desenvolvimento**:

 - Visual Studio Code;
 - MySQL Workbench;

## Setup da aplicação

Para instalar as dependências e rodar o frontend, você vai precisar de algum gerenciador de pacotes (yarn, npm, etc). Nesse caso iremos utilizar o npm.

Depois de clonar/baixar o projeto, acesse a pasta da aplicação e abra o terminal. Dentro da pasta ***frontend***, iremos instalar as dependências utilizando o seguinte comando:

`$ npm install`

Depois de baixar todas as dependências (pode demorar um pouco), iremos iniciar o frontend da seguinte forma:

`$ npm run dev`

Pronto, depois de alguns segundos a página da aplicação estará disponível para ser acessada através do link gerado no console. Podemos notar que não há nenhum dado sendo carregado, isso por que ainda precisamos rodar a API para o frontend conseguir receber os dados.

Para o servidor do banco de dados podemos utilizar o XAMPP. Caso você não tenha, baixe-o e inicie o sevidor MySQL. Para ver como utilizar o XAMPP, [clique aqui.](http://linguagemprisma.br4.biz/blog/configurando-mysql-xampp-em-windows/) Caso não tenha conseguido através desse link, existem diversos tutoriais no google de como iniciar um servidor MySQL.

É claro que utilizar o XAMPP é só uma opção, você pode iniciar o servidor do banco de dados da maneira que achar melhor.

Agora vamos iniciar um servidor para rodar o PHP. Antes de tudo você deve ter o PHP instalado e configurado.

Agora, entre na pasta ***backend***. Precisamos digitar alguns comandos para subir o banco de dados e iniciar o servidor.

Para começar, crie uma database com o nome que você especificará no seu .env.

Para realizar as migrations, isto é, criar as tabelas do banco de dados, iremos digitar:
`$ php artisan migrate`

Para realizar a criação de orçamentos prontos para teste criaremos um seeder, iremos digitar:
`$ php artisan db:seed --class=BudgetSeeder`

Por último, vamos iniciar o servidor com o seguinte comando:
`$ php -S localhost:8000 -t public`

> Observação: o frontend está configurado para consumir a API na porta 8000, caso você não consiga utilizar essa porta, você deve configurar o arquivo **frontend/src/services/api.js** com a porta escolhida.


Para testar se a API está funcionando corretamente, acesse **localhost:8000/api/budget** e confira o retorno da página. Caso você tenha iniciado o ***seeder***, ira retornar um array com alguns orçamentos já declarados. Caso contŕario, revise os passos anteriores, e se precisar, use o google.



## Interface e funcionalidades da aplicação

Na tela inicial, temos a tabela com os orçamentos. Os orçamentos estão ordenadas pelo *id*, em ordem decrescente. Também existe um campo responsável por criar novos orçamentos.

![tela inicial](![image](https://github.com/viniciuscg/codificar-project/assets/105397334/7744aa6e-5023-4c29-b65e-ca153d020a71))

Podemos visualizar os filtros da tabela no canto superior direito da pagina.

![filtros](![image](https://github.com/viniciuscg/codificar-project/assets/105397334/83144afe-9693-41aa-b5b3-0641954d4893)
)

Nesta tela, estão todas as funções para excluir editar e adicionar orçamentos.

![excluir e editar](https://user-images.githubusercontent.com/38995753/84848613-df04c180-b029-11ea-933c-21e57c05e123.png)
![adicionar](![image](https://github.com/viniciuscg/codificar-project/assets/105397334/5fb89e7c-f694-4855-98e6-dc72dd008710))

## API

### Budget
**GET**

`/api/budget`
*Retorna os dados de todos os orçamentos existentes, filtragem dos orçamentos e tambem é responsável por retornar a página atual*

#### Parâmetros disponíveis

*page: página atual*
*nameSeller: nome vendedor*
*nameCustomer: nome cliente*
*initialDate: data incial da filtragem*
*finalDate: data final da filtragem*

**POST**

`/api/budget`
*É responsável por criar um novo orçamento, tem como retorno o orçamento criado*

`/api/budget{id}`
*É responsável por editar um orçamento, tem como retorno o orçamento criado*

**DELETE**

`/api/budget{id}`
*É responsável por deletar um orçamento*
