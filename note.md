Acceleration
Pointer
p5.Element : child()
how the drawing could be 
facing then click then turn then the page inside 
draw the pubelle and the keep in desk ughh

code trying 

let img;
let imgWidth = 200;
let imgHeight = 240;
let imagesLoaded = 0;

const letters = [
  {
    closed: "Calque_10.png",
    open: "Calque_11.png",
  },
  {
    closed: "Calque_7.png",
    open: "Calque_9.png",
  },
];

async function loadimages() {
  
  //for (let i = 0; i < 2; i++) {
    //const letter = letters[i];
    //letter.closedImg = await loadImage(letter.closed);
    //letter.openImg = await loadImage(letter.open);
  //}

  await letters.forEach(async (letter) => {
    letter.closedImg = await loadImage(letter.closed);
    letter.openImg = await loadImage(letter.open);
    imagesLoaded++;
  });
}

async function setup() {
  // Load the image.

  await loadimages()


  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  if (imagesLoaded == letters.length) {

    
//  image(img, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgHeight, imgHeight);
  }
}






.....
let img;
let imgWidth = 200;
let imgHeight = 240;
let trashImg, keepfolderImg;
let imagesLoaded = 0;
let gap = 40;

let activeLetterType = 0;
let activeLetterState = 0;

const letters = [
  { files: ["./pub-front.png", "pub-back.png", "pub-open.png"] },
  { files: ["party-front.png", "party-back.png", "party-open.png"] },
  { files: ["love-front.png", "love-back.png", "love-open.png"] },
   { files: ["pay-front.png", "pay-back.png", "pay-open.png"] }, 
];

async function loadimages() {
  await letters.forEach(async (letter) => {
    letter.closedImg = await loadImage(letter.files[0]);
    letter.frontImg = await loadImage(letter.files[1]);
    letter.openImg = await loadImage(letter.files[2]);
    imagesLoaded++;
  });
  
  trashImg  = await loadImage("trash.png");
  imagesLoaded++;
  folderImg = await loadImage("keep-folder.png");
  imagesLoaded++;
}

async function setup() {
  // Load the image.

  await loadimages()

  print(letters)

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255, 253, 240);
  if (imagesLoaded == letters.length + 2) {

    const activeLetter = letters[activeLetterType];
    let activeImg;

    if (activeLetterState == 0) {
      activeImg = letters[activeLetterType].closedImg;
    } else if (activeLetterState == 1) {
      activeImg = letters[activeLetterType].frontImg;
    } else {
      activeImg = letters[activeLetterType].openImg;
    }
    
    image(activeImg, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgHeight, imgHeight);
  }
}

function mouseClicked() {
  
  activeLetterState++;
  activeLetterState = activeLetterState % 3;

  if (activeLetterState == 0) {
    activeLetterType++;
    activeLetterType = activeLetterType % letters.length;
  }

  
}





......
let img;
let activeImg;
let imgHeight = 400;
let imgWidth = imgHeight * (1668 / 2388);
let trashImg, folderImg;
let imagesLoaded = 0;
let gap = 40;

let iconSize = 320;     // hauteur des icônes (la largeur suit automatiquement)
let padTrash = 40;      // plus grand = poubelle plus proche du coin
let padFolder = 60;     // plus grand = dossier plus proche du coin

let activeLetterType = 0;
let activeLetterState = 0;

const letters = [
  { files: ["./pub-front.png", "pub-back.png", "pub-open.png"] },
  { files: ["party-front.png", "party-back.png", "party-open.png"] },
  { files: ["love-front.png", "love-back.png", "love-open.png"] },
  { files: ["pay-front.png", "pay-back.png", "pay-open.png"] },
];

async function loadimages() {
  await letters.forEach(async (letter) => {
    letter.closedImg = await loadImage(letter.files[0]);
    letter.frontImg = await loadImage(letter.files[1]);
    letter.openImg = await loadImage(letter.files[2]);
    imagesLoaded++;
  });

  trashImg = await loadImage("trash.png");
  imagesLoaded++;
  folderImg = await loadImage("keep-folder.png");
  imagesLoaded++;
}

async function setup() {
  await loadimages();
  print(letters);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 253, 240);

  if (imagesLoaded == letters.length + 2) {
    let activeImg;

    if (activeLetterState == 0) {
      activeImg = letters[activeLetterType].closedImg;
    } else if (activeLetterState == 1) {
      activeImg = letters[activeLetterType].frontImg;
    } else {
      activeImg = letters[activeLetterType].openImg;
    }

    // La lettre au centre
    let imgHeight = height * 1.1;
    let imgWidth = imgHeight * (1668 / 2388);
    image(activeImg, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight);

    // Les icônes dans les coins (dessinées après la lettre, donc par-dessus)
    let iconW = iconSize * (1668 / 2388);
    image(trashImg, -padTrash, height - iconSize + padTrash, iconW, iconSize);
    image(folderImg, width - iconW + padFolder, height - iconSize + padFolder, iconW, iconSize);
  }
}

function mouseClicked() {
  activeLetterState++;
  activeLetterState = activeLetterState % 3;

  if (activeLetterState == 0) {
    activeLetterType++;
    activeLetterType = activeLetterType % letters.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




ERROOOOR

FINAAAAL 




let iconSize = 320;
let img;
let activeImg;
let imgHeight = 400;
let imgWidth = imgHeight * (1668 / 2388);
let trashImg, keepfolderImg;
let imagesLoaded = 0;
let gap = 40;

let activeLetterType = 0;
let activeLetterState = 0;

let letterX, letterY;
let dragging = false;
let wasDragged = false;
let offsetX = 0;
let offsetY = 0;

const letters = [
  { files: ["./pub-front.webp", "pub-back.webp", "pub-open.webp"] },
  { files: ["party-front.webp", "party-back.webp", "party-open.webp"] },
  { files: ["love-front.webp", "love-back.webp", "love-open.webp"] },
  { files: ["pay-front.webp", "pay-back.webp", "pay-open.webp"] },
];

async function loadimages() {
  await letters.forEach(async (letter) => {
    letter.closedImg = await loadImage(letter.files[0]);
    letter.frontImg = await loadImage(letter.files[1]);
    letter.openImg = await loadImage(letter.files[2]);
    imagesLoaded++;
  });

  trashImg = await loadImage("trash.webp");
  imagesLoaded++;
  folderImg = await loadImage("keep-folder.webp");
  imagesLoaded++;
}

async function setup() {
  // Load the image.

  await loadimages();

  print(letters);
  createCanvas(windowWidth, windowHeight);

  letterX = width / 2;
  letterY = height / 2;
}

function draw() {
  background(255, 253, 240);
  if (imagesLoaded == letters.length + 2) {
    //const activeLetter = letters[activeLetterType];

    let activeImg;
    let iconW = iconSize * (1668 / 2388);
    let pad = 50;
    image(trashImg, -pad, height - iconSize + pad, iconW, iconSize);
    image(
      folderImg,
      width - iconW - 0.01,
      height - iconSize + pad,
      iconW,
      iconSize
    );

    if (activeLetterState == 0) {
      activeImg = letters[activeLetterType].closedImg;
    } else if (activeLetterState == 1) {
      activeImg = letters[activeLetterType].frontImg;
    } else {
      activeImg = letters[activeLetterType].openImg;
    }

    let imgHeight = height * 1.1;
    let imgWidth = imgHeight * (1668 / 2388);
    image(
      activeImg,
      letterX - imgWidth / 2,
      letterY - imgHeight / 2,
      imgWidth,
      imgHeight
    );
    //image(activeImg, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight);
  }
}

function overLetter() {
  let iconW = iconSize * (1668 / 2388);
  let pad = 50;
  let onBottom = mouseY > height - iconSize + pad;
  let onTrash = mouseX < iconW - pad;
  let onFolder = mouseX > width - iconW - 20;
  return onBottom && (onTrash || onFolder);
}

function mousePressed() {
  const over = overLetter();
  if (activeLetterState == 2) {
    dragging = true;
    wasDragged = false;
    offsetX = mouseX - letterX;
    offsetY = mouseY - letterY;
  }
}

function mouseDragged() {
    print("hi")
    letterX = mouseX - offsetX;
    letterY = mouseY - offsetY;
    wasDragged = true;
}

function mouseReleased() {
  if (dragging) {
    dragging = false;
    if (overLetter) {
      activeLetterState = 0;
      activeLetterType++;
      activeLetterType = activeLetterType % letters.length;
    }
    letterX = width / 2;
    letterY = height / 2;
  }
}

function mouseClicked() {
  activeLetterState++;
  activeLetterState = activeLetterState % 3;

  if (activeLetterState == 0) {
    activeLetterType++;
    activeLetterType = activeLetterType % letters.length;
  }
}
