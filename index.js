const welcomenote = document.querySelector(".font");
let valid=false;
window.addEventListener("load", () => {
  welcomenote.textContent = "";
  const note = ["W", "E", "L", "C", "O", "M", "E"];
  note.forEach((char, i) => {
    setTimeout(() => {
      welcomenote.textContent += char;
    }, i * 300);
  });
  
  let count = 0;
  for (let i = note.length - 1; i >= 0; i--) {
    setTimeout(() => {
      welcomenote.textContent = welcomenote.textContent.slice(0, -1);
      count++;
      if (count === note.length) {
        // Switch screens
        document.querySelector(".welcome").style.display = "none";
        document.querySelector(".allcontent").style.display = "flex";
         document.querySelector(".animation1").style.animation="appear 1.5s ease-in-out forwards";
         document.querySelector(".ani").style.animation="appear 1.5s ease-in-out forwards"
         valid=true;
       document.querySelector(".animation2").style.animation="appear2 1.5s ease-in-out forwards";
       const spac = document.querySelector(".spaslization");
         const sp = [
  "Front End Developer",
  "Computer Science & Engineering Student",
  "Full Stack Developer",
  "JavaScript Enthusiast",
  "React.js Developer",
  "UI/UX Designer",
  "Open Source Contributor",
  "Tech Blogger",
  "Web Performance Optimizer",
  "Backend Developer (Node.js)",
  "Responsive Web Design Expert",
  "Database Enthusiast",
  "Software Engineer in Training",
  "Git & GitHub User",
  "DSA Learner",
  "Problem Solver",
  "Cloud Computing Beginner",
  "APIs Integrator",
  "Cross-Browser Compatibility Specialist",
  "Mobile-First Developer"
];


         let i = 0;

         function typeText(text,callback) {
                  for(let j=1;j<=sp[i].length;j++){
                     setTimeout(()=>{
                        spac.textContent=text.slice(0,j);
                        if(j==text.length && callback)callback();
                     },j*100);
                  }
         }
         function showNextText(){
            typeText(sp[i],()=>{
               i=(i+1)%sp.length;
               setTimeout(showNextText,1500);
            })
         }
            // Show first text immediately
         showNextText();

            // Change text every 3 seconds
            
      }
    }, (note.length * 300) + (note.length - i) * 300); 
  }
});
console.log(valid);


