
exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  
    const { 
        name, 
        category, 
        quantity, 
        condition,
        description, 
        date_of_purchase, 
        purchase_price 
    } = req.body;
    console.log(name);
    const product = await Product.create({ 
        name, 
        category, 
        quantity, 
        condition,
        description, 
        date_of_purchase, 
        purchase_price 
    });
  
    sendToken(product, 201, res);
  });