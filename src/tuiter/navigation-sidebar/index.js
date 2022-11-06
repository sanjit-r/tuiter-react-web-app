import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link className="list-group-item" href='#'>
                <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-glasses"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Explore</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="#">
                <i className="fa fa-bell"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Notifications</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="#">
                <i className="fa fa-comment"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Messages</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="#">
                <i className="fa fa-bookmark"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Bookmarks</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="#">
                <i className="fa fa-list"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Lists</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="#">
                <i className="fa fa-person-booth"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Profile</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'more'?'active':''}`} href="#">
                <i className="fa fa-plus"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;