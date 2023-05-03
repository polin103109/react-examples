export function authenticate({ email, password }) {
  if (
    ["aaa@gmail.com", "bbb@gmail.com"].includes(email) &&
    password === "1234"
  ) {
    return {
      message: "Login Successful",
    };
  }
  throw new Error("invalid credential");
}
