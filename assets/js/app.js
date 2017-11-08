
function trello(){
    //seleccionamos el container donde vamos a poner todo
    var container = document.getElementById('container');
    //cremamos div dentro Este div va a conter un input y el boton guardar
    var divFather = document.createElement('div');
     divFather.setAttribute("class", "removeDivFather");//Esta clase la agregamos para que en el momento de guardar el titulo se puede eliminar este contenedor..
    //creamos un input dentro
    var input= document.createElement('input');
    //agragamos atributos al input
    input.setAttribute('type','text');
    input.setAttribute('id','tarjeta');
    input.setAttribute('rows','5');
    input.setAttribute('cols','3');
     input.setAttribute('class','inputTitle');//clase para poder obtener el titulo 
    input.setAttribute('placeholder','¡Perfecto!Ahora, añada su primera tarjeta');
    //BOTON
    var button = document.createElement('button');
    var textoButton = document.createTextNode('Guardar');
    //atributos del botton
    button.setAttribute("type", "submit");
    button.setAttribute("class", "button");
    //texto dentro del boton
    button.appendChild(textoButton);
    //Agregar Evento al boton
    button.addEventListener('click',function(){
        var container = document.getElementById('container');

    // TITULO  OBTENEMOS VALOR INGRESADO EN EL PRIMER IMPUT 
   // var title = this.previousSibling.value; pedir explicacion!!
  var title = document.getElementsByClassName('inputTitle')[0].value;
    console.log(title)

    // Crear el nuevo titulo
    var lista = document.createElement('div');
    var h1 = document.createElement('h1')
    var texto = document.createTextNode(title);

    lista.setAttribute("class", "lista");


    // Remover el input y el boton
    var removeIB = document.getElementsByClassName('removeDivFather')[0];
    container.removeChild(removeIB);

    h1.appendChild(texto);
    lista.appendChild(h1);
    container.appendChild(lista);

    // Crear div añadir tarjeta
    var addCard = document.createElement('div');
    var addCardTexto = document.createTextNode('Añadir una tarjeta...');

    addCard.setAttribute("class", "add-card");

    // Una vez que se crea la lista doy la posibilidad a crear una nueva
    createAddList();

    addCard.appendChild(addCardTexto);
    lista.appendChild(addCard);

    addCard.addEventListener('click', createTask);


    })


    //Eliminamos el titulo de la primera lista.
    var remove = document.getElementsByClassName('btn-anadir-list')[0];
    container.removeChild(remove);

    //Agregamos todo al div father!
    divFather.appendChild(input);
    divFather.appendChild(button);
    container.appendChild(divFather)
   alert('holi');
   console.log(input)
}
//BOTON PARA CREAR UNA NUEVA LISTA SE ACTIVA AL GUARDAR EL TITULO DE LA PRIMER LISTA 
//Vuelve a llamar la funcion principal

function createAddList() {
    var container = document.getElementById('container');
    var btnAddList = document.createElement('span');

    btnAddList.setAttribute('class', 'btn-anadir-list');
    btnAddList.appendChild(document.createTextNode('Añadir nueva lista...'));
    container.appendChild(btnAddList);
    btnAddList.addEventListener('click', trello);
};

function createTask() {
    //var listaIni = this.parentNode;
    var listaIni = document.createElement('div');
   // alert(listaIni.NodeType)
    var textArea = document.createElement('textarea');
    var buttonTextArea = document.createElement('button');

    textArea.setAttribute("id", "text-area")
    buttonTextArea.setAttribute("class", "button");

    var textoButton = document.createTextNode('Añadir');

    listaIni.appendChild(textArea);
    listaIni.appendChild(buttonTextArea);
    buttonTextArea.appendChild(textoButton);

    // Al hacer click en el boton obtengo la data ingresada en la tarjeta
    buttonTextArea.addEventListener('click', function() {
        var textAreaValue = document.getElementById('text-area').value;
        console.log(textAreaValue);

        listaIni.removeChild(textArea);
        listaIni.removeChild(buttonTextArea);

        var card = document.createElement('div');
        var cardText = document.createTextNode(textAreaValue);

        card.setAttribute("class", "card");

        card.appendChild(cardText);
        listaIni.appendChild(card);

        // Crear div añadir tarjeta
        var addCard = document.createElement('div');
        var addCardTexto = document.createTextNode('Añadir una tarjeta...');

        addCard.setAttribute("class", "add-card");

        addCard.appendChild(addCardTexto);
        listaIni.appendChild(addCard);
        //Llamo a la misma funcion cuantas veces quiera

        addCard.addEventListener('click', createTask);
    });



}