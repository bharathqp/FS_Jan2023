import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const Home = () => <h1>This is Home Page</h1>
const About = () => <h1>This is About Page</h1>
const Contact = () => <h1>This is Contact Page</h1>
const Login = () => <h1>This is Login Page</h1>
const Error = () => <h1>404 This page not found!!</h1>

const Layout = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/about'> About </Link>
                </li>
                <li>
                    <Link to='/contact'> Contact </Link>
                    </li>
                <li>
                    <Link to='/login'> Login </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>)};

const RouterTutorial = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="About" element={<About/>}/>
                        <Route path="Contact" element={<Contact/>}/>
                        <Route path="Login" element={<Login/>}/>
                        <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )};






export default RouterTutorial;