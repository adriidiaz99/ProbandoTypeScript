let Manolo : /*No importa el orden*/{nombre:string, edad:number, poderes:string[], getNombre():void, hablar:() => string}={
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
