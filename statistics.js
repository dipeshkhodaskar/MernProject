app.get('/api/statistics', async (req, res) => {
    const { month } = req.query;
    const query = { $expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] } };
  
    const totalSale = await Transaction.aggregate([
      { $match: { ...query, sold: true } },
      { $group: { _id: null, total: { $sum: '$price' } } }
    ]);
  
    const soldItems = await Transaction.countDocuments({ ...query, sold: true });
    const notSoldItems = await Transaction.countDocuments({ ...query, sold: false });
  
    res.json({ totalSale: totalSale[0]?.total || 0, soldItems, notSoldItems });
  });