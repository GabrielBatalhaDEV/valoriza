# New Level Week Valoriza

## Sobre
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

## Requests/Routes

#### Default port **localhost:3000**

Configuração da porta em **src/server.ts**.

```js
    const port = 3000 

    app.listen(port, () => console.log({
        port
    }))
```



## **Cadastro de usuário**

### **Método**

**Method POST**

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
### **Regras**

* **Cadastro de usuário**

    * Não é permitido múltiplos cadastro com o mesmo email.

    * Não é permitido cadastro sem email.







