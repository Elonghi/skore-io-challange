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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
