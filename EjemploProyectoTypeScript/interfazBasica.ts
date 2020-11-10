

    interface XMen{
        nombre:string,
        poder:String
    }

    function mandarAlCuartel (xmen : XMen){
        console.log("Mandando al cuartel a" +xmen.nombre);
    }

    let wolverine : XMen = {
        nombre : "wolverine",
        poder : "Regeneración"
    }

    mandarAlCuartel(wolverine);