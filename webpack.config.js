const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js", // какой файл собираем
  output: {
    // куда поместим
    path: path.resolve(__dirname, "dist"), // путь
    filename: "main.js", // какое будет имя бандла
  },
};
