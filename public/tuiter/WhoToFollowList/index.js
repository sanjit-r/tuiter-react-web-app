import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
               ${
                who.map(who => {
                return(WhoToFollowListItem(who));
                }).join('')
                }
        </ul>
           `);

}

export default WhoToFollowList;