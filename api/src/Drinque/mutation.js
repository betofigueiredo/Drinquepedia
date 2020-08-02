const { extendType, idArg, stringArg, intArg } = require('@nexus/schema');

const DrinqueMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createDrinque', {
            type: 'Drinque',
            args: {
                nome: stringArg({ nullable: false }),
                imagem: stringArg(),
                categoriaId: idArg(),
                // ingredientes: stringArg(), // TODO
                calorias: intArg(),
                teorAlcoolico: stringArg(),
                dificuldade: stringArg(),
                sobre: stringArg(),
            },
            resolve: (_, args, ctx) => {
                const {
                    nome,
                    imagem,
                    categoriaId,
                    // ingredienteId,
                    calorias,
                    teorAlcoolico,
                    dificuldade,
                    sobre,
                } = args;
                return ctx.prisma.drinque.create({
                    data: {
                        nome,
                        imagem,
                        categorias: {
                            connect: { id: Number(categoriaId) },
                        },
                        calorias,
                        teorAlcoolico,
                        dificuldade,
                        sobre,
                        // ingredientes: {
                        // 	connect: { id: ingredienteId },
                        // },
                    },
                });
            },
        });

        t.field('updateDrinque', {
            type: 'Drinque',
            args: {
                id: idArg(),
                categoriaId: idArg(),
            },
            resolve: (_, { id, categoriaId }, ctx) => (
                ctx.prisma.drinque.update({
                    where: { id: Number(id) },
                    data: {
                        categorias: {
                            connect: { id: Number(categoriaId) },
                        },
                    },
                })
            ),
        });
    },
});

module.exports = DrinqueMutation;
