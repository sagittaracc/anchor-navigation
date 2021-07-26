(function(){
    function navigation(url)
    {
        var url = url;

        return {
            anchor: function(anchor, callback) {
                if (url === window.location.pathname) {
                    if (anchor === window.location.hash) {
                        callback();
                    }
                }

                return this;
            }
        };
    }

    window.navigation = navigation;
})();
