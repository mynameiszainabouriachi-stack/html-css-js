let iconSize = 320;
let img;
let activeImg;
let imgHeight = 400;
let imgWidth = imgHeight * (1668 / 2388);
let trashImg, keepfolderImg;
let imagesLoaded = 0;
let font;
let folderSound;
let trashSound;
let bgSound;
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
  folderSound = new Audio("folder-sound.mp3");
  trashSound = new Audio("trash-sound.mp3");
  bgSound = new Audio("background.mp3");
  bgSound.loop = true;
  bgSound.volume = 0.3;
  imagesLoaded++;
}

async function setup() {
  // Load the image.

  await loadimages();
  
  print(letters);
  createCanvas(windowWidth, windowHeight);
  
  letterX = width / 2;
  letterY = height / 2;
    bgSound.play().catch(() => {
    window.addEventListener("pointerdown", () => bgSound.play(), { once: true });
  });

  textSize(22);
  fill('yellow');
  text('Swiss Mailbox Madness', 6, 20);
  fill('cornflowerblue');
  text('Swiss Mailbox Madness', 6, 45);
  fill('tomato');
  text('Swiss Mailbox Madness', 6, 70);
  fill('limegreen');
  text('Swiss Mailbox Madness', 6, 95);
  // text add
  //textFont("Helvetica");
  //textSize(32);
  //textAlign(letterX, letterY);
}

function draw() {
  background(255, 253, 240);

  // text add
  //text('Swiss Mailbox Madness', 0, 0);
  //describe('The text "Swiss Mailbox Madness" written in white and spinning in 3D.');
let msg = 'Swiss Mailbox Madness';
  let rowH = height / 4;
  textFont("forma DJR text");
  textAlign(CENTER, CENTER);
  textSize(100);
  textSize(min(100 * width / textWidth(msg), rowH));

fill(255, 255, 0, 60);      // yellow
  text(msg, width / 2, rowH * 0.5);
  fill(100, 149, 237, 50);    // cornflowerblue
  text(msg, width / 2, rowH * 1.5);
  fill(255, 99, 71, 50);      // tomato
  text(msg, width / 2, rowH * 2.5);
  fill(50, 205, 50, 50);      // limegreen
  text(msg, width / 2, rowH * 3.5);



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
      textAlign(CENTER, CENTER);
    textSize(26);
    fill(0);
    text(
      "Open the letters and sort them : Keep or Trash !",
      iconW,
      height - iconSize + 50 - 40,
      width - iconW * 2,
      iconSize - 50
    );
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
    if (mouseX > width - iconSize * (1668 / 2388) - 20 && mouseY > height - iconSize + 50) {
      folderSound.currentTime = 0;
      folderSound.play().catch((e) => console.log("SOUND ERROR:", e.message, folderSound.src));
    }
    console.log("mouseX", mouseX, "iconSize * (1668 / 2388) - 50", iconSize * (1668 / 2388) - 50, "mouseY", mouseY, "height - iconSize + 50", height - iconSize + 50);
    if (mouseX < iconSize * (1668 / 2388) - 50 && mouseY > height - iconSize + 50) {
      trashSound.currentTime = 0;
      trashSound.play().catch((e) => console.log("SOUND ERROR:", e.message, trashSound.src));
    }
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
