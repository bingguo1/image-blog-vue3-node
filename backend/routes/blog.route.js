const express = require('express');
const router = express.Router();
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    // filename: (req, file, cb) => {
    //     cb(null, file.fieldname + '-' + Date.now())
    // }
});
var upload = multer({ storage: storage });

// model
let BlogModel = require('../models/blog.js');

router.route('/create-blog').post(upload.single('img'),(req, res, next) => {
    console.log("mime type:"+req.file.mimetype);
    console.log("original name:"+req.file.originalname);
    var obj = {
        title: req.body.title,
        blog: req.body.blog,
        author: req.body.author,
        tags: req.body.tags,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
            contentType: req.file.mimetype,
            name: req.file.originalname
        }
    }
    BlogModel.create(obj, (error, data) => {
	if (error) {
	    return next(error)
	} else {
	    res.send(" send :image blog save successfully");
            console.log("image blog create well!")
	}
    })
});

router.route('/list-blogs').get((req, res, next) => {
    console.log("a request for list-blogs");
    BlogModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
         console.log("find data successfully and sending them as json");
       res.json(data)
     }
   })
 })

router.route('/blog/:id').get((req, res, next) => {
   BlogModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
router.route('/update-blog/:id').put((req, res, next) => {
  BlogModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Blog successfully updated!')
    }
  })
})

// Delete
router.route('/delete-blog/:id').delete((req, res, next) => {
  BlogModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
