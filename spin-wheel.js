document.addEventListener("DOMContentLoaded", function() {
  const unbounceButton = document.getElementById("lp-pom-button-609");
  if (unbounceButton) {
    unbounceButton.addEventListener("click", spinWheelDesktop);
  }
});

const styleElem = document.createElement("style");
styleElem.innerHTML = 
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
;
document.head.appendChild(styleElem);

// 1) GET CONTAINER
const containerDesktop = document.getElementById("spin-wheel-desktop");
containerDesktop.style.position = "relative";
containerDesktop.style.display = "flex";
containerDesktop.style.flexDirection = "column";
containerDesktop.style.alignItems = "center";
containerDesktop.style.justifyContent = "center";
containerDesktop.style.padding = "40px 0";
containerDesktop.style.background = "transparent";
containerDesktop.style.color = "#fff";

// 2) CREATE CANVAS
const canvasDesktop = document.createElement("canvas");
canvasDesktop.width = 500;
canvasDesktop.height = 500;
canvasDesktop.style.borderRadius = "50%";
canvasDesktop.style.boxShadow = "0px 0px 25px rgba(255, 255, 255, 0.3)";
canvasDesktop.style.background = "transparent";
canvasDesktop.style.cursor = "pointer";
containerDesktop.appendChild(canvasDesktop);

// 3) CREATE ARROW
const arrowDesktop = document.createElement("img");
arrowDesktop.src = "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/c93c6564-de24-44af-92f9-e8896ea05114/screenshot-2025-03-18-at-16-22-08.small.png";
arrowDesktop.style.position = "absolute";
arrowDesktop.style.top = "30px";
arrowDesktop.style.left = "50%";
arrowDesktop.style.transform = "translateX(-50%)";
arrowDesktop.style.width = "100px";
arrowDesktop.style.height = "100px";
arrowDesktop.style.filter = "drop-shadow(0px 0px 15px #ffc700)";
containerDesktop.appendChild(arrowDesktop);

const slicesDesktop = [
  // Slice 1 (index 0)
  {
    gradientColors: ["#ecc440", "#fffa8a", "#ddac17", "#ffff95"],
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/6cd66bad-ae30-4081-b6a4-95fc28f2d9b7/100fs.small.png",
    popupMessage: "<span style='font-size:22px;'>You just scored 100 Free Spins!</span><br><br><span style='font-size:17px;'>Grab your reward now, or try your luck one more time.</span><br><br><span style='font-size:17px;'>Only 1 spin left!</span>",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/6cd66bad-ae30-4081-b6a4-95fc28f2d9b7/100fs.small.png",
    popupTextSize: "17px"
  },
  // Slice 2 (index 1)
  {
    color: "#ab2330",
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/8594dc1d-fa1e-4401-a89b-d80de7aee21f/200fs.small.png",
    popupMessage: "<span style='font-size:24px;'>Congratulations!</span><br><br><span style='font-size:24px;'>You’ve won 200 Free Spins!</span><br><br><span style='font-size:24px;'>Use them on a game of your choice!</span>",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/54d85d6c-a01b-49ad-b2d3-5d49a99f2b15/200.small.png",
    popupTextSize: "24px"
  },
  // Slice 3 (index 2)
  {
    gradientColors: ["#ecc440", "#fffa8a", "#ddac17", "#ffff95"],
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/6cd66bad-ae30-4081-b6a4-95fc28f2d9b7/100fs.small.png",
    popupMessage: "<span style='font-size:22px;'>You just scored 100 Free Spins!</span><br><br><span style='font-size:17px;'>Grab your reward now, or try your luck one more time.</span><br><br><span style='font-size:17px;'>Only 1 spin left!</span>",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/6cd66bad-ae30-4081-b6a4-95fc28f2d9b7/100fs.small.png",
    popupTextSize: "17px"
  },
  // Slice 4 (index 3)
  {
    color: "#000000",
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/acf71804-b023-4284-86c9-9cfca065175a/50fs.small.png",
    popupMessage: "Jackpot! You hit the big one!",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/1bcaadc6-ba5b-47d7-bb1c-31c134fc4b36/catrina-logo.small.png",
    popupTextSize: "24px"
  },
  // Slice 5 (index 4)
  {
    gradientColors: ["#ecc440", "#fffa8a", "#ddac17", "#ffff95"],
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/6cd66bad-ae30-4081-b6a4-95fc28f2d9b7/100fs.small.png",
    popupMessage: "Extra Spins are on you!",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/1bcaadc6-ba5b-47d7-bb1c-31c134fc4b36/catrina-logo.small.png",
    popupTextSize: "24px"
  },
  // Slice 6 (index 5)
  {
    color: "#000000",
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/acf71804-b023-4284-86c9-9cfca065175a/50fs.small.png",
    popupMessage: "You've won a Cash Prize!",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/1bcaadc6-ba5b-47d7-bb1c-31c134fc4b36/catrina-logo.small.png",
    popupTextSize: "24px"
  },
  // Slice 7 (index 6)
  {
    gradientColors: ["#ecc440", "#fffa8a", "#ddac17", "#ffff95"],
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/354bccd9-3d52-47f2-9ac8-9c3891e7144a/150fs.small.png",
    popupMessage: "A Mystery Gift awaits you!",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/1bcaadc6-ba5b-47d7-bb1c-31c134fc4b36/catrina-logo.small.png",
    popupTextSize: "24px"
  },
  // Slice 8 (index 7)
  {
    color: "#000000",
    image: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/acf71804-b023-4284-86c9-9cfca065175a/50fs.small.png",
    popupMessage: "Sorry, try again next time!",
    popupImage: "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/1bcaadc6-ba5b-47d7-bb1c-31c134fc4b36/catrina-logo.small.png",
    popupTextSize: "24px"
  }
];

let forceSlice2OnNextSpin = false;

const sectionsDesktop = slicesDesktop.length;
let startAngleDesktop = 0;   
let spinningDesktop = false; 

let studAnimationCounter = 0;
const borderLineWidth = 30;
const borderRadius = canvasDesktop.width / 2 - 5;
const studDistance = borderRadius - 5;
const studCount = 8;
let borderRotationAngle = 0;

slicesDesktop.forEach(slice => {
  const img = new Image();
  img.src = slice.image;
  slice.imageObj = img;
});

// CENTER LOGO
const logoDesktop = new Image();
logoDesktop.src = "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/a727af6d-2c47-4aad-8dc4-deb8b82924a2/frame-174.original.svg";
logoDesktop.onload = function() {
  drawWheelDesktop();
  animateLogo();
  animateOuter();
};

// HELPER: Get *all* URL parameters from the page,
// WITHOUT prepending "?"
function getAllQueryString() {
  const params = new URLSearchParams(window.location.search);
  return params.toString(); 
}

function drawWheelDesktop() {
  const ctx = canvasDesktop.getContext("2d");
  const arc = (Math.PI * 2) / sectionsDesktop;
  ctx.clearRect(0, 0, canvasDesktop.width, canvasDesktop.height);
  
  for (let i = 0; i < sectionsDesktop; i++) {
    const slice = slicesDesktop[i];
    const angle = startAngleDesktop + i * arc;
    
    let fillStyle;
    if (slice.gradientColors) {
      const gradient = ctx.createLinearGradient(0, 0, canvasDesktop.width, canvasDesktop.height);
      gradient.addColorStop(0, slice.gradientColors[0]);
      gradient.addColorStop(0.33, slice.gradientColors[1]);
      gradient.addColorStop(0.66, slice.gradientColors[2]);
      gradient.addColorStop(1, slice.gradientColors[3]);
      fillStyle = gradient;
    } else {
      fillStyle = slice.color;
    }
    
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    
    ctx.beginPath();
    ctx.moveTo(canvasDesktop.width / 2, canvasDesktop.height / 2);
    ctx.arc(
      canvasDesktop.width / 2,
      canvasDesktop.height / 2,
      canvasDesktop.width / 2 - 15,
      angle,
      angle + arc
    );
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    
    const midAngle = angle + arc / 2;
    const imageRadius = (canvasDesktop.width / 2 - 15) * 0.7;
    const imageX = canvasDesktop.width / 2 + imageRadius * Math.cos(midAngle);
    const imageY = canvasDesktop.height / 2 + imageRadius * Math.sin(midAngle);
    const imgSize = 99;
    
    if (slice.imageObj.complete) {
      ctx.drawImage(
        slice.imageObj,
        imageX - imgSize / 2,
        imageY - imgSize / 2,
        imgSize,
        imgSize
      );
    }
  }
  
  ctx.save();
  ctx.translate(canvasDesktop.width / 2, canvasDesktop.height / 2);
  ctx.rotate(borderRotationAngle);
  
  const borderGradient = ctx.createLinearGradient(
    -canvasDesktop.width / 2,
    -canvasDesktop.height / 2,
    canvasDesktop.width / 2,
    canvasDesktop.height / 2
  );
  borderGradient.addColorStop(0, "#F9F295");
  borderGradient.addColorStop(0.25, "#E0AA3E");
  borderGradient.addColorStop(0.5, "#FAF398");
  borderGradient.addColorStop(0.75, "#B88A44");
  borderGradient.addColorStop(1, "#F9F295");
  
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.beginPath();
  ctx.arc(0, 0, borderRadius, 0, Math.PI * 2);
  ctx.lineWidth = borderLineWidth;
  ctx.strokeStyle = borderGradient;
  ctx.stroke();
  ctx.restore();
  
  const activeStudIndex = (studCount - (Math.floor(studAnimationCounter) % studCount)) % studCount;
  const glowColors = ["#20cc00", "#FF0000", "#0000FF", "#FFFF00"];
  const activeGlowColor = glowColors[Math.floor(studAnimationCounter) % glowColors.length];
  
  for (let i = 0; i < studCount; i++) {
    const studAngle = (i * 45) * (Math.PI / 180);
    const studX = studDistance * Math.cos(studAngle);
    const studY = studDistance * Math.sin(studAngle);
    ctx.beginPath();
    ctx.arc(studX, studY, 10, 0, Math.PI * 2);
    if (i === activeStudIndex) {
      ctx.fillStyle = activeGlowColor;
      ctx.shadowColor = activeGlowColor;
      ctx.shadowBlur = 15;
    } else {
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowBlur = 0;
    }
    ctx.fill();
    ctx.closePath();
  }
  ctx.restore();
  
  const logoSize = canvasDesktop.width * 0.27;
  const timeNow = performance.now();
  const pulse = 1 + 0.05 * Math.sin(timeNow * 0.005);
  
  ctx.save();
  ctx.translate(canvasDesktop.width / 2, canvasDesktop.height / 2);
  ctx.scale(pulse, pulse);
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.drawImage(logoDesktop, -logoSize / 2, -logoSize / 2, logoSize, logoSize);
  ctx.restore();
}

function animateLogo() {
  studAnimationCounter += 0.02;
  drawWheelDesktop();
  requestAnimationFrame(animateLogo);
}

function animateOuter() {
  borderRotationAngle -= 0.005;
  drawWheelDesktop();
  requestAnimationFrame(animateOuter);
}

// POPUP
const winPopupDesktop = document.createElement("div");
winPopupDesktop.style.position = "absolute";
winPopupDesktop.style.top = canvasDesktop.offsetTop + "px";
winPopupDesktop.style.left = canvasDesktop.offsetLeft + "px";
winPopupDesktop.style.background = "rgba(0, 0, 0, 0.8)";
winPopupDesktop.style.color = "#fff";
winPopupDesktop.style.width = "540px";
winPopupDesktop.style.height = "540px";
winPopupDesktop.style.borderRadius = "0";
winPopupDesktop.style.display = "none"; 
winPopupDesktop.style.flexDirection = "column";
winPopupDesktop.style.justifyContent = "center";
winPopupDesktop.style.alignItems = "center";
winPopupDesktop.style.textAlign = "center";
winPopupDesktop.style.zIndex = "9999";
winPopupDesktop.style.border = "2px solid #ffc700";
winPopupDesktop.style.boxShadow = "0 0 20px #ffc700";

// Popup image element
const popupImageElement = document.createElement("img");
popupImageElement.style.width = "100%";
popupImageElement.style.maxWidth = "225px";
popupImageElement.style.marginBottom = "15px";
popupImageElement.style.display = "block";
popupImageElement.style.marginLeft = "auto";
popupImageElement.style.marginRight = "auto";
winPopupDesktop.appendChild(popupImageElement);

// Popup message element
const winMessage = document.createElement("h2");
winMessage.innerHTML = "You won This!";
winMessage.style.marginBottom = "15px";
winPopupDesktop.appendChild(winMessage);

// Container for popup buttons
const buttonsContainer = document.createElement("div");
buttonsContainer.style.textAlign = "center";
buttonsContainer.style.marginTop = "20px";
winPopupDesktop.appendChild(buttonsContainer);

containerDesktop.appendChild(winPopupDesktop);

// SPIN WHEEL FUNCTION
function spinWheelDesktop() {
  if (spinningDesktop || winPopupDesktop.style.display === "flex") return;
  spinningDesktop = true;

  const spinDuration = 10000;
  const arc = (2 * Math.PI) / sectionsDesktop;

  let winningIndex;
  if (forceSlice2OnNextSpin) {
    winningIndex = 1;
    forceSlice2OnNextSpin = false;
  } else {
    const forcedIndices = [0, 2];
    winningIndex = forcedIndices[Math.floor(Math.random() * forcedIndices.length)];
  }

  const baseAngle = -Math.PI / 2 - (winningIndex + 0.5) * arc;
  const currentAngle = startAngleDesktop;
  let needed = (currentAngle + 6 * Math.PI - baseAngle) / (2 * Math.PI);
  let K = Math.ceil(needed);
  if (K < 0) K = 0;
  const extraRandom = Math.floor(Math.random() * 3);
  K += extraRandom;
  const finalAngle = baseAngle + K * 2 * Math.PI;
  const initialAngle = currentAngle;
  const angleChange = finalAngle - initialAngle;
  const startTime = performance.now();

  function animate() {
    const now = performance.now();
    const elapsed = now - startTime;
    if (elapsed < spinDuration) {
      const t = elapsed / spinDuration;
      const easedT = 1 - Math.pow(1 - t, 3);
      startAngleDesktop = initialAngle + easedT * angleChange;
      drawWheelDesktop();
      requestAnimationFrame(animate);
    } else {
      startAngleDesktop = finalAngle;
      drawWheelDesktop();
      spinningDesktop = false;
      showCongratulationsPopup(winningIndex);
    }
  }
  requestAnimationFrame(animate);
}

// SHOW POPUP FUNCTION
function showCongratulationsPopup(winningIndex) {
  const winningSlice = slicesDesktop[winningIndex];
  winMessage.innerHTML = winningSlice.popupMessage;
  winMessage.style.fontSize = winningSlice.popupTextSize;
  popupImageElement.src = winningSlice.popupImage;

  buttonsContainer.innerHTML = "";
  
  if (winningIndex === 0 || winningIndex === 2) {
    const claimButton = document.createElement("button");
    claimButton.innerText = "Claim";
    claimButton.style.display = "inline-block";
    claimButton.style.padding = "22.5px 37.5px";
    claimButton.style.fontSize = "150%";
    claimButton.style.backgroundColor = "#ffc700";
    claimButton.style.color = "#000";
    claimButton.style.border = "none";
    claimButton.style.borderRadius = "79px";
    claimButton.style.cursor = "pointer";
    claimButton.style.marginRight = "10px";
    claimButton.style.fontWeight = "bold";
    claimButton.style.animation = "pulse 1s infinite";
    claimButton.addEventListener("click", () => {
      const allParams = getAllQueryString();
      window.location.href = "https://betty.ca/register?utm_variant=wheel&utm_campaign=gb*21495804154*175374370008*wheel*100&" + allParams;
    });
    buttonsContainer.appendChild(claimButton);

    const tryAgainButton = document.createElement("button");
    tryAgainButton.innerText = "Try Again";
    tryAgainButton.style.display = "inline-block";
    tryAgainButton.style.padding = "22.5px 37.5px";
    tryAgainButton.style.fontSize = "150%";
    tryAgainButton.style.backgroundColor = "#ff2c2c";
    tryAgainButton.style.color = "#fff";
    tryAgainButton.style.border = "none";
    tryAgainButton.style.borderRadius = "79px";
    tryAgainButton.style.cursor = "pointer";
    tryAgainButton.style.fontWeight = "bold";
    tryAgainButton.addEventListener("click", () => {
      forceSlice2OnNextSpin = true;
      winPopupDesktop.style.display = "none";
    });
    buttonsContainer.appendChild(tryAgainButton);
  } else {
    const singleClaimButton = document.createElement("button");
    singleClaimButton.innerText = "Claim";
    singleClaimButton.style.display = "inline-block";
    singleClaimButton.style.padding = "22.5px 37.5px";
    singleClaimButton.style.fontSize = "150%";
    singleClaimButton.style.backgroundColor = "#ffc700";
    singleClaimButton.style.color = "#000";
    singleClaimButton.style.border = "none";
    singleClaimButton.style.borderRadius = "79px";
    singleClaimButton.style.cursor = "pointer";
    singleClaimButton.style.fontWeight = "bold";
    singleClaimButton.style.animation = "pulse 1s infinite";
    singleClaimButton.addEventListener("click", () => {
      const allParams = getAllQueryString();
      window.location.href = "https://betty.ca/register?utm_variant=wheel&utm_campaign=gb*21495804154*175374370008*wheel*200&" + allParams;
    });
    buttonsContainer.appendChild(singleClaimButton);
  }
  winPopupDesktop.style.display = "flex";
}

canvasDesktop.addEventListener("click", spinWheelDesktop);

drawWheelDesktop();
