module.exports = (app) => {
    app.dataSources.mysql.automigrate('blog', (err) => {
      if (err) throw err;
  
      app.models.blog.create([{
        name: 'test1',
        author: 'mike',
        date: Date()
      }, {
        name: 'test2',
        author: 'mike',
        date: Date()
      }, {
        name: 'test3',
        author: 'mike',
        date: Date()
      }, ], (err, blog) => {
        if (err) throw err;
        console.log('Models created: \n', blog);
      });
    });
};