const {Router} = require('express')
const DocService = require("../services/DocService");
const router = Router();

router.get('/docs', DocService.findAllDocs);
router.post('/docs', DocService.createDoc);

module.exports = router;