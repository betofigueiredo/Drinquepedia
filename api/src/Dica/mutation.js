const { extendType, stringArg } = require('@nexus/schema');

const DicaMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('criaDica', {
            type: 'Dica',
            args: {
                titulo: stringArg({ nullable: false }),
                imagem: stringArg(),
                texto: stringArg(),
            },
            resolve: (_, { nome }, ctx) => (
                ctx.prisma.dica.create({
                    data: { nome },
                })
            ),
        });

        // t.field('updateDica', {
        //     type: 'Dica',
        //     args: {
        //         id: idArg(),
        //         nome: stringArg({ nullable: false }),
        //     },
        //     resolve: (_, { id, nome }, ctx) => (
        //         ctx.prisma.dica.update({
        //             where: { id: Number(id) },
        //             data: { nome },
        //         })
        //     ),
        // });
    },
});

module.exports = DicaMutation;
