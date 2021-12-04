import React from "react";
import "./Home.css";
import Button from '../../components/button/button/Button';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <p>Navegar hacia los posts</p>
            <Link to="/posts">
                <Button></Button>
            </Link>
        </div>
    )
}

export default Home
