const DocController = require('../controllers/DocController')

module.exports = app => {
    app.use(DocController);
}