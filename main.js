var canvas = new fabric.Canvas('myCanvas');
superhero_width = 30;
superhero_height = 30;
superhero_x = 10;
superhero_y = 10;
var superhero = "";
var superhero_image = "";
function superheroUpdate(){
fabric.Image.fromUrl("player.png", function(Img) {
superhero = Img;
superhero.scaleToWidth(150);
superhero.scaleToHeight(140);
superhero.set({
top:superhero_y,
left:superhero_x;
});
canvas.add(superhero);  
});
}
function newSuperhero_image(get_image){
fabric.Image.fromUrl(get_image, function(Img) {
superhero_image = Img;
superhero_image.scaleToWidth(superhero_width);
superhero_image.scaleToHeight(superhero_height);
superhero_image.set({
top:superhero_y,
left:superhero_x
});
canvas.add(superhero_image);
});
}