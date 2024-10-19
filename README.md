# teste-swapi

Um workflow do Git é um conjunto de práticas e etapas que uma equipe de desenvolvimento segue ao trabalhar em projetos com o sistema de controle de versão Git. Ele define como os desenvolvedores colaboram, compartilham código e organizam as alterações no projeto.

ci.yml

Esse workflow define uma ação de integração contínua (CI) para um projeto Node.js utilizando o GitHub Actions. De forma básica, ele automatiza a execução de testes e outras tarefas sempre que houver mudanças no código.

swapi.spec.js

Resumo:
Esse workflow é acionado sempre que alguém fizer um push ou um pull request na branch main. Ele testa o projeto Node.js em diferentes versões (14.x e 16.x) e, após configurar a versão 20.x do Node.js, instala as dependências e roda os testes automatizados. Isso ajuda a garantir que o código funcione corretamente em diferentes ambientes e versões do Node.js antes de ser mesclado ao código principal.

Este projeto contém testes automatizados para a API SWAPI, que oferece acesso a informações sobre personagens, naves, planetas, veículos e filmes do universo de Star Wars. Os testes foram escritos usando o framework Jest em conjunto com a biblioteca Supertest para realizar requisições HTTP.

Estrutura dos Testes
Os testes são organizados em diferentes categorias, cada uma focada em um recurso da API:

Personagens (/people/{id}): Testes para garantir que as informações sobre personagens são retornadas corretamente e que erros são tratados adequadamente quando se busca por um personagem inexistente.

Naves (/starships/{id}): Testes para verificar se os detalhes das naves são retornados corretamente e se erros são gerados para naves que não existem.

Planetas (/planets/{id}): Testes para garantir que as informações sobre planetas estão acessíveis e que respostas de erro são retornadas corretamente para planetas inexistentes.

Veículos (/vehicles/{id}): Testes para verificar se as informações sobre veículos são retornadas corretamente e que erros são tratados.

Filmes (/films/{id}): Testes para garantir que os dados dos filmes são retornados corretamente e que erros são gerados quando se busca um filme inexistente.

Como os Testes Foram Feitos
Supertest: Utilizado para realizar requisições HTTP para a API. O método request é chamado para criar uma requisição, seguido de métodos como .get() para especificar o endpoint desejado.

Expect: Utilizado para fazer asserções nos testes. Por exemplo, expect(resposta.status).toBe(200); verifica se o código de status da resposta é 200, indicando sucesso.

Teste de Sucesso: Cada recurso é testado com IDs válidos, e os testes verificam se as informações retornadas são corretas (por exemplo, o nome do personagem ou nave).

Teste de Erro: Testes são realizados para IDs inexistentes, onde se espera um código de status 404 e uma mensagem de erro adequada (por exemplo, Not found).

Executando os Testes
Para rodar os testes, siga os passos abaixo:

Clone o repositório:

bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
Instale as dependências:

bash
npm init --yes
npm install -D jest
npm install -D supertest
Execute os testes:

bash
npm test

Conclusão
Este conjunto de testes assegura que a API SWAPI está funcionando corretamente, tanto em cenários de sucesso quanto em casos de erro. Isso ajuda a garantir a integridade dos dados retornados e a confiabilidade da API para desenvolvedores que a utilizam.
