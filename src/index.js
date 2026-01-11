import fs from "fs";

for (let i = 1; i < 21; i++) {
  fs.writeFileSync(`./src/task-${i}.ts`, ``);
}
console.log("Файли ts створені!");
