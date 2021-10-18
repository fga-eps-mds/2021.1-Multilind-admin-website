<br>
<br>
<h1 align="center" >Multilind Painel de admnistrador</h1>
<br>
<p align="center"><img width="200"src="src/assets/multilind.jpg"> </p>
<p align="center"> Website para criação de conteúdo para o Aplicativo móvel.</p>
<br>

# Índice

- [Rode o Servidor com Docker](#rode-o-servidor-com-docker)
  - [Dependências](#dependências)
  - [Arquivos de Configuração](#arquivos-de-configuração)
  - [Inicialização do Projeto](#inicialização-do-projeto)
'
## Rode o Servidor com Docker

### Dependências

Inicialmente, instale localmente as seguintes dependências:

1. Instale o [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/);
2. Instale o [Docker Compose](https://docs.docker.com/compose/install/).

### Arquivos de Configuração

Crie um arquivo `.env` na raiz do projeto e preencha as seguintes variáveis de ambiente:

```env
REACT_APP_AUTH_URL=
REACT_APP_AUTH_URL=

```

exemplo:

```env
REACT_APP_AUTH_URL=http://localhost:3333/api/auth
REACT_APP_CONTENT_URL=http://localhost:5000
```


### Inicialização do Projeto

1. Na pasta principal do projeto, construa e inicialize a aplicação com o comando:

```bash
make build
```

ou 

```bash
sudo docker-compose up --build
```

2. O website estará disponível em: `http://localhost:3000`.


