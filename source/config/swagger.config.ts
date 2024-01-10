import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de dados PILL',
            version: '0.0.1',
            description: 'Documentação da API de dados PILL',
        },
    },
    apis: ['source/docs/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;