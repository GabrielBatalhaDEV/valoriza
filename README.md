<h1 align='center'><strong>New Level Week Valoriza</h1>

# Sobre
    Uma web Api REST feita em node, utilizando typeorm, typescript, separada por camadas.

    Para armazenagem dos dados utilizei o banco de dados postgres. 
 Configuração do db em **ormconfig.json**.

- [rotas](#rotas)
- [config](#config)
    - [package](#package)
    - [tsconfig](#tsconfig)




# Routes

#### Default port **localhost:3000**

Configuração da porta em **src/server.ts**.

```ts 
    const port = 3000 

    app.listen(port, () => console.log({
        port
    }))
```


## Rotas

- [/users](#users)
- [/tags](#tags)
- [/compliments](#compliments)

    - [/send](#send)

    - [/receive](#receive)

    
- [/login](#login) 

exemplo: **127.0.0.1:3000/users**

# **Requests**
<br>

## _/users_
### **Cadastro de usuário** 
<br>

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
<br>

## _/tags_
### **Cadastro de tags** 
<br>

### **Método GET**

**Retorna** um Array de objetos JSON

Exemplo:
```json
[
  {
    "id": "29aa76d4-928d-40e0-a88a-3f96d04f00e4",
    "name": "Luta",
    "created_at": "2021-07-23T10:46:34.575Z",
    "updated_at": "2021-07-23T10:46:34.575Z",
    "nameCustom": "#Luta"
  }
]
```


### **Método POST**
<br>

É necessário um token de administrador para cadastrar uma tag, mais informação sobre o token \[token\]\(#token\)

**body JSON**

```json
{
	"name":"Liderança"
}
```

**Retorna** um objeto JSON

Exemplo:
```json
{
  "id": "baf51121-4394-4b85-ba4e-81ead0cb6101",
  "name": "Liderança",
  "created_at": "2021-07-23T15:06:42.094Z",
  "updated_at": "2021-07-23T15:06:42.094Z"
}
```

### **Regras**

* Não é permitido múltiplas tags com o mesmo nome.

```json
    {
        "error": "Tag already exists"
    }
```

* Não é permitido cadastro de uma tag sem nome.

```json
    {
        "error": "Incorrect name"
    }
```

* Não é permitido cadastro por usuários que não sejam administradores.

```json
    {
        "error": "Unauthorized"
    }
```
<br>

## _/compliments_
### **Cadastro de elogio** 
<br>

### **Método GET**

É necessário um token para elogiar, mais informação sobre o token \[token\]\(#token\)

### _/send_

**Retorna** um Array de objetos JSON

Exemplo:
```json
[
  {
    "id": "d764c35a-6f3f-4c5d-a755-18e87af9e35d",
    "user_sender": "f00a7ac5-e64e-4e3c-b179-b04f6f8087f2",
    "user_receiver": "ee15e8cb-aebe-4855-ad3d-d0c643f31cfb",
    "tag_id": "eea644cb-5f65-4bf0-9709-a4b78a35caae",
    "message": "Estuda esse bd, Você vai gostar",
    "created_at": "2021-07-23T10:56:13.158Z",
    "userSender": {
      "id": "f00a7ac5-e64e-4e3c-b179-b04f6f8087f2",
      "name": "Gabriel",
      "email": "gabriel@gmail.com",
      "password": "$2a$08$Y19sUHuUsvr7t7d5ORHl1OtzoXu6/OrUS22F1.X5PE23eHoVDw066",
      "admin": true,
      "created_at": "2021-07-23T10:42:03.614Z",
      "Updated_at": "2021-07-23T10:42:03.614Z"
    }
  }
]
```

### _/receive_

**Retorna** um Array de objetos JSON

Exemplo:
```json
[
  {
    "id": "6db31d75-4bfa-4ca4-97e9-b0718778bbd4",
    "user_sender": "ee15e8cb-aebe-4855-ad3d-d0c643f31cfb",
    "user_receiver": "f00a7ac5-e64e-4e3c-b179-b04f6f8087f2",
    "tag_id": "baf51121-4394-4b85-ba4e-81ead0cb6101",
    "message": "Gostei muito",
    "created_at": "2021-07-23T15:44:38.104Z"
  }
]
```


### **Método POST**
<br>

É necessário um para cadastrar um elogio, mais informação sobre o token [token](#token)

**body JSON**

```json
{
	"tag_id":"baf51121-4394-4b85-ba4e-81ead0cb6101",
	"user_receiver":"f00a7ac5-e64e-4e3c-b179-b04f6f8087f2",
	"message":"Gostei muito"
}
```

**obs:** O campo _user\_sender_ não é necessário na request, esté campo é preenchido com base no token do usuário, como verá abaixo

<br>

**Retorna** um objeto JSON

Exemplo:
```json
{
  "id": "6db31d75-4bfa-4ca4-97e9-b0718778bbd4",
  "user_sender": "ee15e8cb-aebe-4855-ad3d-d0c643f31cfb",
  "user_receiver": "f00a7ac5-e64e-4e3c-b179-b04f6f8087f2",
  "tag_id": "baf51121-4394-4b85-ba4e-81ead0cb6101",
  "message": "Gostei muito",
  "created_at": "2021-07-23T15:44:38.104Z"
}
```

### **Regras**

* Não é permitido usuário cadastrar elogio para si.

```json
    {
        "error": "Incorrect User Receiver"
    }
```

* Não é permitido cadastrar elogio por usuários inválidos.

```json
    {
        "error": "Unauthorized"
    }
```

* Precisa ser um usuário autenticado.
```json
    {
        "error": "Unauthorized"
    }
```

<br>

## _/login_
### **Efetuar login** 
<br>

### **Método POST**
<br>

**body JSON**

```json
{
	"email":"viego@gmail.com",
	"password":"viego"
}
```

**Retorna** uma string

Exemplo:
```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpZWdvQGdtYWlsLmNvbSIsImlhdCI6MTYyNzA1NTAzNCwiZXhwIjoxNjI3MTQxNDM0LCJzdWIiOiJlZTE1ZThjYi1hZWJlLTQ4NTUtYWQzZC1kMGM2NDNmMzFjZmIifQ.Lwl_eqosrSyaCEz-ZxCSxJGhp7RTIc5_bTKDUhHrfA8"
```

### **Regras**

* Caso email/senha incorretas.

```json
    {
        "error": "Email/Password Incorrect"
    }
```

<br>

# Token 

* informação

    * Token tem 1 dia de vida util 

    * É um token **Bearer**

    * É ele é criado na rota [/login](#login)

# Config

## package

```json
"dependencies": {
    "bcryptjs": "^2.4.3",
    "class-transformer": "^0.4.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.0.1",
    "pg": "^8.6.0",
    "reflect-metadata": "^0.1.13",
    "sqlite3": "^5.0.2",
    "typeorm": "^0.2.34",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.4",
    "@types/uuid": "^8.3.1",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.3.5"
  }
```

## tsconfig
```json
{
  "compilerOptions": {
    "target": "es5",                               
    "module": "commonjs",                          
    "strict": false,                                
    "esModuleInterop": true,                       
    "skipLibCheck": true,                          
    "forceConsistentCasingInFileNames": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false,
    "resolveJsonModule": true,
    "typeRoots": ["./src/@types"],
    "lib": [ "es2015" ]
      
  }
}
```









