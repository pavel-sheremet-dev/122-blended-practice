interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

function createContainer<T>(items: T[]): Container<T> {
  return {
    items: [...items],
    addItem(item) {
      this.items.push(item);
    },
    getItem(index) {
      return this.items[index];
    },
  };
}

interface User {
  id: string;
  name: string;
}

const numberContainer = createContainer<number>([1, 2, 3, 4, 5]);
const stringContainer = createContainer<string>(["test", "Bob", "Pavlos"]);
const objectContainer = createContainer<User>([{ id: "1", name: "Pavlos" }]);

function getLastElement<T>(items: T[]): T {
  return items[items.length - 1];
}

getLastElement<number>(numberContainer.items);
getLastElement<string>(stringContainer.items);
getLastElement<User>(objectContainer.items);
