<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## 🚀 Sobre mi
Soy un desarrollador backend junior aprendiendo NestJs

## API BASE

1. Clonar proyecto
2. Instalar gestor de paquetes yarn
```
yarn install
```
3. Al archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar BD
```
//.env cambiar el nombre del contenedor
DB_CONTAINER:base
```
```
docker-compose up -d
```
6. Levantar proyecto 
```
yarn start:dev
```

### Configuraciones globales
- tsconfig.json ->"target": "ES2021"
- prefixGlobal -> api/v1

### Paquetes instalados

- Pipes: class-validator class-transformer
- ENV: yarn add @nestjs/config
- TypeOrm/Postres: yarn add @nestjs/typeorm typeorm pg

 
### Paginación

```
//product.service.ts
const { limit = 10 , offset = 0 } = paginationDto;

return await this.productRepository.find({
  take: limit,
  skip: offset,
})
```