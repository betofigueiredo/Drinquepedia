const { extendType, idArg, stringArg, intArg } = require('@nexus/schema');

const DrinqueMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.field('createDrinque', {
			type: 'Drinque',
			args: {
				nome: stringArg({ nullable: false }),
				imagem: stringArg(),
				categorias: stringArg(), // TODO
				ingredientes: stringArg(), // TODO
				calorias: intArg(),
				teorAlcoolico: stringArg(),
				dificuldade: stringArg(),
				sobre: stringArg(),
				dicas: stringArg(), // TODO
			},
			resolve: (_, args, ctx) => {
				const {
					nome,
					imagem,
					categorias,
					ingredienteId,
					calorias,
					teorAlcoolico,
					dificuldade,
					sobre,
					dicas,
				} = args;
				return ctx.prisma.drinque.create({
					data: {
						nome,
						imagem,
						categorias,
						calorias,
						teorAlcoolico,
						dificuldade,
						sobre,
						dicas,
						published: false,
						ingredientes: {
							connect: { id: ingredienteId },
						},
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
