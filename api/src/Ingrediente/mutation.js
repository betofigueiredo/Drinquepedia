const { extendType, idArg, intArg, stringArg } = require('@nexus/schema');

const IngredienteMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.field('criaIngrediente', {
			type: 'Ingrediente',
			args: {
				ordem: intArg(),
				quantidade: intArg(),
				medida: stringArg(),
				drinqueId: idArg(),
				tipoIngredienteid: idArg(),
			},
			resolve: (_, args, ctx) => {
				const {
					ordem,
					quantidade,
					medida,
					drinqueId,
					tipoIngredienteid,
				} = args;
				return ctx.prisma.ingrediente.create({
					data: {
						ordem,
						quantidade,
						medida,
						drinque: {
							connect: { id: Number(drinqueId) },
						},
						tipoIngrediente: {
							connect: { id: Number(tipoIngredienteid) },
						},
					},
				});
			},
		});

		t.field('criaTipoIngrediente', {
			type: 'TipoIngrediente',
			args: {
				nome: stringArg({ nullable: false }),
			},
			resolve: (_, { nome }, ctx) => (
				ctx.prisma.tipoIngrediente.create({
					data: { nome },
				})
			),
		});
	},
});

module.exports = IngredienteMutation;
