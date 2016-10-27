var res = {
    HelloWorld_png : "res/HelloWorld.png",
    outline_png : "res/outline/knight.png",
    outline_vsh : "res/outline/outline.vsh",
    outline_fsh : "res/outline/outline.fsh",
    shadow_vsh : "res/shadow/shadow.vsh",
    shadow_fsh : "res/shadow/shadow.fsh",
    stripes_vsh : "res/stripes/stripes.vsh",
    stripes_fsh : "res/stripes/stripes.fsh"

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
