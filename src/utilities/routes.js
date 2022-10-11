import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const loadQuizData = () =>
  fetch("https://openapi.programming-hero.com/api/quiz");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: loadQuizData,
        element: <Home />,
      },
      {
        path: "/home",
        loader: loadQuizData,
        element: <Home />,
      },
      {
        path: "/topics/:topicsId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicsId}`
          ),
        element: <Topics />,
      },
      {
        path: "/statistics",
        loader: loadQuizData,
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
