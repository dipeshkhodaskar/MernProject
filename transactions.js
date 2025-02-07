app.get('/api/transactions', async (req, res) => {
    const { month, search, page = 1, perPage = 10 } = req.query;
    const query = {};
  
    if (month) {
      query.$expr = { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] };
    }
  
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { price: { $regex: search, $options: 'i' } }
      ];
    }
  
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);
  
    res.json(transactions);
  });