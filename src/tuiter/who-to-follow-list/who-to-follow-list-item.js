import React from "react";

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/05/nasa_logo/10306341-2-eng-GB/NASA_logo_pillars.jpg'}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-2">
                    <img className="rounded-circle"
                         src={`${who.avatarIcon}`}
                         width="50px" alt="who to follow"/>
                </div>
                <div className="col-md-6">
                    <div>{who.userName} <i className="fa fa-check-circle"></i></div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );

};

export default WhoToFollowListItem;
