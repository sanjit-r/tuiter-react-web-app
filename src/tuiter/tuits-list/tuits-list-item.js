import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="col 3">
                <img className="rounded-circle"
                     src={`${tuit.image}`}
                     width="50px" alt="who to follow"/>
            </div>
            <div className="col-9">
                <div className="row">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    {tuit.userName} <i className="fa fa-check"></i> {tuit.handle} . {tuit.time}
                </div>
                <div className="row">
                    <p>{tuit.tuit}</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <i className="fa fa-comment"></i> {tuit.replies}
                    </div>
                    <div className="col 4">
                        <i className="fa fa-retweet"></i> {tuit.retuits}
                    </div>
                    <div className="col 4">
                        <i className="fa fa-heart"></i> {tuit.likes}
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;