const services  = require('../Models/serviceSchema')

exports.addservice = async(req,res)=>{
    try{
const {id,name,description,price,createdBy} = req.body
    const existing = await services.findOne({id})
    if(existing){
        res.status(404).json("service already exists")
    }
    else{
        const newService = new services({id,name,description,price,createdBy})
        await newService.save()
    }
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
    

}

exports.editService = async(req,res)=>{
    try{
        const {id} = req.params
        const {name,description,price,createdBy}=req.body
        const find = await services.updateOne(id,{name,description,price,createdBy})
        res.status(200).json(find)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:e.message})
    }
}

exports.deleteService = async(req,res)=>{
    try{
const {id}= req.params
    const deleteService = await deleteOne({id})
    res.status(200).json(deleteService)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:e.message})
    }
    
}

exports.allservices = async(req,res)=>{
    try{
        const serviceList = await services.find()
        res.status(200).json(serviceList)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:e.message})
    }
}