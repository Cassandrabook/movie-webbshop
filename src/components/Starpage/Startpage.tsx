import { useNavigate } from "react-router-dom";
import { Product } from "../Product/Product";
import "./Startpage.scss"

export const Startpage = () => {
    const navigate = useNavigate();
    
    const toMovies = () => {
        navigate(`/products`);
    }

    return(<>
        <div className="main-img">
            <div className="startpage">
                <h1 className="startpage__title">Movie night!</h1>
                <h3 className="startpage__text">Find your favorite movie and buy it today!</h3>
                <button onClick={toMovies} className="startpage__button">See all movies</button>
            </div>
        </div>
    </>);
}