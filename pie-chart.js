app.get('/api/pie-chart', async (req, res) => {
    const { month } = req.query;
    const query = { $expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] } };
  
    const categories = await Transaction.aggregate([
      { $match: query },
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
  
    res.json(categories);
  });