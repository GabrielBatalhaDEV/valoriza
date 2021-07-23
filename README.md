# New Level Week Valoriza

## Sobre
    Uma web Api REST feita em node, utilizando typeorm, typescript, separada por camadas.

    Para armazenagem dos dados utilizei o banco de dados postgres. 
 Configuração do db em **ormconfig.json**


## Regras

* **Cadastro de usuário**

    * Não é permitido múltiplos cadastro com o mesmo email.

    * Não é permitido cadastro sem email.

* **Cadastro de TAG**

    * Não é permitido múltiplas tags com o mesmo nome.

    * Não é permitido cadastro de uma tag sem nome.

    * Não é permitido cadastro por usuários que não sejam administradores.

* **Cadastro de Elogio**

    * Não é permitido usuário cadastrar elogio para si.

    * Não é permitido cadastrar elogio por usuários inválidos.

    * Precisa ser um usuário autenticado.

## Requests







