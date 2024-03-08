const { extendType, idArg, stringArg, intArg } = require('@nexus/schema');

const connectCategorias = (categoriaId) => (
    categoriaId !== undefined
        ? { categorias: { connect: { id: Number(categoriaId) } } }
        : null
);

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
                decoracao: stringArg(),
                calorias: intArg(),
                teorAlcoolico: stringArg(),
                dificuldade: stringArg(),
                sobre: stringArg(),
            },
            resolve: (_, args, ctx) => ctx.prisma.drinque.create({
                data: {
                    nome: args.nome,
                    imagem: args.imagem,
                    categorias: connectCategorias(args.categoriaId),
                    decoracao: args.decoracao,
                    calorias: args.calorias,
                    teorAlcoolico: args.teorAlcoolico,
                    dificuldade: args.dificuldade,
                    sobre: args.sobre,
                    // ingredientes: {
                    // 	connect: { id: ingredienteId },
                    // },
                },
            }),
        });

        t.field('updateDrinque', {
            type: 'Drinque',
            args: {
                id: idArg(),
                categoriaId: idArg(),
            },
            resolve: (_, args, ctx) => ctx.prisma.drinque.update({
                where: { id: Number(args.id) },
                data: {
                    categorias: {
                        connect: { id: Number(args.categoriaId) },
                    },
                },
            }),
        });
    },
});

module.exports = DrinqueMutation;
