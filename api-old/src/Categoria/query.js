const { extendType } = require('@nexus/schema');

const CategoriaQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('categorias', {
            type: 'Categoria',
            resolve: (_, args, ctx) => (
                ctx.prisma.categoria.findMany()
            ),
        });
    },
});

module.exports = CategoriaQuery;
