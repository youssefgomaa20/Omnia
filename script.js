        const heart = document.getElementById("heart");
        const card = document.getElementById("card");
        const messageEl = document.getElementById("message");
        const sound = document.getElementById("clickSound");

   const textLines = [
  "I’m not very good at talking ",
  "But your presence in my life truly makes a difference to me,",
  "And I want to tell you honestly:",
  "I admire you, and I love you ❤️",
  "And I just want to know… will there be a chance for us to be in each other’s lives?"
];

        heart.addEventListener("click", () => {
        sound.play();
        heart.style.display = "none";
        card.style.display = "block";
        typeLines();
        });

        function typeLines() {
        let lineIndex = 0;
        let charIndex = 0;

        function type() {
            if (lineIndex < textLines.length) {
            if (charIndex < textLines[lineIndex].length) {
                messageEl.innerHTML += textLines[lineIndex][charIndex];
                charIndex++;
                setTimeout(type, 40);
            } else {
                messageEl.innerHTML += "<br><br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(type, 400);
            }
            }
        }

        type();
        }
