interface NewUser {
  name: string;
  age: number;
}

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

// interface User extends NewUser {
//   isAdmin: boolean;
// }

function createUser({ name, age }: NewUser): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });

// type SomeFunction = (user: NewUser) => User;

// const someFunction: SomeFunction = (user) => ({
//   ...user,
//   isAdmin: false,
// });
