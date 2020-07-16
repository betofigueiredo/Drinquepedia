const { extendType, idArg, stringArg, intArg } = require('@nexus/schema');

const PreparoMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.field('criaPreparo', {
			type: 'Preparo',
			args: {
				ordem: intArg(),
				metodo: stringArg(),
				drinqueId: idArg(),
			},
			resolve: (_, args, ctx) => {
				const {
					ordem,
					metodo,
					drinqueId,
				} = args;
				return ctx.prisma.preparo.create({
					data: {
						ordem,
						metodo,
						drinque: {
							connect: { id: Number(drinqueId) },
						},
					},
				});
			},
		});
	},
});

module.exports = PreparoMutation;
