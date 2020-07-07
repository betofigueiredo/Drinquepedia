/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema');
const { makeSchema, objectType, stringArg, intArg } = require('@nexus/schema');

const Drinque = objectType({
	name: 'Drinque',
	definition(t) {
		t.model.id();
		t.model.nome();
		t.model.imagem();
		t.model.categorias();
		t.model.ingredientes();
		// t.model.preparo()
		t.model.calorias();
		t.model.teorAlcoolico();
		t.model.dificuldade();
		t.model.sobre();
		t.model.dicas();
	},
});

const Ingrediente = objectType({
	name: 'Ingrediente',
	definition(t) {
		t.model.id();
		t.model.drinqueId();
		t.model.tipoIngredienteNome();
		t.model.quantidade();
		t.int('quantidadeOz', (o) => o.quantidade / 30);
		t.model.medida();
	},
});

const TipoIngrediente = objectType({
	name: 'TipoIngrediente',
	definition(t) {
		t.model.nome();
	},
});

const Categoria = objectType({
	name: 'Categoria',
	definition(t) {
		t.model.id();
		t.model.drinqueId();
		t.model.nome();
	},
});

const TipoCategoria = objectType({
	name: 'TipoCategoria',
	definition(t) {
		t.model.nome();
	},
});

const Dica = objectType({
	name: 'Dica',
	definition(t) {
		t.model.id();
		t.model.drinqueId();
		t.model.dica();
	},
});

const Query = objectType({
	name: 'Query',
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

		// t.list.field('feed', {
		//   type: 'Post',
		//   resolve: (_, args, ctx) => {
		//     return ctx.prisma.post.findMany({
		//       where: { published: true },
		//     })
		//   },
		// })

		// t.list.field('filterPosts', {
		//   type: 'Post',
		//   args: {
		//     searchString: stringArg({ nullable: true }),
		//   },
		//   resolve: (_, { searchString }, ctx) => {
		//     return ctx.prisma.post.findMany({
		//       where: {
		//         OR: [
		//           { title: { contains: searchString } },
		//           { content: { contains: searchString } },
		//         ],
		//       },
		//     })
		//   },
		// })
	},
});

const Mutation = objectType({
	name: 'Mutation',
	definition(t) {
		// t.crud.createOneUser({ alias: 'signupUser' })
		// t.crud.deleteOnePost()

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
				return ctx.prisma.post.create({
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

		// t.field('publish', {
		//   type: 'Post',
		//   nullable: true,
		//   args: {
		//     id: idArg(),
		//   },
		//   resolve: (_, { id }, ctx) => {
		//     return ctx.prisma.post.update({
		//       where: { id: Number(id) },
		//       data: { published: true },
		//     })
		//   },
		// })
	},
});

const schema = makeSchema({
	types: [
		Query,
		Mutation,
		Drinque,
		Ingrediente,
		TipoIngrediente,
		Categoria,
		TipoCategoria,
		Dica,
	],
	plugins: [nexusSchemaPrisma()],
	outputs: {
		schema: __dirname + '/../schema.graphql',
		typegen: __dirname + '/generated/nexus.ts',
	},
	typegenAutoConfig: {
		contextType: 'Context.Context',
		sources: [
			{
				source: '@prisma/client',
				alias: 'prisma',
			},
			{
				source: require.resolve('./context'),
				alias: 'Context',
			},
		],
	},
});

module.exports = {
	schema,
};
