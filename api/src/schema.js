const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema');
const { makeSchema, objectType } = require('@nexus/schema');

const { Drinque, DrinqueQuery, DrinqueMutation } = require('./Drinque');
const { Categoria, CategoriaQuery, CategoriaMutation } = require('./Categoria');
const { Ingrediente, TipoIngrediente, IngredienteMutation } = require('./Ingrediente');
const { Preparo, PreparoMutation } = require('./Preparo');

const Dica = objectType({
	name: 'Dica',
	definition(t) {
		t.model.id();
		t.model.drinqueId();
		t.model.dica();
	},
});

// const Query = objectType({
// 	name: 'Query',
// 	definition(t) {
// 		// t.list.field('feed', {
// 		//   type: 'Post',
// 		//   resolve: (_, args, ctx) => {
// 		//     return ctx.prisma.post.findMany({
// 		//       where: { published: true },
// 		//     })
// 		//   },
// 		// })

// 		// t.list.field('filterPosts', {
// 		//   type: 'Post',
// 		//   args: {
// 		//     searchString: stringArg({ nullable: true }),
// 		//   },
// 		//   resolve: (_, { searchString }, ctx) => {
// 		//     return ctx.prisma.post.findMany({
// 		//       where: {
// 		//         OR: [
// 		//           { title: { contains: searchString } },
// 		//           { content: { contains: searchString } },
// 		//         ],
// 		//       },
// 		//     })
// 		//   },
// 		// })
// 	},
// });

const DrinqueType = [Drinque, DrinqueQuery, DrinqueMutation];
const CategoriaType = [Categoria, CategoriaQuery, CategoriaMutation];
const IngredienteType = [Ingrediente, TipoIngrediente, IngredienteMutation];
const PreparoType = [Preparo, PreparoMutation];

const schema = makeSchema({
	types: [
		...DrinqueType,
		...CategoriaType,
		...IngredienteType,
		...PreparoType,
		Dica,
	],
	plugins: [nexusSchemaPrisma()],
	outputs: {
		schema: `${__dirname}/../schema.graphql`,
		typegen: `${__dirname}/generated/nexus.ts`,
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
