// const express = require('express')
// const router = express.Router();
// const mongoose = require('mongoose');

// router.post('/FoodData', async(req, res) => {
//     try {
//                 let fetch_data = await mongoose.connection.db.collection("Food_items");
//                 fetch_data.find({}).toArray(function(err,data){
//                     if(err) console.log('connection error',err);
//                     else{
//                         console.log(data);
//                         global.Food_items = data
//                         console.log(   global.Food_items );
//                         console.log(data );
//                         // res.send([global.Food_items])

//                         res.send(result)


//                     }
//                 }
                
                
                
//                 )



//     } catch (error) {

// console.error(error);
//         res.send('server error')




//     }
// })

// module.exports = router;

const DisplayFoodItemsController = require('../Controller/DisplayFoodData')



const express = require('express')
const router = express.Router();

router.post('/addFoodData',DisplayFoodItemsController.addFoodItems);
router.get('/FoodData',DisplayFoodItemsController.DisplayFOod);


module.exports = router;