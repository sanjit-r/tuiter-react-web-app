/* eslint-env jquery */

const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item">
             <div class="row">
                 <div class="col"><img class="rounded-circle"
                                           src=${who.avatarIcon}
                                           width="50px"></div></div>
             <div class="col">
                     <div class="row">${who.userName} <i className="fa fa-check-circle"></i></div>
                     <div class="row">${who.userHandle}</div>
             </div>
                 <div class="col">
                     <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
         </li>

   `);
}

export default WhoToFollowListItem;