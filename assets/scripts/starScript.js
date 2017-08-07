cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        star: {
            default : null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        this.stars = [];
        this.schedule(function(){
            var star = cc.instantiate(self.star);
            this.stars.push(star);
            star.setPosition(self.randPoint());
            star.time = Date.now();
            self.node.addChild(star);
        },3, 10, 0);
        
    },
    
    randPoint: function(){
        var size = this.node.getContentSize();
        var x = cc.randomMinus1To1()*size.width/2;
        var y = cc.randomMinus1To1()*size.height/2;
        return cc.p(x,y);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var now = Date.now();
        var stars = [];
        this.stars.forEach(function(s,i){
            if(now - s.time < 2000){
                stars.push(s);
            }else {
                cc.log("remove star");
            }
        });
        this.stars = stars;
    },
});
