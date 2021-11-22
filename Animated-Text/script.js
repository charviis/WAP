var element = document.getElementById("animated_text");
var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Fusce consectetuer risus a nunc. Etiam quis quam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Donec iaculis gravida nulla. Nunc tincidunt ante vitae massa. Pellentesque arcu. Curabitur vitae diam non enim vestibulum interdum. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Fusce suscipit libero eget elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Nam sed tellus id magna elementum tincidunt. Integer tempor. Nulla non lectus sed nisl molestie malesuada. Vestibulum fermentum tortor id mi. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Pellentesque ipsum. Etiam egestas wisi a erat. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Aliquam ante.";
var pause = 20;
var i = 0;

function step() {
    element.innerHTML = text.substr(0, i);
    i++;
    if (i >= text.length + pause) {
        i = 0;
    }
}

setInterval(step, 70);
