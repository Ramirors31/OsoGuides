
class Post{
    constructor (titulo, texto,postid){
        this.titulo = titulo;
        this.texto = texto;
        this.postid = postid;
    }
}

export const newPost = new Post();

console.log(Post);