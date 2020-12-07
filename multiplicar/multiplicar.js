const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let data = '';


let listarTabla = (base, limite) =>{

    
    return new Promise((resolve,reject) =>{

        
        if( !Number(base) || !Number(limite) ){
                reject('El valor ingresado no es un entero')
        }

        for (let i = 1; i<= limite; i++){

            data+=(`${base} * ${i} = ${base * i}\n`);
        }
        resolve("El resultado es: \n"+ data);
    })
    
   
}

let crearArchivo = (base, limite) =>{
    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject("El valor ingresado no es un numero");
            return;
        }

        for (let i = 1; i<=limite; i++){
            data+=(`${base} * ${i} = ${base * i}\n`);
        }
        
        fs.writeFile(`tabla-${base}-al-${limite}.txt`, data, (err)=>{
            if(err)
                reject (err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
                
        })
        
        
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}
