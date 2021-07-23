# New Level Week Valoriza

## Sobre
    Uma web Api REST feita em node, utilizando typeorm, typescript, separada por camadas.

    Para armazenagem dos dados utilizei o banco de dados postgres. 
 Configuração do db em **ormconfig.json**


## Regras

### **Cadastro de usuário**

    [x] Não é permitido múltiplos cadastro com o mesmo email.

    [x] Não é permitido cadastro sem email.

### **Cadastro de TAG**

    [x] Não é permitido múltiplas tags com o mesmo nome.

    [x] Não é permitido cadastro de uma tag sem nome.

    [x] Não é permitido cadastro por usuários que não sejam administradores.

### **Cadastro de Elogio**

    [x] Não é permitido usuário cadastrar elogio para si.

    [x] Não é permitido cadastrar elogio por usuários inválidos.

    [x] Precisa ser um usuário autenticado.

## Requests







