
 class User {
    constructor (email, phone,mode, namep, birthday,gender,carrera, descripcion){
        this.phone = phone;
        this.email = email;
        this.namep = namep;
        this.birthday = birthday;
        this.gender = gender;
        this.mode = mode;
        this.carrera = carrera;
        this.descripcion = descripcion;
    }
}
//EXPORTAMOS MODULO PARA CREAR USUARIOS
export const newUser = new User();

console.log(User);
