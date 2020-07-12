const { extendType, idArg, stringArg } = require('@nexus/schema');

const CategoriaMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.field('criaCategoria', {
			type: 'Categoria',
			args: {
				nome: stringArg({ nullable: false }),
			},
			resolve: (_, { nome }, ctx) => (
				ctx.prisma.categoria.create({
					data: { nome },
				})
			),
		});

		t.field('updateCategoria', {
			type: 'Categoria',
			args: {
				id: idArg(),
				nome: stringArg({ nullable: false }),
			},
			resolve: (_, { id, nome }, ctx) => (
				ctx.prisma.categoria.update({
					where: { id: Number(id) },
					data: { nome },
				})
			),
		});
	},
});

module.exports = CategoriaMutation;
