const Food_items = require('../models/Food_items');


exports.addFoodItems =  async(req , res)=>{

    let food = new Food_items(req.body);

    console.log('req product data------------',food);
    let result = await food.save();
    res.send(result)

}

exports.DisplayFOod = async (req,res)=>{
    
    let DisplayFOodItems = await Food_items.find({});
   console.log('display data  ',DisplayFOodItems);
    if (DisplayFOodItems.length > 0) {
        res.send(DisplayFOodItems)
    } else {
        res.send({ result: 'FOodItems not found' })
}
}


