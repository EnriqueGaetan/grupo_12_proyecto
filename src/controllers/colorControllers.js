const { Color } = require(__dirname + '/../database/models'); // corregir, no pude entrar a la carpeta models

module.exports = {
    getAll: async (req, res) => {

        try {
            const colores = await Color.findAll();

            console.log(colores);
        } catch (error) {
            console.log(error);
        }

        res.send('Estas viendo todos los colores!');
    }
}


