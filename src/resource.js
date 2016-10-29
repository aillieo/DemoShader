var res = {
    BLANK_png : "res/BLANK.png",
    knight_png : "res/knight.png",
    knight_plist : "res/knight.plist",
    outline_vsh : "res/outline/outline.vsh",
    outline_fsh : "res/outline/outline.fsh",
    shadow_vsh : "res/shadow/shadow.vsh",
    shadow_fsh : "res/shadow/shadow.fsh",
    stripes_vsh : "res/stripes/stripes.vsh",
    stripes_fsh : "res/stripes/stripes.fsh",
    shine_vsh : "res/shine/shine.vsh",
    shine_fsh : "res/shine/shine.fsh"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
