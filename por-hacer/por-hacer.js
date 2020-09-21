const fs = require('fs')
const { string } = require('yargs')

let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

    //console.log(listadoPorHacer)
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    cargarDB()
    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let idx = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    console.log(idx);
    if (idx >= 0) {
        listadoPorHacer[idx].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB()
    let elementos = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (elementos.length < listadoPorHacer.length) {
        listadoPorHacer = elementos
        guardarDB()
        return true
    } else {
        return false
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}