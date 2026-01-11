const users: string[] = ["Mark", "Jacob", "Alice"];

function toUserObjects2(users: string[]) {
  const modifiedUsers = users.map((user, index) => {
    return {
      id: index + 1,
      name: user,
    };
  });
  return modifiedUsers;
}

// function toUserObjects(users: string[]) {
//   const newArr: { id: number; name: string }[] = [];
//   users.forEach(function (user, index) {
//     newArr.push({ id: index + 1, name: user });
//   });
//   return newArr;
// }

toUserObjects2(users);
