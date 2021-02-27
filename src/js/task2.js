/* TASK 2 */
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user => {
    return new Promise(resolve => {
      const updatedUser =
        user.name === userName ? { ...user, active: !user.active } : user;
      resolve(updatedUser);
    });
  });
  return Promise.all(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
