const router = require ("express").Router();

const db = require("../db/db.json");

router.get("/notes", (req, res) => {
   res.status(200).send(db) 
}
)

router.post('/notes',(req,res)=>{

})

router.put('/notes',(req,res)=>{
    
})

router.delete('/notes', (req,res)=>{

})

module.exports = router