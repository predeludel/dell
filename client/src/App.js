import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Basket } from './pages/Basket';
import { Cabinet } from './pages/Cabinet';
import { Book } from './pages/Book';
import Compilation from './pages/Compilation';
import Container from 'react-bootstrap/Container';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Catalog } from './pages/Catalog';
const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path="/" element={<Home />}>
  //     <Route path="search" element={<Search />} />jd
  //     <Route path="basket" element={<Basket/>}/>
  //     <Route path="compilation" element={<Compilation />}/>
  //   </Route>
  // )
  [
  {
    path: "/",
    element:<Home /> ,

  },
  {
    path: "/search",
    element: <Search />,

  },
  {
    path: "/basket",
    element: <Basket />,

  },
  {
    path: "/catalog",
    element: <Catalog />,

  },
  {
    path: "/compilation",
    element: <Compilation />,

  },
  {
    path: "/cabinet",
    element: <Cabinet />,

  },
  {
    path: "/book/:id",
    element: <Book />,

  }
]
);

function App() {
  return <>
  <Container classNmae="w-auto">
  <NavBar />
    <RouterProvider router={router} />
    <Footer ></Footer>
  </Container>
    
  </>
  // return (
  //   <Router>
  //   <Routes>
  //     <Route path='/catalog' Element ={<Catalog/>}/>
  //     <Route path='/search' Element ={<Search/>}/>
  //     <Route path='/compilation' Element ={<Compilation/>}/>
  //     <Route path='/basket' Element ={<Basket/>}/>
  //     <Route exact path='/home' Element ={<Home/>}/>
  //   </Routes>
  // 
  // );
}

export default App;
