import User from '../model/User';

export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });
export const postJoin = async (req, res) => {
  const { email, name, location, password, username } = req.body;
  await User.create({
    email,
    name,
    location,
    password,
    username,
  });
  return res.redirect('/login');
};
//
export const login = (req, res) => res.send('login');
//
export const edit = (req, res) => res.send('edit');
export const remove = (req, res) => res.send('remove');
export const logout = (req, res) => res.send('logout');
