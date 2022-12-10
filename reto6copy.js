// Un par de entusiastas de la Navidad han creado una empresa de decoración navideña.La primera decoración que quieren fabricar es un cubo que se coloca en los árboles.

// El problema es que tienen que programar la máquina y no saben cómo hacerlo.Nos han pedido ayuda para conseguirlo.

// Para crear los cubos, se pasa al programa un número con el tamaño deseado y devuelve un string con el diseño de ese tamaño.Por ejemplo, si pasamos un 3, el programa debe devolver un cubo de 3x3x3:

// Como puede ver, el cubo tiene tres caras visualmente.Los símbolos utilizados para construir las caras del cubo son: /, \, _. Para hacer el cubo, se necesitan algunos espacios. Además, cada línea está separada por un carácter de nueva línea \n.


const cubeOfOne = createCube(3);


function createCube(size) {

  const space = " ";

  const one = "/\\";

  const two = "_\\";

  const oneBottom = "\\/";

  const twoBottom = "_/";


  let drawCube = "";

  for (let index = 0; index < size; index++) {
    const topPart = space.repeat(index) + one.repeat(size - index) + two.repeat(size) + "\n";

    // console.log('%creto6copy.js line:36 topPart', 'color: #007acc;', topPart);

    const bottomPart = space.repeat(index) + oneBottom.repeat(size - index) + twoBottom.repeat(size) + "\n";
    // console.log('%creto6copy.js line:39 bottomPart', 'color: #007acc;', bottomPart);

    drawCube = topPart + drawCube + bottomPart;

    // console.log('%creto6copy.js line:43 drawCube', 'color: #007acc;', drawCube);
  }
    
  console.log(drawCube.trimEnd());
  return drawCube.trimEnd();

}

createCube(cubeOfOne);