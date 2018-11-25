
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('topics',
  [
    {
          id: 'topic1',
          name: 'topic_desc',
          createdAt: '2018-09-09 12:12:12.618+07',
          updatedAt: '2018-09-09 12:12:12.618+07'
    },
    {
          id: 'topic2',
          name: 'topic_desc',
          createdAt: '2018-09-09 12:12:12.618+07',
          updatedAt: '2018-09-09 12:12:12.618+07'
    },
    {
          id: 'topic3',
          name: 'topic_desc',
          createdAt: '2018-09-09 12:12:12.618+07',
          updatedAt: '2018-09-09 12:12:12.618+07'
    },
    {
          id: 'topic4',
          name: 'topic_desc',
          createdAt: '2018-09-09 12:12:12.618+07',
          updatedAt: '2018-09-09 12:12:12.618+07'
    },
    {
          id: 'topic55',
          name: 'topic_desc',
          createdAt: '2018-09-09 12:12:12.618+07',
          updatedAt: '2018-09-09 12:12:12.618+07'
    },
  ])
}