'use strict'
const persona = require('../models/persona')

function getPersons (req, res){
    persona.find({}).exec((error, persons)=>{
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
                res.status(500).send({message: 'Stored error'})
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

module.exports = {
    addPerson,
    getPersons
}