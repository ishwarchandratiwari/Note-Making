
const { Router } = require('express');
const Note = require('../model/note.js');

const router = Router();


router.post('/add', (req, res) => {
    console.log('data', req.body);
   

    const { title, content,tags,selectedOption,url} = req.body;

    const note = new Note({ title, content,tags,selectedOption,url});
    console.log( 'han', note);
    note.save()
        .then(() => res.json(`Note Added: ${note.title}`))
        .catch(e => {
          console.log(e);
          res.json('Not saved')})
});


router.get('/get', (req, res) => {
    Note.find()
    .then((data)=>{console.log(data)
        res.json(data)})
        .catch(e=>res.json('not getting'))

});


router.delete('/:id',(req, res) => {
    Note.findByIdAndDelete(req.params.id)
      .then(() => res.json('Note deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/:id',(req, res) => {
    console.log("coing")
    Note.findById(req.params.id)
      .then(pro => {
        console.log(pro);
        pro.title = req.body.title;
        pro.content = req.body.content;
        pro.tags = req.body.tags;
        pro.url = req.body.url;

        pro.selectedOption = req.body.selectedOption;



  
        pro.save()
          .then(() => res.json('Note updated!'))
          .catch(err => {
            console.log(err);
            res.status(400).json('Error: ' + err)});
      })
      .catch(err => {res.status(400).json('Error: ' + err)});
  });

module.exports = router;
