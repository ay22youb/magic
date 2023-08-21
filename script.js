const rotatingCard = document.getElementById("rotating-card");

rotatingCard.addEventListener("click", () => {
  rotatingCard.style.setProperty("--rotate", `${Math.random() * 360}deg`);
  rotatingCard.addEventListener("click", () => {
    const randomRotation = `${Math.random() * 360}deg`;
    console.log("Clicked! New Rotation:", randomRotation);
    rotatingCard.style.setProperty("--rotate", randomRotation);
  });
  
});
