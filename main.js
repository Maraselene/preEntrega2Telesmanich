let nombre = prompt("Ingrese su nombre");
let sexo= prompt("ingrese su sexo(femenino o masculino)");
let hijos;
let edad;
// let genero1 = "femenino";alert("La nueva moratoria le compra a usted 26 años de aportes");

const clientes = [
    {nombre: "Marta",edad: 61,sexo:"femenino",hijos:2,},
    {nombre: "Carlos", edad: 67, sexo: "masculino",},
    {nombre: "Marcelo", edad: 65, sexo: "masculino",},
    {nombre: "Stella", edad: 64, sexo: "femenino",hijos:3},
  ];
for(const cliente of clientes){
    console.log(cliente.nombre);
    console.log(cliente.edad);
    console.log(cliente.sexo);
    console.log(cliente.hijos);
}

 console.log(clientes.length);

function sumaAportes(){
    if(sexo=="femenino"){
        alert("La moratoria le cubriria a usted 26 años de aportes");
        console.log("el sexo ingresado fue femenino");
        hijos= Number(prompt("¿Cuantos hijos tiene?"));
        switch(hijos){
            case 1:
            alert("Usted suma 1 año de aporte");
            break;
            case 2:
                alert("Usted suma 2 años de aportes");
                break;
            case 3:
                alert("Usted suma 3 años de aportes");
                break;
            case 4:
                alert("Usted suma 4 años de aportes");
                break;
            case 5:
                alert("Usted suma 5 año de aportes");
                break;
            default:
                alert("Usted suma "+hijos+" años de aportes");
        }
        edad = Number(prompt("Ingrese su edad"));
        console.log(edad);
        if(edad>=60){
            alert("Usted puede acceder a la nueva moratoria");
        }else{
            alert("No puede acceder a la nueva moratoria hasta que cumpla la edad indicada (60 años)");
        }
    }else if(sexo=="masculino"){
        alert("La moratoria le cubre a usted 30 años de aportes");
        console.log("el sexo ingresado fue masculino");
       edad = Number(prompt("Ingrese su edad"));
       console.log(edad);
       if(edad>=65){
        alert("Usted puede acceder a la nueva moratoria");
    }else{
        alert("No puede acceder a la nueva moratoria hasta que cumpla la edad indicada (65 años)");
    }
    }else{
        alert("sexo incorrecto");
        console.log("el sexo ingresado es invalido");
    }
}; 
sumaAportes();







