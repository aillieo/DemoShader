/**
 * Created by aillieo on 16/10/27.
 */

var SpriteStripes = cc.Node.extend({
    sprite:null,
    shader:null,
    accum:0,
    ctor:function () {

        this._super();

        if( 'opengl' in cc.sys.capabilities ) {


            this.shader = new cc.GLProgram("res/stripes/stripes.vsh", "res/stripes/stripes.fsh");
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            
            this.shader.link();
            this.shader.updateUniforms();
            this.shader.use();
            
            this.sprite = new Knight();

            this.sprite.runAction(cc.sequence(cc.moveBy(1,cc.p(0,100)), cc.moveBy(2,cc.p(0,-200)) , cc.moveBy(1,cc.p(0,100))).repeatForever());
            
            if(cc.sys.isNative){
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.shader);
                this.sprite.setGLProgramState(glProgram_state);
            }else{
                this.sprite.shaderProgram = this.shader;
            }

            this.addChild(this.sprite);

            this.scheduleUpdate();
        }


        return true;
    },


    update : function (delta) {
    
        return;
    
/*        this.accum += delta;

        if(cc.sys.isNative){
            var letters = this.label.children[0];
            for(var i = 0; i< letters.getStringLength(); ++i){
                var sprite = letters.getLetter(i);
                sprite.y = Math.sin( this.accum * 2 + i/2.0) * 20;
                sprite.scaleY  = ( Math.sin( this.accum * 2 + i/2.0 + 0.707) );       
            }
        }else{
            var children = this.label.children;

            for( var i in children ) {
                var sprite = children[i];
                sprite.y = Math.sin( this.accum * 2 + i/2.0) * 20;

                // add fabs() to prevent negative scaling
                var scaleY = ( Math.sin( this.accum * 2 + i/2.0 + 0.707) );

                sprite.scaleY = scaleY;
            }
        }*/
    }

});





