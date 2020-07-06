    var fecInic, fecReIni,fecReFin,fecFin //Fechas y horarios de control, fecInic; fecFin: Inicio y fin de la actividad, fecReIni; fecReFin: Inicio y fin de reactivo
    var i = 0; // pregunta actual
    var correctos = [0,0,0,0];
    var incorrectos = [0,0,0,0];
    var resueltos = []; // Arreglo con las resouestas dadas a los reactivos durante la sesión

class Reactivo {
    constructor(pregunta, respuesta, eje, contenido, fecha, tiempo, resultado) {
        this.preg = pregunta;
        this.resp = respuesta;
        this.eje = eje;
        this.cont = contenido;
        this.fecha = fecha;
        this.tiempo = tiempo;
        this.res = resultado;
    }
}
    
    function actReactivo(){
        document.getElementById('tit').innerHTML= "Reactivo: # " + i + "  " + reacts[i].preg;
        document.getElementById('pregunta').src = reacts[i].año + "/" + reacts[i].preg;
        document.getElementById('pregunta').style = reacts[i].est;
        document.getElementById('msg').innerHTML = "Suerte";
        document.getElementById('nada').selected=true;
    }

    function termiarActividad(){
        // Presenta resultados del ejercicio
    }
    
    function reactivoSig(){
        if ( i == 0){ // iniciamos el cuestionario
            fecInic = new Date(); 
            document.getElementById("fecha").innerHTML = fecInic.getFullYear() + "/" + (fecInic.getMonth() + 1) + "/" + fecInic.getDate() + " hora: " + fecInic.getHours()+ ":" + fecInic.getMinutes();
        }
        if (i<reacts.length){
            i++;
            fecReIni = new Date();
            actReactivo();
        } else {
            terminar();
        }
    }

    function reactivoAnt(){
        if (i>0){
            i--;
            fecReIni = new Date();
            actReactivo();
        }
    }

    function respuesta(){
        var res = "";
        
        res = document.getElementById('resp').value;
        fecReFin = new Date();
        var f = fecInic.getFullYear() + "/" + (fecInic.getMonth() + 1) + "/" + fecInic.getDate();
        var t = Math.floor((fecReFin.getTime()-fecReIni.getTime())/1000);
        var resultado = new Reactivo(reacts[i].preg,res,reacts[i].eje,reacts[i].cont,f,t,0);
        
        if(res == reacts[i].resp){
            document.getElementById('msg').innerHTML = "Ok";
            correctos[0] +=1;
            correctos[reacts[i].eje] +=1;
            resultado.res = 1;
        } else {
            document.getElementById('msg').innerHTML = "Mal";
            incorrectos[0] += 1;
            incorrectos[reacts[i].eje] +=1;
        }
        resueltos.push(resultado);
        document.getElementById("eje1").innerHTML = correctos[1] + "/" + incorrectos[1];
        document.getElementById("eje2").innerHTML = correctos[2] + "/" + incorrectos[2];
        document.getElementById("eje3").innerHTML = correctos[3] + "/" + incorrectos[3];
    }

        function terminar(){
            fecFin = new Date();
            var temp = `${fecInic.getFullYear()}/${(fecInic.getMonth() + 1)}/${fecInic.getDate()}   ${fecInic.getHours()}:${fecInic.getMinutes()} a ${fecFin.getHours()}:${fecFin.getMinutes()}  <br>`;
            j = 0;
            while (j<resueltos.length){
                temp = temp + resueltos[j].preg + "," + resueltos[j].cont + "," + resueltos[j].fecha + "," + resueltos[j].tiempo + "," + resueltos[j].res + "<br>";
                j=j+1;
            }
            document.write(temp);
        }

    // Reactivos, preguntas incluidas en el ejercicio
    var reacts = [
    {preg:"E2013G7R10.PNG", resp:"A", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R11.PNG", resp:"B", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R12.PNG", resp:"C", est:"width:200px;", cont:20, eje:1, año:2013},
    {preg:"E2013G7R13.PNG", resp:"D", est:"width:200px;", cont:40, eje:1, año:2013},
    {preg:"E2013G7R14.PNG", resp:"D", est:"width:200px;", cont:53, eje:1, año:2013},
    {preg:"E2013G7R15.PNG", resp:"D", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G7R16.PNG", resp:"D", est:"width:200px;", cont:56, eje:2, año:2013},
    {preg:"E2013G7R17.PNG", resp:"B", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R18.PNG", resp:"B", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R19.PNG", resp:"B", est:"width:200px;", cont:63, eje:1, año:2013},
    {preg:"E2013G7R20.PNG", resp:"B", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R21.PNG", resp:"B", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R22.PNG", resp:"B", est:"width:200px;", cont:20, eje:1, año:2013},
    {preg:"E2013G7R23.PNG", resp:"C", est:"width:200px;", cont:40, eje:1, año:2013},
    {preg:"E2013G7R24.PNG", resp:"A", est:"width:200px;", cont:55, eje:1, año:2013},
    {preg:"E2013G7R26.PNG", resp:"A", est:"width:200px;", cont:66, eje:1, año:2013},
    {preg:"E2013G7R27.PNG", resp:"D", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R28.PNG", resp:"A", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R29.PNG", resp:"A", est:"width:200px;", cont:65, eje:1, año:2013},
    {preg:"E2013G7R46.PNG", resp:"D", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R47.PNG", resp:"D", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R48.PNG", resp:"A", est:"width:200px;", cont:20, eje:1, año:2013},
    {preg:"E2013G7R49.PNG", resp:"B", est:"width:200px;", cont:40, eje:1, año:2013},
    {preg:"E2013G7R50.PNG", resp:"C", est:"width:200px;", cont:53, eje:1, año:2013},
    {preg:"E2013G7R51.PNG", resp:"D", est:"width:200px;", cont:73, eje:1, año:2013},
    {preg:"E2013G7R52.PNG", resp:"D", est:"width:200px;", cont:66, eje:1, año:2013},
    {preg:"E2013G7R53.PNG", resp:"B", est:"width:200px;", cont:88, eje:2, año:2013},
    {preg:"E2013G7R54.PNG", resp:"C", est:"width:200px;", cont:65, eje:1, año:2013},
    {preg:"E2013G7R55.PNG", resp:"D", est:"width:200px;", cont:123, eje:3, año:2013},
    {preg:"E2013G7R56.PNG", resp:"A", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R57.PNG", resp:"D", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R58.PNG", resp:"D", est:"width:200px;", cont:20, eje:1, año:2013},
    {preg:"E2013G7R59.PNG", resp:"D", est:"width:200px;", cont:40, eje:1, año:2013},
    {preg:"E2013G7R60.PNG", resp:"A", est:"width:200px;", cont:53, eje:2, año:2013},
    {preg:"E2013G7R61.PNG", resp:"D", est:"width:200px;", cont:73, eje:1, año:2013},
    {preg:"E2013G7R62.PNG", resp:"C", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G7R63.PNG", resp:"B", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R64.PNG", resp:"A", est:"width:200px;", cont:69, eje:1, año:2013},
    {preg:"E2013G7R65.PNG", resp:"D", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G7R83.PNG", resp:"C", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R84.PNG", resp:"C", est:"width:200px;", cont:55, eje:1, año:2013},
    {preg:"E2013G7R85.PNG", resp:"C", est:"width:200px;", cont:20, eje:1, año:2013},
    {preg:"E2013G7R86.PNG", resp:"B", est:"width:200px;", cont:55, eje:1, año:2013},
    {preg:"E2013G7R87.PNG", resp:"C", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G7R88.PNG", resp:"D", est:"width:200px;", cont:73, eje:1, año:2013},
    {preg:"E2013G7R89.PNG", resp:"C", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G7R90.PNG", resp:"B", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R91.PNG", resp:"A", est:"width:200px;", cont:65, eje:1, año:2013},
    {preg:"E2013G7R92.PNG", resp:"A", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G7R93.PNG", resp:"C", est:"width:200px;", cont:19, eje:1, año:2013},
    {preg:"E2013G7R94.PNG", resp:"D", est:"width:200px;", cont:20, eje:1, año:2013},
    {preg:"E2013G7R95.PNG", resp:"A", est:"width:200px;", cont:40, eje:1, año:2013},
    {preg:"E2013G7R96.PNG", resp:"D", est:"width:200px;", cont:53, eje:1, año:2013},
    {preg:"E2013G7R97.PNG", resp:"A", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G7R98.PNG", resp:"B", est:"width:200px;", cont:66, eje:1, año:2013},
    {preg:"E2013G7R99.PNG", resp:"D", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G7R100.PNG", resp:"A", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G7R101.PNG", resp:"A", est:"width:200px;", cont:65, eje:1, año:2013},
    {preg:"E2013G7R102.PNG", resp:"A", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G8R10.PNG", resp:"A", est:"width:200px;", cont:77, eje:1, año:2013},
    {preg:"E2013G8R11.PNG", resp:"A", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R12.PNG", resp:"A", est:"width:200px;", cont:76, eje:1, año:2013},
    {preg:"E2013G8R13.PNG", resp:"D", est:"width:200px;", cont:66, eje:1, año:2013},
    {preg:"E2013G8R14.PNG", resp:"C", est:"width:200px;", cont:150, eje:2, año:2013},
    {preg:"E2013G8R15.PNG", resp:"C", est:"width:200px;", cont:113, eje:1, año:2013},
    {preg:"E2013G8R16.PNG", resp:"A", est:"width:200px;", cont:114, eje:2, año:2013},
    {preg:"E2013G8R17.PNG", resp:"C", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G8R18.PNG", resp:"C", est:"width:200px;", cont:65, eje:3, año:2013},
    {preg:"E2013G8R19.PNG", resp:"B", est:"width:200px;", cont:151, eje:3, año:2013},
    {preg:"E2013G8R20.PNG", resp:"B", est:"width:200px;", cont:152, eje:3, año:2013},
    {preg:"E2013G8R21.PNG", resp:"B", est:"width:200px;", cont:77, eje:1, año:2013},
    {preg:"E2013G8R22.PNG", resp:"B", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R23.PNG", resp:"B", est:"width:200px;", cont:73, eje:1, año:2013},
    {preg:"E2013G8R24.PNG", resp:"C", est:"width:200px;", cont:67, eje:1, año:2013},
    {preg:"E2013G8R25.PNG", resp:"A", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G8R26.PNG", resp:"B", est:"width:200px;", cont:113, eje:1, año:2013},
    {preg:"E2013G8R27.PNG", resp:"B", est:"width:200px;", cont:153, eje:2, año:2013},
    {preg:"E2013G8R28.PNG", resp:"D", est:"width:200px;", cont:64, eje:3, año:2013},
    {preg:"E2013G8R29.PNG", resp:"B", est:"width:200px;", cont:70, eje:1, año:2013},
    {preg:"E2013G8R30.PNG", resp:"D", est:"width:200px;", cont:133, eje:3, año:2013},
    {preg:"E2013G8R31.PNG", resp:"B", est:"width:200px;", cont:129, eje:3, año:2013},
    {preg:"E2013G8R50.PNG", resp:"B", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R51.PNG", resp:"D", est:"width:200px;", cont:76, eje:1, año:2013},
    {preg:"E2013G8R52.PNG", resp:"A", est:"width:200px;", cont:73, eje:1, año:2013},
    {preg:"E2013G8R53.PNG", resp:"D", est:"width:200px;", cont:67, eje:1, año:2013},
    {preg:"E2013G8R54.PNG", resp:"C", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G8R55.PNG", resp:"A", est:"width:200px;", cont:112, eje:2, año:2013},
    {preg:"E2013G8R56.PNG", resp:"B", est:"width:200px;", cont:112, eje:2, año:2013},
    {preg:"E2013G8R57.PNG", resp:"C", est:"width:200px;", cont:64, eje:1, año:2013},
    {preg:"E2013G8R58.PNG", resp:"B", est:"width:200px;", cont:69, eje:1, año:2013},
    {preg:"E2013G8R59.PNG", resp:"D", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G8R85.PNG", resp:"B", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R86.PNG", resp:"C", est:"width:200px;", cont:55, eje:1, año:2013},
    {preg:"E2013G8R87.PNG", resp:"A", est:"width:200px;", cont:66, eje:1, año:2013},
    {preg:"E2013G8R88.PNG", resp:"D", est:"width:200px;", cont:67, eje:1, año:2013},
    {preg:"E2013G8R89.PNG", resp:"C", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G8R90.PNG", resp:"A", est:"width:200px;", cont:111, eje:2, año:2013},
    {preg:"E2013G8R91.PNG", resp:"A", est:"width:200px;", cont:114, eje:2, año:2013},
    {preg:"E2013G8R92.PNG", resp:"A", est:"width:200px;", cont:64, eje:1, año:2013},
    {preg:"E2013G8R93.PNG", resp:"A", est:"width:200px;", cont:69, eje:1, año:2013},
    {preg:"E2013G8R94.PNG", resp:"B", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G8R112.PNG", resp:"B", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R113.PNG", resp:"B", est:"width:200px;", cont:40, eje:1, año:2013},
    {preg:"E2013G8R114.PNG", resp:"B", est:"width:200px;", cont:67, eje:1, año:2013},
    {preg:"E2013G8R115.PNG", resp:"A", est:"width:200px;", cont:67, eje:1, año:2013},
    {preg:"E2013G8R116.PNG", resp:"B", est:"width:200px;", cont:154, eje:2, año:2013},
    {preg:"E2013G8R117.PNG", resp:"C", est:"width:200px;", cont:112, eje:2, año:2013},
    {preg:"E2013G8R118.PNG", resp:"C", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G8R119.PNG", resp:"B", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R120.PNG", resp:"B", est:"width:200px;", cont:69, eje:1, año:2013},
    {preg:"E2013G8R121.PNG", resp:"C", est:"width:200px;", cont:129, eje:3, año:2013},
    {preg:"E2013G8R122.PNG", resp:"A", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R123.PNG", resp:"D", est:"width:200px;", cont:75, eje:1, año:2013},
    {preg:"E2013G8R124.PNG", resp:"B", est:"width:200px;", cont:66, eje:1, año:2013},
    {preg:"E2013G8R125.PNG", resp:"C", est:"width:200px;", cont:67, eje:1, año:2013},
    {preg:"E2013G8R126.PNG", resp:"A", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G8R127.PNG", resp:"C", est:"width:200px;", cont:57, eje:1, año:2013},
    {preg:"E2013G8R128.PNG", resp:"D", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G8R129.PNG", resp:"C", est:"width:200px;", cont:63, eje:1, año:2013},
    {preg:"E2013G8R130.PNG", resp:"C", est:"width:200px;", cont:151, eje:3, año:2013},
    {preg:"E2013G8R131.PNG", resp:"C", est:"width:200px;", cont:127, eje:3, año:2013},
    {preg:"E2013G9R11.PNG", resp:"B", est:"width:200px;", cont:68, eje:1, año:2013},
    {preg:"E2013G9R12.PNG", resp:"C", est:"width:200px;", cont:76, eje:1, año:2013},
    {preg:"E2013G9R13.PNG", resp:"C", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R14.PNG", resp:"D", est:"width:200px;", cont:92, eje:2, año:2013},
    {preg:"E2013G9R15.PNG", resp:"B", est:"width:200px;", cont:115, eje:2, año:2013},
    {preg:"E2013G9R16.PNG", resp:"A", est:"width:200px;", cont:71, eje:1, año:2013},
    {preg:"E2013G9R17.PNG", resp:"B", est:"width:200px;", cont:68, eje:1, año:2013},
    {preg:"E2013G9R18.PNG", resp:"C", est:"width:200px;", cont:136, eje:3, año:2013},
    {preg:"E2013G9R19.PNG", resp:"A", est:"width:200px;", cont:129, eje:3, año:2013},
    {preg:"E2013G9R20.PNG", resp:"D ", est:"width:200px;", cont:76, eje:1, año:2013},
    {preg:"E2013G9R21.PNG", resp:"D", est:"width:200px;", cont:76, eje:1, año:2013},
    {preg:"E2013G9R22.PNG", resp:"D", est:"width:200px;", cont:92, eje:2, año:2013},
    {preg:"E2013G9R23.PNG", resp:"C", est:"width:200px;", cont:92, eje:2, año:2013},
    {preg:"E2013G9R24.PNG", resp:"C", est:"width:200px;", cont:92, eje:2, año:2013},
    {preg:"E2013G9R25.PNG", resp:"B", est:"width:200px;", cont:71, eje:3, año:2013},
    {preg:"E2013G9R26.PNG", resp:"A", est:"width:200px;", cont:71, eje:3, año:2013},
    {preg:"E2013G9R27.PNG", resp:"C", est:"width:200px;", cont:135, eje:3, año:2013},
    {preg:"E2013G9R41.PNG", resp:"C", est:"width:200px;", cont:68, eje:1, año:2013},
    {preg:"E2013G9R42.PNG", resp:"B", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R43.PNG", resp:"D", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R44.PNG", resp:"C", est:"width:200px;", cont:115, eje:2, año:2013},
    {preg:"E2013G9R45.PNG", resp:"B", est:"width:200px;", cont:153, eje:2, año:2013},
    {preg:"E2013G9R46.PNG", resp:"B", est:"width:200px;", cont:69, eje:3, año:2013},
    {preg:"E2013G9R47.PNG", resp:"A", est:"width:200px;", cont:65, eje:3, año:2013},
    {preg:"E2013G9R48.PNG", resp:"C", est:"width:200px;", cont:136, eje:3, año:2013},
    {preg:"E2013G9R74.PNG", resp:"D", est:"width:200px;", cont:68, eje:1, año:2013},
    {preg:"E2013G9R75.PNG", resp:"D", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R76.PNG", resp:"C", est:"width:200px;", cont:92, eje:2, año:2013},
    {preg:"E2013G9R77.PNG", resp:"A", est:"width:200px;", cont:69, eje:1, año:2013},
    {preg:"E2013G9R78.PNG", resp:"B", est:"width:200px;", cont:153, eje:2, año:2013},
    {preg:"E2013G9R79.PNG", resp:"D", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G9R80.PNG", resp:"D", est:"width:200px;", cont:69, eje:3, año:2013},
    {preg:"E2013G9R81.PNG", resp:"A", est:"width:200px;", cont:135, eje:3, año:2013},
    {preg:"E2013G9R105.PNG", resp:"D", est:"width:200px;", cont:68, eje:1, año:2013},
    {preg:"E2013G9R106.PNG", resp:"B", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R107.PNG", resp:"D", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R108.PNG", resp:"C", est:"width:200px;", cont:93, eje:2, año:2013},
    {preg:"E2013G9R109.PNG", resp:"A", est:"width:200px;", cont:69, eje:1, año:2013},
    {preg:"E2013G9R110.PNG", resp:"B", est:"width:200px;", cont:113, eje:2, año:2013},
    {preg:"E2013G9R111.PNG", resp:"C", est:"width:200px;", cont:71, eje:1, año:2013},
    {preg:"E2013G9R112.PNG", resp:"D", est:"width:200px;", cont:128, eje:3, año:2013},
    {preg:"E2013G9R113.PNG", resp:"B", est:"width:200px;", cont:68, eje:1, año:2013},
    {preg:"E2013G9R114.PNG", resp:"A", est:"width:200px;", cont:90, eje:2, año:2013},
    {preg:"E2013G9R115.PNG", resp:"C", est:"width:200px;", cont:92, eje:2, año:2013},
    {preg:"E2013G9R116.PNG", resp:"B", est:"width:200px;", cont:114, eje:2, año:2013},
    {preg:"E2013G9R117.PNG", resp:"C", est:"width:200px;", cont:69, eje:3, año:2013},
    {preg:"E2013G9R118.PNG", resp:"C", est:"width:200px;", cont:71, eje:3, año:2013},
    {preg:"E2013G9R119.PNG", resp:"D", est:"width:200px;", cont:136, eje:3, año:2013}
    ];

    // Organizadores curriculares
    var ejes =[
        "Número, álgebra y variación",
        "Forma, espacio y medida",
        "Análisis de datos"
    ];
    var temas =[
        "Número",
        "Adición y sustracción",
        "Multiplicación y división",
        "Proporcionalidad",
        "Ecuaciones",
        "Funciones",
        "Patrones, figuras geométricas y expresiones equivalentes",
        "Ubicación espacial",
        "Figuras y cuerpos geométricos",
        "Magnitudes y medidas",
        "Estadística",
        "Probabilidad"
    ];