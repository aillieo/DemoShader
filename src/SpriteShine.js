/**
 * Created by aillieo on 16/10/28.
 */

var SpriteShine = cc.Node.extend({
    sprite:null,
    shader:null,
    dt:0,
    ctor:function () {

        this._super();



        if( 'opengl' in cc.sys.capabilities ) {


            this.shader = new cc.GLProgram("res/shine/shine.vsh", "res/shine/shine.fsh");
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);

            this.shader.link();
            this.shader.updateUniforms();
            this.shader.use();
            this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('u_threshold'), 1.75);
            this.shader.setUniformLocationWith3f(this.shader.getUniformLocationForName('u_outlineColor'), 255 / 255, 0 / 255, 0 / 255);

            this.sprite = new Knight();

            //this.sprite.runAction(cc.sequence(cc.rotateTo(1.0, 10), cc.rotateTo(1.0, -10)).repeatForever());

            if(cc.sys.isNative){
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.shader);
                glProgram_state.setUniformFloat("u_threshold", 1.75);
                glProgram_state.setUniformVec3("u_outlineColor", {x: 0/255, y: 0/255, z: 255/255});
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

        this.dt += delta;
        if(this.dt>3.14){this.dt-= 3.14;}
        if( 'opengl' in cc.sys.capabilities ) {
            if(cc.sys.isNative){
                this.sprite.getGLProgramState().setUniformFloat("u_radius", 0.003 * Math.abs(Math.sin(2 * this.dt)));
                //this.sprite.getGLProgramState().setUniformFloat("u_lightness", Math.abs(this.sprite.getRotation() / 500));

            }else{
                this.shader.use();
                this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('u_radius'), 0.003 * Math.abs(Math.sin(2 * this.dt)));
                this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('u_lightness'), Math.abs(Math.sin(2 * this.dt)));
                this.shader.updateUniforms();
            }
        }
    }

});



