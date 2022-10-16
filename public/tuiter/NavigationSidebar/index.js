const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a href="public/tuiter/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i> <span class="d-sm-none d-md-none d-lg-none d-xl-block">Home</span>
     </a>
     <a href="public/tuiter/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-glasses"></i> <span class="d-sm-none d-md-none d-lg-none d-xl-block">Explore</span>
     </a>
     <a href="public/tuiter/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-comment"></i> <span class="d-sm-none d-md-none d-lg-none d-xl-block">Messages</span>
     </a>
     <a href="public/tuiter/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i> <span class="d-sm-none d-md-none d-lg-none d-xl-block">Bookmarks</span>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;