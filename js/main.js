let cursoCoder= prompt("Ingrese en mayusculas que curso de la carrera de Programación esta realizando, si quiere salir ingrese ESC");

while(cursoCoder != "ESC"){
    switch (cursoCoder) {
        case "DESARROLLO WEB":
            alert("El curso de "+ cursoCoder +"comienza el 10 de agosto");
            break;
            case "JAVASCRIPT":
            alert("El curso de "+ cursoCoder +"comienza el 10 de Septiembre");
            break;
            case "REACT JS":
            alert("El curso de "+ cursoCoder +" comienza el 10 de Octubre");
            break;
            case "PROGRAMACION BACKEND":
            alert("El curso de "+ cursoCoder +"comienza el 10 de Noviembre");
            break;
    }
    cursoCoder = prompt("Ingrese en mayusculas que curso de la carrera de Programación esta realizando, si quiere salir ingrese ESC")
}