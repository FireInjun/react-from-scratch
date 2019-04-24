module.exports = {
  env: {
    "es6": true,
    "browser": true,
    "node": true
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:jest/recommended",
    "jest-enzyme"
  ],
  parser: "babel-eslint",
  plugins: [
    "prettier",
    "babel",
    "import",
    "jsx-a11y",
    "react"
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": 0,
    "no-unused-vars": 0
  }
}