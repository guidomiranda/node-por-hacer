const argv = require('./config/yargs').argv
const colors = require('colors')
const porHacer = require('./por-hacer/por-hacer')

//console.log(argv)

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion, argv.completado)
    case 'listar':
        console.log(argv.completado)
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log('========Por hacer============='.green)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
            console.log('=============================='.green)
        }
        break
    case 'actualizar':
        rs = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(rs)
        break
    case 'borrar':
        rs = porHacer.borrar(argv.descripcion)
        console.log(rs)
        break
    default:
        console.log('Opcion no valida');
}