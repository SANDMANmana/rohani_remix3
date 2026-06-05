const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

const testimonials = [
{
quote:
"Rohani brought a depth and humanity to our leadership program that our team is still talking about months later.",
author:
"Head of People & Culture"
},
{
quote:
"The workshop helped our leaders develop greater emotional intelligence and resilience.",
author:
"HR Director"
},
{
quote:
"A rare blend of science, mindfulness and practical leadership development.",
author:
"Executive Team Lead"
}
];

let current = 0;

setInterval(() => {

current++;

if(current >= testimonials.length){
current = 0;
}

document.getElementById("quote").textContent =
testimonials[current].quote;

document.getElementById("author").textContent =
testimonials[current].author;

}, 5000);
