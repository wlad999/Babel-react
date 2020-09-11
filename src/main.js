//Для того чтобы "@babel/preset-env" знал куда надо добавлять полифилы
// import 'core-js'
//для "useBuiltIns": "entry" in(.babelrc)
//babel заменит строку выше (в build/main.js)на список необходимых полифилов


class App {

    run = async (name = "World") => {
        console.log(`Hello ${name}`)
        console.log([1, 2, [3, 4]].flat())
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


//если есть необходимость импортировать файл - то использовать стандаотный синтаксис
// и не будем его трансформировать
// "modules": false (.babelrc)


//(.babelrc)
// "corejs": 3,
// "useBuiltIns": "usage",
//рекомендованный способ(добавит только необходимые полифилы для работы)
//babel найдё те места в коде где успользуются новые функции языка
//и подключит только необходимые полифилы


//"useBuiltIns": "entry",(.babelrc)
//babel не будет анализировать и добавит ВСЕ полифилы необходимые для указанных браузеров