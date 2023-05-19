import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");

  //   Trong trường hợp không có token, người dùng sẽ được điều hướng đến trang "/login", và trang hiện tại (location) sẽ được truyền dưới dạng state để sau khi đăng nhập thành công, người dùng sẽ được chuyển hướng trở lại trang trước đó.
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
