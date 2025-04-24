// spin-wheel.js
(function() {
  // Run only once the page is parsed
  function init() {
    // 0) Inject our keyframes
    const styleElem = document.createElement("style");
    styleElem.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
`;
    document.head.appendChild(styleElem);

    // 1) Wire up the Unbounce button
    const unbounceButton = document.getElementById("lp-pom-button-609");
    if (unbounceButton) {
      unbounceButton.addEventListener("click", spinWheelDesktop);
    }

    // 2) Get & style the container
    const containerDesktop = document.getElementById("spin-wheel-desktop");
    if (!containerDesktop) return;
    Object.assign(containerDesktop.style, {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 0",
      background: "transparent",
      color: "#fff"
    });

    // 3) Create the canvas
    const canvasDesktop = document.createElement("canvas");
    canvasDesktop.width  = 500;
    canvasDesktop.height = 500;
    Object.assign(canvasDesktop.style, {
      borderRadius: "50%",
      boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.3)",
      background: "transparent",
      cursor: "pointer"
    });
    containerDesktop.appendChild(canvasDesktop);

    // 4) Create the arrow
    const arrowDesktop = document.createElement("img");
    arrowDesktop.src = "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/c93c6564-de24-44af-92f9-e8896ea05114/screenshot-2025-03-18-at-16-22-08.small.png";
    Object.assign(arrowDesktop.style, {
      position: "absolute",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "100px",
      filter: "drop-shadow(0px 0px 15px #ffc700)"
    });
    containerDesktop.appendChild(arrowDesktop);

    // 5) Define your slices
    const slicesDesktop = [
      /* ... your 8 slice objects here ... */
    ];

    // preload images
    slicesDesktop.forEach(slice => {
      const img = new Image();
      img.src = slice.image;
      slice.imageObj = img;
    });

    // other globals
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

    // center logo
    const logoDesktop = new Image();
    logoDesktop.src = "https://user-assets-unbounce-com.s3.amazonaws.com/bb4a5091-502f-410b-a7f9-963c98fb3b00/a727af6d-2c47-4aad-8dc4-deb8b82924a2/frame-174.original.svg";
    logoDesktop.onload = () => {
      drawWheelDesktop();
      animateLogo();
      animateOuter();
    };

    // popup setup
    const winPopupDesktop = document.createElement("div");
    Object.assign(winPopupDesktop.style, {
      position: "absolute",
      top: canvasDesktop.offsetTop + "px",
      left: canvasDesktop.offsetLeft + "px",
      background: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      width: "540px",
      height: "540px",
      borderRadius: "0",
      display: "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      zIndex: "9999",
      border: "2px solid #ffc700",
      boxShadow: "0 0 20px #ffc700"
    });
    const popupImageElement = document.createElement("img");
    Object.assign(popupImageElement.style, {
      width: "100%",
      maxWidth: "225px",
      marginBottom: "15px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    });
    winPopupDesktop.appendChild(popupImageElement);

    const winMessage = document.createElement("h2");
    winMessage.style.marginBottom = "15px";
    winPopupDesktop.appendChild(winMessage);

    const buttonsContainer = document.createElement("div");
    Object.assign(buttonsContainer.style, {
      textAlign: "center",
      marginTop: "20px"
    });
    winPopupDesktop.appendChild(buttonsContainer);

    containerDesktop.appendChild(winPopupDesktop);

    // helper: fetch query string
    function getAllQueryString() {
      return new URLSearchParams(window.location.search).toString();
    }

    // draw, animate, spin, and popup functions
    function drawWheelDesktop() { /* ... your draw code ... */ }
    function animateLogo() { studAnimationCounter += 0.02; drawWheelDesktop(); requestAnimationFrame(animateLogo); }
    function animateOuter() { borderRotationAngle -= 0.005; drawWheelDesktop(); requestAnimationFrame(animateOuter); }
    function spinWheelDesktop() { /* ... your spin code ... */ }
    function showCongratulationsPopup(idx) { /* ... your popup code ... */ }

    // clicking the canvas also spins
    canvasDesktop.addEventListener("click", spinWheelDesktop);

    // initial draw
    drawWheelDesktop();
  }

  // Listen for DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
