var express = require('express');
const app = require('../app');
var session;
var router = express.Router();

const Mydetails={
  email:"adilsha042@gmail.com",
  password:"Adil7350" 
}
let productitems =[{

  image:"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac/macos-monterey-connect-display-hero.png",
  cardstitles:"APPLE 2021 iMac with 4.5K Retina display ",
  discription: " (8 GB Unified/256 GB SSD/Mac OS Big Sur/24 Inch Screen/MGPC3HN/A)  (Silver) ",
  button:"Add to cart"

},
{
  image:"https://m.media-amazon.com/images/I/315vs3rLEZL.jpg",
  cardstitles:"APPLE iPhone 13 (Green, 256 GB) ",
  discription: "256 GB ROM ,15.49 cm(6.1 inch) Super Retina XDR Display ,12MP + 12MP Front Camera" ,
  button:"Add to cart"
  
},
{
  image:"https://m.media-amazon.com/images/I/31Wj0j4RXhL.jpg",
  cardstitles:"APPLE iPad (10th Gen) 128 GB ROM 10.9 inch (White)",
  discription: "128 GB ROM ,27.69 cm (10.9 inch) Full HD Dispalay ,12MP Primary Camera ",
  button:"Add to cart"
  
},
{
  image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-40-alum-starlight-nc-se_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171039000%2C1661754115495",
  cardstitles:"APPLE Watch SE - Starlight Sport Band   (Gold Strap)  ",
  discription: "Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone",
  button:"Add to cart"
  

},
{
  image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000",
  cardstitles:"Zoook Magic Pad",
  discription: "Combo/4 Device Connectivity/Dual Mode  Keyboard (Silver) ,",
  button:"Add to cart"
  
},
{
  image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000",
  cardstitles:"APPLE Airpods Pro with   (White, True Wireless)",
  discription: "Active Noise Cancellation for immersive sound ,  ",
  button:"Add to cart"
  

}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  session=req.session;
  if(session.user){
    res.redirect('/home')
  }else{
    res.render('index', { title:' login page'});
  }
 
});

router.post('/login', function (req, res) {

  // console.log(req.body)
  if (req.body.email == Mydetails.email && req.body.password == Mydetails.password) {
    session=req.session;
    req.session.user = req.body.email;
    res.redirect('/home') 
  } else if (req.body.email == "" && req.body.password == "") {
    res.render('index', { nullcheck: ' Username and password required !!!' })
  }
  else {
    res.render('index', { login: 'Invalid Username or password' })
   
  }
})


router.get('/home',(req,res)=>{
  session=req.session;
  if(session.user){
    res.render('home',{user: req.session.user,productitems})
  }else{
    res.redirect('/')
  }
})



router.post('/home',(req,res)=>{
  if(req.session.user){
    session=req.session;
    session.user=req.body.email;
    res.render('home',{user:req.session.user,productitems})
  }else{
    res.redirect('/')
  }
})



router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/')
})
module.exports = router;



