const { extendType, stringArg, intArg } = require('@nexus/schema');

const DrinqueQuery = extendType({
	type: 'Query',
	definition(t) {
		t.list.field('drinques', {
			type: 'Drinque',
			resolve: (_, args, ctx) => (
				ctx.prisma.drinque.findMany({
					include: { ingredientes: true },
				})
			),
		});

		t.field('drinque', {
			type: 'Drinque',
			args: {
				id: intArg(),
			},
			resolve: (_, { id }, ctx) => (
				ctx.prisma.drinque.findOne({
					where: { id },
					include: { ingredientes: true },
				})
			),
		});

		t.list.field('drinques_por_categorias', {
			type: 'Drinque',
			args: {
				categoria: stringArg(),
			},
			resolve: (_, { categoria }, ctx) => (
				ctx.prisma.drinque.findMany({
					where: {
						categorias: {
							some: {
								nome: {
									equals: categoria,
								},
							},
						},
					},
				})
			),
		});
	},
});

module.exports = DrinqueQuery;
