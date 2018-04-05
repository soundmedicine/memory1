exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "resolution"; ALTER SEQUENCE resolution_id_seq RESTART WITH 4;')
    .then(function () {
      
      let resolutions = [{
        id: 1,
        dueDate: '1997-02-01',
        resolution: 'Go skiing'
      }, {
        id: 2,
        dueDate: '1997-05-01',
        resolution: 'Do stand-up'
      }, {
        id: 3,
        dueDate: '1997-09-01',
        resolution: 'Start knitting'
      }]

      return knex('resolution').insert(resolutions)
    });
};
