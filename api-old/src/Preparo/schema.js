const { objectType } = require('@nexus/schema');

const Preparo = objectType({
    name: 'Preparo',
    definition(t) {
        t.model.id();
        t.model.ordem();
        t.model.metodo();
        t.model.drinqueId();
    },
});

module.exports = Preparo;
