const production = process.env.NODE_ENV === "production";
const path = require("path");

const distPath = path.resolve(__dirname, "./build");

let config = {
	mode: "development",
	devtool: "source-map",
	entry: ["./src/main.ts"],
	output: {
		path: distPath,
		filename: "pixi-keyboard.js",
		library: "keyboard"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	externals: [{
		"pixi.js": "PIXI"
	}],
	mode: production ? "production" : "development",
};

module.exports = config;