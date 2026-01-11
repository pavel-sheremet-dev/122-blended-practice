interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const newUser: User = { name: "Mark", age: 1 };

users.push(newUser);
