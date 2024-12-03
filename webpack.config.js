const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js", // какой файл собираем
  output: {
    // куда поместим
    path: path.resolve(__dirname, "dist"), // путь
    filename: "main.js", // какое будет имя бандла
  },
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
