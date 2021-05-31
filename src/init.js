import './db';
import './model/Video';
import './model/User';
import app from './server';

const PORT = 4000;

// ---- app.listen handler (app 실행했을 때 가장 처음에 실행되는 것)
const handleListening = () =>
  console.log(` ✅ Server listening on port http://localhost:${PORT}`);
// ----
app.listen(PORT, handleListening);
