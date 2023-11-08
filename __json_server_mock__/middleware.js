module.exports = (req, res, next) => {
  //   const {
  //     method,
  //     body: { username, password },
  //     path,
  //   } = req;
  //   console.log("7 => middleware.js", req);
  //   if (method === "POST" && path === "/login") {
  //     if (username === "Jack" && password === "123123") {
  //       return res.status(200).json({
  //         user: {
  //           token: "asd",
  //         },
  //       });
  //     } else {
  //       return res.status(400).json({ message: "用户名或密码错误" });
  //     }
  //   }

  if (req.method === "POST" && req.path === "login") {
    if (req.body.username === "jack" && req.body.password === "123123") {
      return res.status(200).json({
        user: {
          token: "asd",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误" });
    }
  }
  next();
};
