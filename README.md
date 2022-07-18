## Descrição

Este projeto foi feito com o intuito de resolver este desafio['https://github.com/skore-io/challenge/blob/main/backend.md']


## Importante

  Sempre quando for chamar uma rota é imporante utilizar um parametro na query que é o de token.![image](https://user-images.githubusercontent.com/47927459/179451027-512ba765-c95d-4172-9fed-f6ca41ab6a8b.png). 

Existem 3 Tokens funcionando.

usersAllowed = [
                {
                    user: 'renato',
                    userToken: '62d4f06f183e4b5b2d15bb2d',
                    role: 'admin',
                },
                {
                    user: 'francisco',
                    userToken: '62d4f07e183e4b5b2d15bb2f',
                    role: 'student',
                },
                {
                    user: 'matheus',
                    userToken: '62d4f083183e4b5b2d15bb31',
                    role: 'student'
                }
]

Ao rodar o projeto com o npm run start:dev você consegue acessar uma documentação sobre as rotas utilizando /swagger no final da sua url
![image](https://user-images.githubusercontent.com/47927459/179451232-4897f2b5-27dd-45e1-b9f9-ffd7e6c86011.png)

Aqui esta uma collection do Insomnia que pode auxiliar o uso da API
[Insomnia-All_2022-07-18.zip](https://github.com/Elonghi/skore-io-challange/files/9129695/Insomnia-All_2022-07-18.zip)


Não se preocupe com 

## Observacões

Sempre quando a rota para recuperar um unico conteudo for chamada ela vai adicionar o id deste conteudo no token de usuario que você esta utilizando para fazer o request.

![image](https://user-images.githubusercontent.com/47927459/179451832-ec4f4d7c-02ba-4800-95d1-5a069352fac9.png)

## Conclusão
  Cada projeto é sempre um grande aprendizado, confesso que esta api não ficou do jeito que eu queria em questão de codigo mas infelizmente o tempo é inimigo da perfeição e mais ainda dos devs uahuhau. Obrigado pela oportunidade de realizar este desafio, espero que gostem do que foi entregue, estou aberto a qualquer feedback sobre o mesmo. Essa foi uma das poucas vezes que utilizei o nestJs e como sempre aprendi cada vez mais. Espero que possa fazer parte da equipe e contribuir com vocês e claro aprender cada vez mais. Qualquer duvida podem me enviar um email: eduardolonghi5@gmail.com. Ou me enviar uma mensagem no linkedin https://www.linkedin.com/in/eduardo-udovic-9807bb192/.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
