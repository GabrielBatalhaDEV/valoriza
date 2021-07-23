<h1 align='center'><strong>New Level Week Valoriza</h1>

# Sobre
    Uma web Api REST feita em node, utilizando typeorm, typescript, separada por camadas.

    Para armazenagem dos dados utilizei o banco de dados postgres. 
 Configuração do db em **ormconfig.json**.




* **Cadastro de TAG**

    * Não é permitido múltiplas tags com o mesmo nome.

    * Não é permitido cadastro de uma tag sem nome.

    * Não é permitido cadastro por usuários que não sejam administradores.

* **Cadastro de Elogio**

    * Não é permitido usuário cadastrar elogio para si.

    * Não é permitido cadastrar elogio por usuários inválidos.

    * Precisa ser um usuário autenticado.


# Routes

#### Default port **localhost:3000**

Configuração da porta em **src/server.ts**.

```ts 
    const port = 3000 

    app.listen(port, () => console.log({
        port
    }))
```


- Rotas
    - [/users](#users)
    - [/tags](#tags)
    - [/compliments](#compliments)
    - [/login](#login) 

exemplo: **127.0.0.1:3000/users**

# **Requests**

## **Cadastro de usuário** 
## _/users_

### **Método GET**

**Retorna** um Array de objetos JSON

Exemplo:
```json
[
  {
    "id": "ee15e8cb-aebe-4855-ad3d-d0c643f31cfb",
    "name": "username",
    "email": "user@gmail.com",
    "admin": false,
    "created_at": "2021-07-23T10:41:38.703Z",
    "updated_at": "2021-07-23T10:41:38.703Z"
  }
]
```
**obs:** O campo password é ocultado pela API para manter a segurança do usuário


### **Método POST**

**body JSON**

```json
{
	"name":"Gabriel",
	"email":"gabriel@gmail.com",
	"password":"gabriel",
	"admin":true 
}
```
#### **obs**: campo **admin** é opcional, caso não o coloque, seu valor default é false.

```json
{
	"name":"Gabriel",
	"email":"gabriel@gmail.com",
	"password":"gabriel" 
}
```

**Retorna** um objeto JSON
Exemplo:
```json
{
  "user": {
    "id": "711eb4ab-3e87-4c20-8c03-bdc2dbcb7cb8",
    "name": "Gabriel",
    "email": "123@gmail.com",
    "password": "$2a$08$NVxa1Woy5bVxiepZPsaxauZQ6sftYkxH8GWu5KsCpUSFmkR9tjVjm",
    "admin": true,
    "created_at": "2021-07-23T13:51:02.057Z",
    "Updated_at": "2021-07-23T13:51:02.057Z"
  }
}
```

### **Regras**

* **Cadastro de usuário**

    * Não é permitido múltiplos cadastro com o mesmo email.

    ```json
    {
        "error": "User already exists"
    }
    ```

    * Não é permitido cadastro sem email.

    ```json
    {
        "error": "Email Incorrect"
    }   
    ```

## _/tags_






