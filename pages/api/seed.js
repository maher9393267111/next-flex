// import nc from 'next-connect';
// import Product from '../../models/productModel';
// import db from '../../utils/db';
// import data from '../../utils/data';

// const handler = nc();

// export default handler.get(async (req, res) => {
//   await db.connect();
//   Product.deleteMany();
//   await Product.insertMany(data.products);
//   await db.disconnect();
//   res.send({ message: 'seeded successfully' });
// });

// export default handler;