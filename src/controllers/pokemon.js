const pool = require('../database');

const controller = {};
 
controller.list = async(req,res)=>{
    await pool.query('SELECT * FROM pokemons', (err, infoPoke)=>{
        if(err){
            console.log(err)
        }
        
        res.render('index', {
            dataPoke: infoPoke
        })
    })
}
controller.save = async(req,res)=>{
    const data = req.body;
    console.log(data)
    await pool.query('INSERT INTO pokemons SET ?', data , (error, pokeAdd)=>{
        if(error){
            console.log(error)
        }
        console.log(pokeAdd)
        res.redirect('/')
        })
    }
controller.delete =async (req,res)=>{
    const {id} = req.params;
    await pool.query ('DELETE FROM pokemons WHERE id_pokemon = ?', id, (error, pokeDelete)=>{
        console.log(pokeDelete)
        res.redirect('/')
    })
}
controller.edit = async (req,res)=>{
    const {id} = req.params;
    await pool.query ('SELECT * FROM pokemons WHERE id_pokemon = ?', [id], (error, detailsPoke)=>{
        if(error){
            console.log(error)
        }
        console.log(detailsPoke)
        res.render('edit',{
            dataPoke : detailsPoke[0]
        })  
    })
}
controller.update = async(req, res) => {
    const { id } = req.params;
    const newPoke = req.body;

    await pool.query('UPDATE pokemons SET ? WHERE id_pokemon = ?', [newPoke, id] ,(err, detailsPoke) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    });
};
module.exports = controller;