import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.css' // HASHING STYLES
import Header from './components/button/header/Header';
import Home from './pages/home/Home.jsx';
import Posts from './pages/posts/posts.jsx';

export default function App() {
  return (
      <Router>
        <div className={styles.App}>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}> 
            </Route>
            <Route path="/posts" element={<Posts />}>
            </Route>
        </Routes>
        </div>
    </Router>
  );
}
