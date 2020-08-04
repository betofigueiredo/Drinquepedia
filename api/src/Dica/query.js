const { extendType } = require('@nexus/schema');

const DicaQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('dicas', {
            type: 'Dica',
            resolve: (_, args, ctx) => (
                ctx.prisma.dica.findMany()
            ),
        });
    },
});

module.exports = DicaQuery;
