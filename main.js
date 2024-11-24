let jsData = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midlevel",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midlevel",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midlevel",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];
let container = document.querySelector(".project .container");
let selectedFilters = document.querySelector(".selected-filters");
let clear = document.querySelector(".selected-box .clear");
let selectedImgs = [];
let skillsPs;
let pageBoxs;
let appearboxs = [];
setTimeout(() => {
  skillsPs = document.querySelectorAll(".box .skills p");
  pageBoxs = document.querySelectorAll(".box");
  pageBoxs.forEach((box) => {
    if (box.classList.contains("appear")) {
      appearboxs.push(box);
    }
  });
  psAdd();
}, 1000);

addBoxsToPage(jsData);

function addBoxsToPage(data) {
  data.forEach((obj) => {
    let mainBox = document.createElement("div");
    mainBox.className = `box ${obj.role} ${obj.level} appear`;
    let cont = document.createElement("div");
    cont.className = "cont";
    let imgCont = document.createElement("div");
    imgCont.className = "image";
    let img = document.createElement("img");
    img.alt = "";
    img.src = `${obj.logo}`;
    imgCont.appendChild(img);
    cont.appendChild(imgCont);
    let detal = document.createElement("div");
    detal.className = "detal";
    let head = document.createElement("div");
    head.className = "head";
    let name = document.createElement("div");
    name.className = "name";
    name.textContent = obj.company;
    head.appendChild(name);
    detal.appendChild(head);
    if (obj.new) {
      let newDiv = document.createElement("div");
      newDiv.className = "new";
      newDiv.textContent = "NEW!";
      head.appendChild(newDiv);
    }
    if (obj.featured) {
      let featuredDiv = document.createElement("div");
      featuredDiv.className = "featured";
      featuredDiv.textContent = "featured";
      head.appendChild(featuredDiv);
    }
    let posi = document.createElement("div");
    posi.className = "position";
    posi.textContent = obj.position;
    let location = document.createElement("div");
    location.className = "location";
    let time = document.createElement("div");
    time.textContent = obj.postedAt;
    let contact = document.createElement("div");
    contact.textContent = obj.contract;
    let place = document.createElement("div");
    place.textContent = obj.location;
    location.appendChild(time);
    location.appendChild(contact);
    location.appendChild(place);
    detal.appendChild(posi);
    detal.appendChild(location);
    cont.appendChild(detal);
    mainBox.appendChild(cont);
    let skills = document.createElement("div");
    skills.className = "skills";
    if (obj.role) {
      let role = obj.role;
      let rolep = document.createElement("p");
      rolep.dataset.role = `.${obj.role}`;
      rolep.textContent = role;
      skills.appendChild(rolep);
    }
    if (obj.level) {
      let level = obj.level;
      let levelp = document.createElement("p");
      levelp.dataset.level = `.${obj.level}`;
      levelp.textContent = level;
      skills.appendChild(levelp);
    }
    if (obj.tools) {
      let tools = obj.tools;
      tools.forEach((tool) => {
        mainBox.classList.add(tool);
        let p = document.createElement("p");
        p.dataset.tool = `.${obj.tool}`;
        p.textContent = tool;
        skills.appendChild(p);
      });
    }
    if (obj.languages) {
      let langs = obj.languages;
      langs.forEach((lang) => {
        mainBox.classList.add(lang);
        let langP = document.createElement("p");
        // langP.dataset.lang = `.${obj.role}`;
        langP.textContent = lang;
        skills.appendChild(langP);
      });
    }
    mainBox.appendChild(skills);
    container.appendChild(mainBox);
  });
}

function psAdd() {
  skillsPs.forEach((p) => {
    p.addEventListener("click", (e) => {
      let div = document.createElement("div");
      div.className = "filter";
      let para = document.createElement("p");
      para.textContent = e.target.textContent;
      let img = document.createElement("img");
      img.alt = "";
      img.src = "./images/icon-remove.svg";
      div.appendChild(para);
      div.appendChild(img);
      selectedFilters.appendChild(div);
      img.onclick = function () {
        div.remove();
      };
      filter(p);
      selectedImgs = document.querySelectorAll(".selected-filters .filter img");
      filt();
    });
  });
}

function filter(para) {
  appearboxs = [];
  pageBoxs.forEach((box) => {
    if (box.classList.contains("appear")) {
      appearboxs.push(box);
    }
  });
  pageBoxs.forEach((box) => {
    box.classList.remove("appear");
  });
  appearboxs.forEach((box) => {
    if (box.classList.contains(para.textContent)) {
      box.classList.add("appear");
    }
  });
}

function unFilter() {
  let arr = Array.from(selectedFilters.children);
  pageBoxs.forEach((box) => {
    box.classList.remove("appear");
  });
  arr.forEach((div) => {
    document.querySelectorAll(`.${div.textContent}`).forEach((div) => {
      div.classList.add("appear");
    });
  });
  if (arr.length == 0) {
    selectedFilters.textContent = "";
    pageBoxs.forEach((box) => {
      box.classList.add("appear");
    });
  }
}

function filt() {
  selectedImgs.forEach((img) => {
    img.addEventListener("click", (e) => {
      unFilter();
    });
  });
}

clear.onclick = function () {
  selectedFilters.textContent = "";
  pageBoxs.forEach((box) => {
    box.classList.add("appear");
  });
};
