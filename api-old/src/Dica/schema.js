const { objectType } = require('@nexus/schema');

const Dica = objectType({
    name: 'Dica',
    definition(t) {
        t.model.id();
        t.model.titulo();
        t.model.imagem();
        t.model.texto();
    },
});

module.exports = Dica;
