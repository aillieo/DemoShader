/**
 * Created by aillieo on 16/10/22.
 */

var SpriteShadow = cc.Node.extend({
    sprite:null,
    shader:null,
    ctor:function () {

        this._super();



        if( 'opengl' in cc.sys.capabilities ) {


            this.shader = new cc.GLProgram("res/shadow/shadow.vsh", "res/shadow/shadow.fsh");
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);

            this.shader.link();
            this.shader.updateUniforms();
            this.shader.use();
            this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('u_threshold'), 1.75);
            this.shader.setUniformLocationWith3f(this.shader.getUniformLocationForName('u_outlineColor'), 0 / 255, 0 / 255, 0 / 255);

            this.sprite = new Knight();

            this.sprite.runAction(cc.sequence(cc.rotateBy(1.0, 10)).repeatForever());

            if(cc.sys.isNative){
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.shader);
                glProgram_state.setUniformFloat("u_threshold", 1.75);
                glProgram_state.setUniformVec3("u_outlineColor", {x: 0/255, y: 0/255, z: 0/255});
                this.sprite.setGLProgramState(glProgram_state);
            }else{
                this.sprite.shaderProgram = this.shader;
            }

            this.addChild(this.sprite);

            this.scheduleUpdate();
        }


        var bg = new cc.Sprite("res/BLANK.png");
        this.addChild(bg,-1);
        bg.setTextureRect(cc.rect(0,0,400,400));


        return true;
    },


    update : function (delta) {

        if( 'opengl' in cc.sys.capabilities ) {
            if(cc.sys.isNative){
                this.sprite.getGLProgramState().setUniformFloat("u_radius", 0.01);
                this.sprite.getGLProgramState().setUniformFloat("u_angel",  cc.degreesToRadians(-135 + this.sprite.getRotation()));
            }else{
                this.shader.use();
                this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('u_radius'), 0.01);
                this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('u_angel'),  cc.degreesToRadians(-135 + this.sprite.getRotation()));
                this.shader.updateUniforms();
            }
        }
    }

});



