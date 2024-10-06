import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Climate from './pages/climate/Climate';
import History from './pages/history/History';
import About from './pages/about/About';

const App = () => {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/climate",
          element:<Climate/>
        },
        {
          path:"/history",
          element:<History/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
    }
  ])
  return (
    <MantineProvider>
      <RouterProvider  router={router}/>
    </MantineProvider>
  )
}

export default App