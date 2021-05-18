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

    static async findOneDoc(req, res){
        const { id } = req.params;
        const where = {where: {id: Number(id)}}
        try{
            const doc = await database.Doc.findOne(where)
            return res.status(200).json(doc);
        }catch(e){
            return res.status(500).json(e.message);
        }
    }

    //Post
    static async createDoc(req, res){
        const doc = req.body;
        try{
            const createdDoc = database.Doc.create(doc);
            return res.status(201).json(createdDoc);
        }catch(error){
            return res.status(400).json(error.message);
        }
    }

    static async updateDoc(req, res){
        const {id} = req.params;
        const doc = req.body;
        try{
            const docUpdated = await database.Doc.update(doc, {where: {id: Number(id)}})
            return res.status(200).json(docUpdated);
        }catch(e){
            return res.status(400).json(e.message);
        }
    }

}


module.exports = DocService;