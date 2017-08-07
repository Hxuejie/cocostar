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
        sky:{
            default:null,
            type:cc.Node
        },
        
        player:{
            default:null,
            type:cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function () {
        
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var stars = this.sky.getChildren();
        var score = 10;
        stars.forEach(function(val,i){
           
        });
        this.node.setString("Score: " + score);
    },
});
