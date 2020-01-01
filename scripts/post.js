class Post{
    constructor(
        titulo,
        etiquetas,
        temario,
        /*fecha,
        tiempoLectura,
        cuerpo*/){
            // autor

    this.titulo = titulo;
    this.etiquetas = etiquetas;
    this.temario = temario;
    /*this.fecha = fecha;
    this.tiempoLectura = tiempoLectura;
    this.cuerpo = cuerpo;*/
    }

    postWhrite(){
        document.write("titulo ${titulo}");
    }

}

var post1 = new Post("postTest","#test","testTemario");

document.write(post1.titulo);

