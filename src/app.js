
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        

        var origin = new Knight();
        origin.attr({
            x: size.width * 0.1,
            y: size.height *2 / 3
        });
        this.addChild(origin, 0);

        var shadow = new SpriteShadow();
        shadow.attr({
            x: size.width * 0.3,
            y: size.height / 3
        });
        this.addChild(shadow, 0);

        var outline = new SpriteOutline();
        outline.attr({
            x: size.width * 0.5,
            y: size.height * 2 / 3
        });
        this.addChild(outline, 0);

        var stripes = new SpriteStripes();
        stripes.attr({
            x: size.width * 0.7,
            y: size.height / 3
        });
        this.addChild(stripes, 0);

        var shine = new SpriteShine();
        shine.attr({
            x: size.width * 0.9,
            y: size.height * 2 / 3
        });
        this.addChild(shine, 0);

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

