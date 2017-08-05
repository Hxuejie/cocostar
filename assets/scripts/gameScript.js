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
        xMaxSpeed:0,
        incrementRate:0,
        reboundDistance:0,
        star: {
            default : null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        this.xSpeed = 0;
        this.rate = 0;
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.xSpeed = 0 - self.xMaxSpeed * self.rate;
                        break;
                    case cc.KEY.d:
                        self.xSpeed = self.xMaxSpeed * self.rate;
                        break;
                }
                if(self.rate < 1.0){
                    self.rate += self.incrementRate;
                }
            },
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.xSpeed = 0;
                        break;
                    case cc.KEY.d:
                        self.xSpeed = 0;
                        break;
                }
                self.rate = 0;
            }
        }, this.node);
        
        var s = cc.instantiate(this.star);
        cc.log(this.node.getParent().name);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var size = cc.director.getVisibleSize();
        this.node.x += this.xSpeed;
        var p = this.node.convertToWorldSpace(cc.p(0,0));
        if(p.x <= 0){
            this.node.x += this.reboundDistance * this.rate;
            this.rate = 0;
            this.xSpeed = 0;
        }else if(p.x + this.node.width >= size.width){
            this.node.x -= this.reboundDistance * this.rate;
            this.rate = 0;
            this.xSpeed = 0;
        }
    },
});
