import { pool } from "../db.js";



export const getPaises = async (req, res) => {
      try {
            const [rows] = await pool.query('SELECT * from paises');
            res.json(rows);
      } catch (error) {
            return res.status(500).json({
                  message: 'Algo salio mal'
            })
      }
};


export const getPais = async (req, res) => {

      try {
            const [rows] = await pool.query('SELECT * FROM paises WHERE id = ?', [req.params.id]);
            if (rows.length <= 0) return res.status(404).json({ message: 'Pais no encontrado' })
            res.json(rows[0]);

      } catch (error) {
           return res.statu(500).json({
                  message: 'Algo salio mal'
           });
      }
}

export const addPais = async (req, res) => {
     try {
      const { pais, capital, poblacion, region, bandera } = req.body;
      await pool.query('INSERT INTO paises (pais,capital,poblacion,region,bandera) values (?,?,?,?,?)',
            [pais, capital, poblacion, region, bandera]);
     } catch (error) {
         return res.status(500).json({
            message: 'Algo salio mal'
         })
     }
}


export const deletePais = async (req, res) => {

      try {
            const [result] = await pool.query('DELETE * from paises WHERE id = ?', [req.params.id]);
            if (result.affectedRows <= 0) return res.status(404).json({ message: "Pais no encontrado" });
            res.sendStatus(204);
      } catch (error) {
             return   res.status(500).json({
                  message: 'Algo salio mal'
               })
      }

};


export const updatePais = async (req, res) => {

    try {
      const { id } = req.params;
      const { pais, capital, poblacion, region, bandera } = req.body;
      const [result] = await pool.query('UPDATE paises SET pais = IFNULL(?,pais) , capital = IFNULL(?,capital), poblacion = IFNULL(?,poblacion) , region = IFNULL(?,region) , bandera =IFNULL(?,bandera) WHERE id = ?'
            , [pais, capital, poblacion, region, bandera, id]);

      if (result.affectedRows === 0) return res.status(404).json({
            message: 'employee not found'
      });

      const [rows] = await pool.query('SELECT * FROM paises WHERE id = ?', [id]);

      res.json(rows[0]);
    } catch (error) {
           return res.status(500).json({
              message: 'Algo salio mal'
           })
    }

};

