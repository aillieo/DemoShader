
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);


        var outline = new SpriteOutline();
        outline.attr({
            x: size.width / 4,
            y: size.height / 2
        });
        this.addChild(outline, 0);


        var shadow = new SpriteShadow();
        shadow.attr({
            x: size.width * 2 / 4,
            y: size.height / 2
        });
        this.addChild(shadow, 0);
        
        var stripes = new SpriteStripes();
        stripes.attr({
            x: size.width * 3 /4,
            y: size.height / 2
        });
        this.addChild(stripes, 0);


        return true;
    },


});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

