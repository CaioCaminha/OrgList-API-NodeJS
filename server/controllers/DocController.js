const {Router} = require('express')
const DocService = require("../services/DocService");
const router = Router();

router.get('/docs', DocService.findAllDocs);
router.get('/docs:id', DocService.findOneDoc);
router.post('/docs', DocService.createDoc);
router.put('docs/:id', DocService.updateDoc);
router.delete('/docs:id', DocService.deleteDoc);

module.exports = router;