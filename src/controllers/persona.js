'use strict'
const persona = require('../models/persona')

function getPersons (req, res){
    //with sort by name desc
    persona.find({}).sort({'name':-1}).exec((error, persons)=>{
    // persona.find({}).exec((error, persons)=>{
        if(error){
            res.status(500).send({message:'Internal Server Error'})
        }
        else{
            if(persons){
                res.status(200).send(persons)
            }
            else{
                res.status(404).send({message:"There aren't registered people"})
            }
        }
    })
}

function addPerson (req, res) {
    //Creating new model
    const person = new persona()
    let params = req.query
    // console.log(params)
    if(params.name){
        person.dni = params.dni
        person.name= params.name
        person.lastName= params.lastName
        person.age= params.age

        person.save((error, personStored) =>{
            if(error){
                res.status(500).send({message: 'Server stored error'})
            }
            else{
                if(personStored) {
                    res.status(200).send(personStored)
                }
                else{
                    res.status(200).send({message: "Document hasn't been saved"})
                }
            }
        })
    }
    else{
        res.status(200).send({message: "A name is required"})
    }

}

function getOnePerson (req, res){
    let personId = req.params.id
    persona.findById(personId).exec((error, personaObj)=>{
        if(error){
            res.status(500).send({message: 'Sever search error'})
        }
        else{
            if(personaObj) {
                res.status(200).send(personaObj)
            }
            else{
                res.status(404).send({message: "Person doesn't exist"})
            }
        }
    })
}

function updatePerson (req, res){
    persona.findOneAndUpdate({dni: req.body.dni}, req.body, {new:true}, (error, personaUpdated)=>{
        if(error){
            res.status(500).send({message: 'Server updating error'})
        }
        else{
            if(personaUpdated) {
                res.status(200).send(personaUpdated)
            }
            else{
                res.status(404).send({message: "Person doesn't exist"})
            }
        }
    })
}

function deletePerson (req, res){
    let personId = req.params.id
    persona.findByIdAndRemove(personId, (error, personaRemoved)=>{
        if(error){
            res.status(500).send({message: 'Server delete error'})
        }
        else{
            if(personaRemoved) {
                res.status(200).send({message:'Person was removed'})
            }
            else{
                res.status(404).send({message: "Person doesn't exist"})
            }
        }
    })
}

module.exports = {
    addPerson,
    getPersons,
    getOnePerson,
    updatePerson,
    deletePerson
}