const fs = require('fs');


const crearArchivo = async (base = 5, l, h = 10) => {
    try {
        let texto = '';
        console.clear();

        for (let i = 1; i <= h; i++){
            texto += `${i} * ${base} = ${i*base}\n`;
        }

        if (l == true) console.log(texto);
        fs.writeFile(`tablas/tabla-del-${base}-hasta-${h}.txt`, texto, (err)=> {
            if (err) throw err;
        });
        
        return `tabla del ${base} hasta ${h}.txt`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}
