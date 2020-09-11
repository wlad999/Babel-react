"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "run", async (name = "World") => {
      console.log(`Hello ${name}`);
    });
  }

}

const app = new App();
app.run().then(() => console.log("DONE")).catch(() => console.log("ERROR!")); // собирает проект на ES5
//npx babel src --out-dir build
// - показывает какие броузеры потдерживает проект
//npx browserslist