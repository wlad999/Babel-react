class App {

    run = async (name = "World") => {
        console.log(`Hello ${name}`)
    }


}

const app = new App();
app.run()
    .then(() => console.log("DONE"))
    .catch(() => console.log("ERROR!"))


// собирает проект на ES5
//npx babel src --out-dir build

// - показывает какие броузеры потдерживает проект
//npx browserslist
