/**
 * @swagger
 * /api/product:
 *   get:
 *     description: Captura um produto específico de uma url enviada por parametro
 *     parameters:
 *       - in: query
 *         name: url
 *         description: Site da Drogasil com o medicamento a ser extraido (https://www.drogasil.com.br/neosaldina-30-drageas.html)
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *          application/json:
 *              example:
 *                  productName: Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas
 *                  productImage: https://img.drogasil.com.br/catalog/product/n/e/neosaldina-30-drageas-01.jpg?width=450&height=450&quality=85&type=resize"
 *                  gtin13: 7896094999992
 *                  brand: Neosaldina
 *                  price: 32.78
 *       404:
 *          description: Produto não Encontrado
 *          content:
 *              application/json:
 *                 example:
 *                  message: Produto não encontrado
 *
 *
 */