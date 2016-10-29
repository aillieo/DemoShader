/**
 * Created by aillieo on 16/10/29.
 */


var Knight = cc.Sprite.extend({
    ctor:function () {

        this._super();

/*
        var cache = cc.spriteFrameCache;
        cache.addSpriteFrames("res/knight.plist","res/knight.png");
        //setTexture("BlueKnight_entity_000_basic attack 1_002.png");

        var frames = [];
        for(var i = 1; i <= 14; i++)
        {
            var frame = cache.getSpriteFrame("BlueKnight_entity_000_basic attack 1_00" + i + ".png");
            frames.add(frame);
        }
        var animation = cc.Animation(frames,0.1);
        runAction(cc.animate(animation).repeatForever());


        */

        var cache = cc.spriteFrameCache;
        cache.addSpriteFrames("res/knight.plist","res/knight.png");

        var animation = new cc.Animation();
        for (var i = 0; i <= 7; i++) {
            var frameName = "BlueKnight_entity_000_walk_0"  + ((i < 10) ? ("0" + i) : i) + ".png";
            //var frameName = "BlueKnight_entity_000_run_0"  + ((i < 10) ? ("0" + i) : i) + ".png";
            var frame = cache.getSpriteFrame(frameName);
            animation.addSpriteFrame(frame);
        }
        animation.setDelayPerUnit(0.1);
        animation.setRestoreOriginalFrame(true);

        var action = cc.animate(animation);
        this.runAction(action.repeatForever());

        return true;
    }

});

