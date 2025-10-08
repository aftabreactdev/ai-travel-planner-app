<<<<<<< HEAD
module.exports = {
  presets: ['module:@react-native/babel-preset'],
=======
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
>>>>>>> d77de657ae0fc65de66386d52115b483528f8bdb
};
