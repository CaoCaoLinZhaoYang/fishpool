module.exports = {
    resolve: {
        alias: {
            "@": require("path").resolve(__dirname, "src"),
            "a@": require("path").resolve(__dirname, "src/applications"),
            "m@": require("path").resolve(__dirname, "src/modules/public"),
            "s@": require("path").resolve(__dirname, "src/static/style"),
            "c@": require("path").resolve(__dirname, "src/components"),
            "module@": require("path").resolve(__dirname, "src/modules"),
        }
    }
};