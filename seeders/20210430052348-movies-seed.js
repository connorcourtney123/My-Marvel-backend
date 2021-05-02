'use strict';
const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await models.movie.bulkCreate([
      { name: 'Iron Man', image: 'https://alternativemovieposters.com/wp-content/uploads/2018/03/manev_ironman.jpg'},
      { name: 'The Incredible Hulk', image: 'https://images-na.ssl-images-amazon.com/images/I/61ikONHVOAL._AC_SY741_.jpg'},
      { name: 'Iron Man 2', image:'https://img.artpal.com/35431/12-14-7-18-1-11-43m.jpg'},
      { name: 'Thor', image:'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY1200_CR89,0,630,1200_AL_.jpg'},
      { name: 'Captain America: The First Avenger', image:'https://i5.walmartimages.com/asr/0e789611-6529-4ec0-9a82-7e1e61af82ce_1.cd764e8f78c1ee20878137d2e4955db4.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'},
      { name: 'Marvel\'s The Avengers', image:'https://www.radtkesports.com/wp-content/uploads/1636_300_sleeavengers2sidedposter_1.png'},
      { name: 'Iron Man 3', image:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg'},
      { name: 'Thor: The Dark World', image:'https://images-na.ssl-images-amazon.com/images/I/51-pUeX1IoL._AC_.jpg'},
      { name: 'Captain America: The Winter Soldier', image:'https://images-na.ssl-images-amazon.com/images/I/91OxromzoSL._AC_SL1500_.jpg'},
      { name: 'Guardians of the Galaxy', image:'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_.jpg'},
      { name: 'Avengers: Age of Ultron', image:'https://cultureposters.com/wp-content/uploads/2019/04/avengers-2.jpg'},
      { name: 'Ant-Man', image:'https://alternativemovieposters.com/wp-content/uploads/2019/05/marko_antman.jpg'},
      { name: 'Captain America: Civil War', image:'http://prodimage.images-bn.com/pimages/9781302486235_p0_v1_s1200x630.jpg'},
      { name: 'Doctor Strange', image:'https://cdn.shopify.com/s/files/1/0969/9128/products/Movie_Poster_Fan-Art_-_Doctor_Strange_-_Tallenge_Hollywood_Superhero_Poster_Collection_c7344bbb-8bad-4ae0-a214-d2ddb2e01890.jpg?v=1557470731'},
      { name: 'Guardians of the Galaxy Vol. 2', image:'https://images-na.ssl-images-amazon.com/images/I/A11Agdd1EQL._AC_SL1500_.jpg'},
      { name: 'Spider-Man: Homecoming', image:'https://images-na.ssl-images-amazon.com/images/I/A1CcbJfKqJL.jpg'},
      { name: 'Thor: Ragnarok', image:'https://images-na.ssl-images-amazon.com/images/I/A1HBBNzBdxL._AC_SL1500_.jpg'},
      { name: 'Black-Panther', image:'https://i.annihil.us/u/prod/marvel/i/mg/9/90/5a7b6ca68f704/portrait_uncanny.jpg'},
      { name: 'Avengers: Infinity War', image:'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg'},
      { name: 'Ant-Man and the Wasp', image:'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'},
      { name: 'Captain Marvel', image:'https://images-na.ssl-images-amazon.com/images/I/71K3S%2BTk4OL._AC_SY679_.jpg'},
      { name: 'Avengers: Endgame', image:'https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp'},
      { name: 'Spider-Man: Far From Home', image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/674b36f0-7771-4188-b382-ade2d495544a/dd8h6td-ea943be7-b2be-4fbd-bacc-e80f3642094f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc0YjM2ZjAtNzc3MS00MTg4LWIzODItYWRlMmQ0OTU1NDRhXC9kZDhoNnRkLWVhOTQzYmU3LWIyYmUtNGZiZC1iYWNjLWU4MGYzNjQyMDk0Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GuV5su6dIOsdlN2iUsxIu-djuB2MU3VX7VfJjGVyFQc'}
    ])




  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
