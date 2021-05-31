export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });
export const postJoin = (req, res) => {
  console.log(req.body);
  return res.render('join', { pageTitle: 'Join' });
};

//
export const edit = (req, res) => res.send('edit');
export const remove = (req, res) => res.send('remove');
export const login = (req, res) => res.send('login');
export const logout = (req, res) => res.send('logout');
