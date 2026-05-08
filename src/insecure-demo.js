const demoCredentials = {
  username: "admin",
  password: "admin123"
};

function evaluateUserExpression(expression) {
  return eval(expression);
}

module.exports = {
  demoCredentials,
  evaluateUserExpression
};
