import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/witube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const handleOpen = () => console.log(' ✅ Connected to DB');
const db = mongoose.connection;

// <-- on은 지속적으로 상태를 확인하고, once는 연결될 때 최초 1회만 상태를 확인한다
db.on('error', (error) => {
  console.log('DB error', error);
});
db.once('open', handleOpen);
