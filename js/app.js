(function () {

    'use strict';

    // GLOBAL Variables
    let userUid = CONFIG.uid;
    let baseUrl = '';

    // Start Program
    getArtistsPosts();
    CONFIG.copy._updateHomepageCopy();
    CONFIG.copy._headerFooterComponents();

    // All Functions
    function getArtistsPosts() {
        if(CONFIG.baseUrl){
            baseUrl = CONFIG.baseUrl;

            $.get(baseUrl + '/getArtistsPosts?uid=' + userUid,function(data, status) {
                createPosts(data);
            });
        } else {
            console.log("No baseUrl defined");
        }
    }

    function createPosts(posts) {
        let postsHTML = '';
            
        for(let key in posts) {

            let post = posts[key];
            // console.log(post)


            let postImgUrl = post['imgUrls'][
                Object.keys(post['imgUrls'])[0]
            ];

            let postHTML = '<div class="portfolio all ' + post.category + '" data-cat="logo">' +
                '<a href="/portfolio?id=' + key + '" class="portfolio-wrapper">' +
                    '<img src="' + postImgUrl + '" alt="" />' +
                '</a>' +
            '</div>';


            postsHTML += postHTML;
        }

        $("#portfoliolist").html(postsHTML);

    }

}());