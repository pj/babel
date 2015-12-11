export default function () {
    return {
        inherits: require("babel-plugin-syntax-monad-notation"),
        visitor: {
            MonadNotation(path) {
            },
            MonadExpression(path) {
            }
        }
    }
}
