const database = require('../models')

class DocService{

    //Get
    static async findAllDocs(req, res){
        try{
            const docs = await database.Doc.findAll();
            return res.status(200).json(docs);
        }catch(error){
            return res.status(400).json(error.message);
        }
    }

    //Post
    static async createDoc(req, res){
        const doc = req.body;
        try{
            const createdDoc = database.Doc.create(doc);
            return res.status(201).json(createdDoc);
        }catch(error){
            res.status(400).json(error.message);
        }
    }

}


module.exports = DocService;