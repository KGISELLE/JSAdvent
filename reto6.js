// Un par de entusiastas de la Navidad han creado una empresa de decoración navideña.La primera decoración que quieren fabricar es un cubo que se coloca en los árboles.

// El problema es que tienen que programar la máquina y no saben cómo hacerlo.Nos han pedido ayuda para conseguirlo.

// Para crear los cubos, se pasa al programa un número con el tamaño deseado y devuelve un string con el diseño de ese tamaño.Por ejemplo, si pasamos un 3, el programa debe devolver un cubo de 3x3x3:

// Como puede ver, el cubo tiene tres caras visualmente.Los símbolos utilizados para construir las caras del cubo son: /, \, _. Para hacer el cubo, se necesitan algunos espacios. Además, cada línea está separada por un carácter de nueva línea \n.


// const cube = createCube(3);

// const cubeOfOne = createCube(1);

// const size = 3;



// function createCube(size) {
//   const slash = "/";
//   const backSlash = "\\";
//   const downLine = "_";
//   const space = " ";

//   const one = slash + backSlash;
//   const two = downLine + backSlash;

//   const oneReverse = backSlash + slash;

//   const twoReverse = downLine + slash

//   const firstPartUp = one.repeat(1);
//   const firstPartUpSize = one.repeat(size);
//   const secondPartUp = two.repeat(size);

//   const firstPartDown = oneReverse.repeat(1);
//   const firstPartDownSize = oneReverse.repeat(size);
//   const secondPartDown = twoReverse.repeat(size);

//   const options = {
//     "cubeOne":
//       firstPartUp + secondPartUp + "\n" +
//       firstPartDown + secondPartDown
//     ,
//     "cubeTwo":
//       space + firstPartUp + secondPartUp + "\n" +
//       firstPartUpSize + secondPartUp + "\n" +
//       firstPartDownSize + secondPartDown + "\n" +
//       space + firstPartDown + secondPartDown
//     ,
//     "cubeThree":
//       space + space + firstPartUp + secondPartUp + "\n" +
//       space + firstPartUp.repeat(2) + secondPartUp + "\n" +
//       firstPartUpSize + secondPartUp + "\n" +
//       firstPartDownSize + secondPartDown + "\n" +
//       space + firstPartDown.repeat(2) + secondPartDown + "\n" +
//       space + space + firstPartDown + secondPartDown
//   }

//   if(size === 1) {
//     return options.cubeOne;
//   } else if(size === 2) {
//     return options.cubeTwo;
//   } else {
//     return options.cubeThree;
//   }

//   // switch (size) {
//   //   case 1:
//   //     console.log(
//   //       firstPartUp + secondPartUp + "\n" +
//   //       firstPartDown + secondPartDown
//   //     );
//   //     break;
    
//   //   case 2:
//   //     console.log(
//   //       space + firstPartUp + secondPartUp + "\n" +
//   //       firstPartUpSize + secondPartUp + "\n" +
//   //       firstPartDownSize + secondPartDown + "\n" +
//   //       space + firstPartDown + secondPartDown
//   //     );
//   //     break;
    
//   //   case 3:
//   //     console.log(
//   //       space + space + firstPartUp + secondPartUp + "\n" +
//   //       space + firstPartUp.repeat(2) + secondPartUp + "\n" +
//   //       firstPartUpSize + secondPartUp + "\n" +
//   //       firstPartDownSize + secondPartDown + "\n" +
//   //       space + firstPartDown.repeat(2) + secondPartDown + "\n" +
//   //       space + space + firstPartDown + secondPartDown
//   //     );
//   //     break;
    
//   //   default:
//   //     console.log("hola");
      
//   // }

// }

// createCube(size);