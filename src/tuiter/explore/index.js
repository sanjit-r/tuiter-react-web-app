import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {Link} from "react-router-dom";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <Link href="#" className="nav-link active">For You</Link>
                </li>
                <li className="nav-item">
                    <Link href="#" className="nav-link">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link href="#" className="nav-link">News</Link>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg" className="w-100" alt="image"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;