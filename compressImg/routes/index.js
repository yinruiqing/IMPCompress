var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/upload',function(req, res, next) {
    res.render('uploadForm', { title: 'Upload imgs' });
});

router.post('/upload',function(req, res, next) {
    console.log('access the post donne');
   // console.log(req);
    //console.log(typeof(req.body.images) )
    //console.log(req.body);
    //console.log(req.body['images[]'])
    imgs = req.body['images[]'];
   // res.send(imgs);
    //console.log(imgs[1]);
    //console.log(imgs.length);

    //filename = 'uploads/'+ (2+1) + '.jpg';
    //console.log(filename);
    //console.log(typeof(imgs));
    //console.log(imgs.splice())
    //console.log(imgs[0].splice(",")[1]);


    if(imgs.length>100){
        res.send(imgs.split(",")[1]);
        filename = 1 + '.jpg';
        var buf = new Buffer((imgs.split(','))[1], 'base64')
        //console.log(filename);
        fs.writeFile(filename, buf, function (err) {
            if (err)
                return console.log(err);
            console.log('save the jpg successful');
        });
    }else{
        for(var i = 0; i < imgs.length; i++){
            filename = (i+1) + '.jpg';
            var buf = new Buffer((imgs[i].split(','))[1], 'base64')
            //console.log(filename);
            fs.writeFile(filename, buf, function (err) {
                if (err)
                    return console.log(err);
                console.log('save the jpg successful');
            });

        }
    }


   // res.send(req.body['images[]']);
    //res.json(req.body);

});

router.get('/test',function(req, res, next) {
    res.render('test', { title: 'test' });
});

router.post('/test',function(req, res, next) {
    console.log('access the post donne');
    // console.log(req);
    console.log(typeof(req.body) )
   // console.log(req.body.images);

    res.send('OK');

});

module.exports = router;
