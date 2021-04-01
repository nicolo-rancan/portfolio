const navbar = document.querySelector(".navbar");
const linkIds = ["link_home", "link_about", "link_knowledges", "link_projects", "link_contacts"];
const knowledges = 
[
  {
    title: "HTML 5",
    description: "Cumque ex laboriosam voluptate blanditiis nam dolor rerum sunt. Occaecati quae soluta sed. Veniam sequi porro in suscipit porro culpa itaque officiis. Omnis enim nihil voluptatem quibusdam ut sed sunt rem. Aut ut porro voluptatem in dicta.",
    imagePath: "https://img.icons8.com/color/48/000000/html-5.png",
    percentage: 80,
    colorCode: "#ff6d00"
  },
  {
    title: "CSS 3",
    description: "Cumque ex laboriosam voluptate blanditiis nam dolor rerum sunt. Occaecati quae soluta sed. Veniam sequi porro in suscipit porro culpa itaque officiis. Omnis enim nihil voluptatem quibusdam ut sed sunt rem. Aut ut porro voluptatem in dicta.",
    imagePath: "https://img.icons8.com/color/48/000000/css3.png",
    percentage: 70,
    colorCode: "#039be5"
  },
  {
    title: "JavaScript",
    description: "Cumque ex laboriosam voluptate blanditiis nam dolor rerum sunt. Occaecati quae soluta sed. Veniam sequi porro in suscipit porro culpa itaque officiis. Omnis enim nihil voluptatem quibusdam ut sed sunt rem. Aut ut porro voluptatem in dicta.",
    imagePath: "https://img.icons8.com/color/48/000000/javascript.png",
    percentage: 90,
    colorCode: "#ffd600"
  },
  {
    title: "Node",
    description: "Cumque ex laboriosam voluptate blanditiis nam dolor rerum sunt. Occaecati quae soluta sed. Veniam sequi porro in suscipit porro culpa itaque officiis. Omnis enim nihil voluptatem quibusdam ut sed sunt rem. Aut ut porro voluptatem in dicta.",
    imagePath: "https://img.icons8.com/color/48/000000/nodejs.png",
    percentage: 80,
    colorCode: "#37474f"
  },
  {
    title: "C#",
    description: "Cumque ex laboriosam voluptate blanditiis nam dolor rerum sunt. Occaecati quae soluta sed. Veniam sequi porro in suscipit porro culpa itaque officiis. Omnis enim nihil voluptatem quibusdam ut sed sunt rem. Aut ut porro voluptatem in dicta.",
    imagePath: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    percentage: 70,
    colorCode: "#546e7a"
  }
];

const projects = [
  {
    title: "OverLegend",
    description: "",
    date: "20/01/2020",
    blendColor: "",
    gallery: ["/resources/images/ol-1.png"]
  },
  {
    title: "GamersITA",
    description: "",
    date: "",
    blendColor: "",
    gallery: []
  },
  {
    title: "Mars",
    description: "",
    date: "",
    blendColor: "",
    gallery: []
  },
  {
    title: "Centro Culturale Molino",
    description: "",
    date: "",
    blendColor: "",
    gallery: ["/resources/images/ccm-1.png"]
  },
  {
    title: "Linux Day",
    description: "",
    date: "",
    blendColor: "",
    gallery: []
  }
]

let activeLink = "";

linkIds.forEach(i => {
  document.getElementById(i).addEventListener("mouseover", () => {
      setUnderlineaturePosition(`#${i}`);
  });

  document.getElementById(i).addEventListener("mouseleave", () => {
    setUnderlineaturePosition(activeLink);
  });

  document.getElementById(i).addEventListener("click", () => {

    if (window.innerWidth <= 600 && document.querySelector(".links").classList.contains("visible")) {
      document.querySelector(".links").classList.toggle("visible");
    }

    window.history.replaceState("object or string", "Title", `/${i.split("_")[1]}`);
    setUnderlineaturePosition(`#link_${i.split("_")[1]}`);
    scrollIntoView(`${i.split("_")[1]}`);
    updateTitle();

    activeLink = `#link_${i.split("_")[1]}`;
  });
});

function toggleMenu() {
  if (window.innerWidth <= 600) {
    let cnt = document.querySelector(".links");
    cnt.classList.toggle("visible");
  }
}

window.onload = () => {
  activeLink = `#link_${window.location.pathname.split("/").pop()}`;
  setUnderlineaturePosition(activeLink);
  scrollIntoView(window.location.pathname.split("/").pop());
  updateTitle();

  let sw = false;

  for (let i = 0; i < knowledges.length; i++) {

    let barCnt = document.createElement("div");
    barCnt.className = "bar-cnt";

    if (sw)
      barCnt.className += " left";

    sw = !sw;

    let barName = document.createElement("div");
    barName.className = "bar-name";

    let name = document.createElement("p");
    name.innerText = knowledges[i].title;

    let barOuter = document.createElement("div");
    barOuter.className = "bar-outer";

    let barPercentage = document.createElement("div");
    barPercentage.className = "bar-percent";
    barPercentage.style.width = knowledges[i].percentage + "%";

    let barEmpty = document.createElement("div");
    barEmpty.className = "bar-empty";
    barEmpty.style.width = 100 - knowledges[i].percentage + "%";

    barName.appendChild(name);
    barOuter.appendChild(barPercentage);
    barOuter.appendChild(barEmpty);

    barCnt.appendChild(barName);
    barCnt.appendChild(barOuter);

    document.getElementById("knowledges-panel").appendChild(barCnt);
  }
}


function updateTitle() {
  let url = window.location.pathname.split("/").pop();
  document.title = `${toPascalCase(url)} - Nicolò Rancan portfolio`;
}

function setUnderlineaturePosition(elemId) {
  let elem = document.querySelector(elemId);
  let elemLength = Math.ceil(elem.offsetWidth);
  let underlineature;

  if (document.getElementById("underlineature") != undefined) {
    underlineature = document.getElementById("underlineature");
  } else {
    underlineature = document.createElement("div");
  }

  underlineature.id = "underlineature";
  //underlineature.style.position = "absolute";
  underlineature.style.width = elemLength + "px";
  underlineature.style.height = "2px";
  underlineature.style.backgroundColor = "black";
  underlineature.style.marginLeft = Math.ceil(elem.getBoundingClientRect().left) + "px";

  underlineature.style.transition = "all 0.3s";

  if (document.getElementById("underlineature") == undefined)
    navbar.appendChild(underlineature);
}

function scrollIntoView(elemId, offset = 75) {
  let scrollOffset = document.getElementById(elemId).offsetTop - offset;
  window.scrollTo(0, scrollOffset);
}

const toPascalCase = str => str.replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());


window.addEventListener("scroll", () => {
  if (!document.querySelector(".bar-cnt")) return;

  for (let i = 0; i < document.getElementsByClassName("bar-cnt").length; i++) {
    if (elementInViewport(document.getElementsByClassName("bar-cnt")[i])) {
      document.getElementsByClassName("bar-cnt")[i].style.transition = "0.75s";
      document.getElementsByClassName("bar-cnt")[i].style.transform = "translateX(0)";
      document.getElementsByClassName("bar-cnt")[i].style.opacity = "1";
    }
  }
});

let iDontKnowHowToCallThis = false;
window.addEventListener("resize", () => {
  if (window.innerWidth <= 600)
    iDontKnowHowToCallThis = true;
  else if (iDontKnowHowToCallThis == true)
  {
    iDontKnowHowToCallThis = false;
    let url = window.location.pathname.split("/").pop();
    setUnderlineaturePosition("#link_" + url);
  }
});


function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight - 250) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}