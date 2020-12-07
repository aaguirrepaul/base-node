const argv = require('./config/yargs').argv;


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':

            listarTabla(argv.base, argv.limite)
            .then(response => console.log(response))
            .catch(e =>console.log(e));
            break;
            
            
        
        case 'crear':
            
            crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log(`Archivo creado ${archivo}`))
                .catch(e => console.log(e));
        
        break;

        default: 
        console.log("Comando no reocnocido");
        break;
        
}


//console.log(argv.base);



//let parametro = argv[2];
//let base = parametro.split('=')[1];
