import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Post from "./component/Post/post.tsx";
import { Provider } from "react-redux";
import postStore from "./store/post/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "post",
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={postStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
