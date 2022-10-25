import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fab fa-twitter"></i>
            </a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-glasses"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Explore</span>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-comment"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-person-booth"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa fa-plus"></i> <span
                className="d-sm-none d-md-none d-lg-none d-xl-block">More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;