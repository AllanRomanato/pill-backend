# Back-end Pill

Essa api é responsável por entrar no site da drogasil e recuperar as informações de produtos
de acordo com a url passada por parâmetro.
```GET /api/product?url=xxxxx```

Caso exista um resultado (código de retorno ```200```). O JSON a ser exibido é o seguinte formato:

````json
{
  "productName": "Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas",
  "productImage": "https://img.drogasil.com.br/catalog/product/n/e/neosaldina-30-drageas-01.jpg?width=450&height=450&quality=85&type=resize",
  "gtin13": "7896094999992",
  "brand": "Neosaldina",
  "price": "32.78"
}
````

Caso o produto não existe (código de retorno ```404```). O JSON a ser exibido é o seguinte

````json
{
  "message": "Produto não encontrado"
}
````

## Para rodar o projeto localmente

É utilizado Docker para rodar esse projeto localmente e Node versão 20.6.0

Ao clonar o projeto, aponte o terminal para a pasta raiz e execute o seguinte comando
````Docker
docker build -t pill-back .   
````

Ao finalizar, os modulos ja estarão em sua maquina local, exeute o seguinte comento para iniciar o container

````Docker
docker run -p 4200:4200 pill-back
````