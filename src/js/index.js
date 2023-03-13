import dotenv from "dotenv";

dotenv.config();
let contactForm = document.getElementById("contactForm");

console.log(process.env.PUBLIC_FORMSUBMIT_ACTION_LINK);
contactForm.setAttribute("action", process.env.PUBLIC_FORMSUBMIT_ACTION_LINK);
