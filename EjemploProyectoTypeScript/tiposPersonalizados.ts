type Heroe = {
    nombre:string, 
    edad:number, 
    poderes:string[], 
    getNombre():void, 
    hablar:() => string
}

let Juan : Heroe={
    nombre: "Hola",
    edad: 2, 
    poderes: ["Matar", "Volar"],
    getNombre(){
        console.log("hola");
    },
    hablar(){
        return "Hola";
    }

};
    