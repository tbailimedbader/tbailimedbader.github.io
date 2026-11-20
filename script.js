(() => {
  "use strict";

  const CONFIG = {
  "email": "tbailimohammedbader@gmail.com",
  "stack": [
    {
      "title": "Engineering & Simulation",
      "items": [
        {
          "name": "MATLAB",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
            "https://cdn.simpleicons.org/mathworks/0076a8"
          ]
        },
        {
          "name": "Simulink",
          "src": [
            "https://cdn.simpleicons.org/simulink/e16b1f",
            "https://cdn.simpleicons.org/mathworks/0076a8"
          ]
        },
        {
          "name": "SolidWorks",
          "src": [
            "https://cdn.simpleicons.org/solidworks/ee3224",
            "https://cdn.simpleicons.org/dassaultsystemes/ffffff"
          ]
        },
        {
          "name": "CATIA",
          "src": [
            "https://cdn.simpleicons.org/catia/0078d7",
            "https://cdn.simpleicons.org/dassaultsystemes/ffffff"
          ]
        },
        {
          "name": "AutoCAD",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/autocad/autocad-original.svg",
            "https://cdn.simpleicons.org/autodesk/ffffff"
          ]
        }
      ]
    },
    {
      "title": "Embedded & Hardware",
      "items": [
        {
          "name": "C",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
            "https://cdn.simpleicons.org/c/a8b9cc"
          ]
        },
        {
          "name": "C++",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            "https://cdn.simpleicons.org/cplusplus/00599c"
          ]
        },
        {
          "name": "Arduino",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
            "https://cdn.simpleicons.org/arduino/00979d"
          ]
        }
      ]
    },
    {
      "title": "Data Analysis",
      "items": [
        {
          "name": "NumPy",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
            "https://cdn.simpleicons.org/numpy/4dabcf"
          ]
        },
        {
          "name": "Pandas",
          "src": [
            "https://cdn.simpleicons.org/pandas/e70488",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
          ]
        },
        {
          "name": "Matplotlib",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
            "https://cdn.simpleicons.org/plotly/ffffff"
          ]
        }
      ]
    },
    {
      "title": "Frontend, 3D & Typesetting",
      "items": [
        {
          "name": "HTML5",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.simpleicons.org/html5/e34f26"
          ]
        },
        {
          "name": "CSS3",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.simpleicons.org/css3/1572b6"
          ]
        },
        {
          "name": "JavaScript",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.simpleicons.org/javascript/f7df1e"
          ]
        },
        {
          "name": "Tailwind",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            "https://cdn.simpleicons.org/tailwindcss/38bdf8"
          ]
        },
        {
          "name": "Three.js",
          "src": [
            "https://cdn.simpleicons.org/threedotjs/ffffff",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"
          ]
        },
        {
          "name": "LaTeX",
          "src": [
            "https://cdn.simpleicons.org/latex/ffffff",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"
          ]
        }
      ]
    },
    {
      "title": "Backend Development",
      "items": [
        {
          "name": "Python",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.simpleicons.org/python"
          ]
        },
        {
          "name": "Flask",
          "src": [
            "https://cdn.simpleicons.org/flask/ffffff"
          ]
        },
        {
          "name": "SQLAlchemy",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
            "https://cdn.simpleicons.org/sqlalchemy/d71f00"
          ]
        },
        {
          "name": "SQLite",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
            "https://cdn.simpleicons.org/sqlite/0f80cc"
          ]
        },
        {
          "name": "C#",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
            "https://cdn.simpleicons.org/csharp/9b4f96"
          ]
        }
      ]
    },
    {
      "title": "Automation & Software",
      "items": [
        {
          "name": "Selenium",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
            "https://cdn.simpleicons.org/selenium/43b02a"
          ]
        },
        {
          "name": "Java",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
            "https://cdn.simpleicons.org/openjdk/ed8b00"
          ]
        },
        {
          "name": "PySide6",
          "src": [
            "https://cdn.simpleicons.org/qt/41cd52"
          ]
        },
        {
          "name": "Git",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            "https://cdn.simpleicons.org/git/f05032"
          ]
        },
        {
          "name": "GitHub",
          "src": [
            "https://cdn.simpleicons.org/github/ffffff"
          ]
        },
        {
          "name": "Bash",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
            "https://cdn.simpleicons.org/gnubash/4eaa25"
          ]
        },
        {
          "name": "Linux",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            "https://cdn.simpleicons.org/linux/ffffff"
          ]
        }
      ]
    },
    {
      "title": "Editors & Tools",
      "items": [
        {
          "name": "VS Code",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            "https://cdn.simpleicons.org/visualstudiocode/007acc"
          ]
        },
        {
          "name": "Visual Studio",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg",
            "https://cdn.simpleicons.org/visualstudio/5c2d91"
          ]
        },
        {
          "name": "Sublime Text",
          "src": [
            "https://cdn.simpleicons.org/sublimetext/ff9800"
          ]
        },
        {
          "name": "Vim",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg",
            "https://cdn.simpleicons.org/vim/019733"
          ]
        }
      ]
    },
    {
      "title": "Design & Post-Production",
      "items": [
        {
          "name": "Photoshop",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg",
            "https://cdn.simpleicons.org/adobephotoshop/31a8ff"
          ]
        },
        {
          "name": "Figma",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
            "https://cdn.simpleicons.org/figma/f24e1e"
          ]
        },
        {
          "name": "Penpot",
          "src": [
            "https://cdn.simpleicons.org/penpot/ffffff"
          ]
        },
        {
          "name": "Premiere Pro",
          "src": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg",
            "https://cdn.simpleicons.org/adobepremierepro/9999ff"
          ]
        },
        {
          "name": "DaVinci Resolve",
          "src": [
            "https://cdn.simpleicons.org/davinciresolve/ffffff"
          ]
        },
        {
          "name": "draw.io",
          "src": [
            "https://cdn.simpleicons.org/diagramsdotnet/f08705"
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "title": "Differential Platform",
      "icon": "layers",
      "year": 2026,
      "hue": 150,
      "cover": "images/differential-cover.png",
      "tags": "Engineering · LaTeX · Teamwork",
      "desc": "A collaborative engineering project connecting mechanical design, calculations and technical documentation.",
      "more": "Developed within Engineering Project I, this team project brings together design decisions, mechanical calculations and a complete technical report. It reflects how I approach engineering study: understand the problem, make assumptions explicit, explain the calculations and document the reasoning so that others can review it.",
      "points": [
        "Mechanical design and supporting calculations",
        "Connecting theoretical concepts with a practical system",
        "Collaborative engineering work",
        "Clear diagrams and structured technical documentation",
        "A complete report written in LaTeX"
      ],
      "software": [
        "LaTeX",
        "draw.io"
      ],
      "links": [],
      "images": [
        {
          "src": "images/differential-1.jpg",
          "alt": "Differential platform",
          "cap": "The platform"
        },
        {
          "src": "images/differential-2.png",
          "alt": "Design drawing",
          "cap": "Design"
        },
        {
          "src": "images/differential-3.png",
          "alt": "Report page",
          "cap": "Technical report"
        }
      ]
    },
    {
      "title": "Pressure Sensor Lab",
      "icon": "gauge",
      "year": 2026,
      "hue": 28,
      "cover": "images/pressure-cover.png",
      "tags": "Sensors · Calibration · Measurement",
      "desc": "An experimental study of pressure measurement, sensor behaviour and uncertainty.",
      "more": "Using a water-column setup, I study how a pressure sensor converts pressure into an electrical voltage. The work begins with zero, noise and stability measurements and continues with the U = f(P) relationship. The investigation addresses sensitivity, offset, linearity, hysteresis, signal conditioning, response time and calibration; these are study objectives rather than a claim that every stage is complete.",
      "points": [
        "Zero offset, noise and stability measurements",
        "Voltage–pressure relationship U = f(P)",
        "Sensitivity, linearity and hysteresis",
        "Signal conditioning and response-time investigation",
        "Calibration and uncertainty-aware interpretation"
      ],
      "software": [],
      "links": [],
      "images": [
        {
          "src": "images/pressure-1.jpg",
          "alt": "Lab setup",
          "cap": "Lab setup"
        },
        {
          "src": "images/pressure-2.png",
          "alt": "Calibration curve",
          "cap": "Calibration curve"
        },
        {
          "src": "images/pressure-3.png",
          "alt": "Noise measurement",
          "cap": "Noise"
        }
      ]
    },
    {
      "title": "NearlyExact",
      "icon": "code",
      "year": 2026,
      "hue": 215,
      "cover": "images/nearlyexact-cover.png",
      "tags": "Experimental physics · Uncertainty · Python",
      "desc": "A scientific desktop tool supporting experimental measurements and uncertainty analysis.",
      "more": "NearlyExact grew from the needs of experimental physics work. The application brings measurements, type A and type B uncertainties, linear regression and graphical results into one desktop workflow. It connects my academic interest in metrology with programming, helping turn laboratory data into calculations and technical reports that can be reviewed.",
      "points": [
        "Repeated measurements and type A uncertainty",
        "Instrument contributions and type B uncertainty",
        "Linear regression with measurement uncertainties",
        "Graphs, error bars and residual analysis",
        "LaTeX reporting for experimental work"
      ],
      "software": [
        "Python",
        "PySide6",
        "VS Code",
        "Git",
        "GitHub"
      ],
      "links": [],
      "images": [
        {
          "src": "images/nearlyexact-1.png",
          "alt": "NearlyExact main window",
          "cap": "Main window"
        },
        {
          "src": "images/nearlyexact-2.png",
          "alt": "Uncertainty calculation",
          "cap": "Uncertainty calculation"
        },
        {
          "src": "images/nearlyexact-3.png",
          "alt": "Graph output",
          "cap": "Graphs"
        }
      ]
    }
  ],
  "languages": [
    {
      "name": "Arabic",
      "note": "Native"
    },
    {
      "name": "French",
      "note": "Full professional"
    },
    {
      "name": "English",
      "note": "Professional working"
    }
  ],
  "path": [
    {
      "when": "2026 – 2031 (expected)",
      "role": "Engineering student · EMINES – UM6P",
      "img": "images/emines.png",
      "more": "I am pursuing my engineering studies at EMINES, within Mohammed VI Polytechnic University. My current learning connects rigorous mathematical reasoning with physical modelling and experimental practice. Through coursework and projects, I work on translating a problem into equations, testing assumptions, interpreting measurements and presenting a clear technical argument.",
      "points": [
        "Mathematics: analysis, algebra and structured problem-solving",
        "Physics: mechanics, oscillations, electricity and physical modelling",
        "Experimental methods: calibration, repeatability and uncertainty",
        "Computing: algorithms and programming for engineering",
        "Team projects and technical communication"
      ],
      "images": [
        {
          "src": "images/emines-1.jpg",
          "alt": "emines",
          "cap": "EMINES · Academic environment"
        },
        {
          "src": "images/emines-2.jpg",
          "alt": "emines",
          "cap": "Engineering studies at EMINES"
        }
      ],
      "icon": "cap",
      "where": "School of Industrial Management · Ben Guerir, Morocco",
      "text": "Building a broad engineering foundation through mathematics, physics, computing, laboratory work and team projects."
    },
    {
      "when": "2026",
      "role": "Baccalauréat, Sciences Mathématiques A",
      "img": "images/bac-2026.jpg",
      "more": "My Sciences Mathématiques A baccalaureate provided the mathematical and physical foundations for my engineering studies. I graduated with Highest Honors and ranked first in my city in 2026. This stage developed my ability to work through multi-step problems, justify a method and connect equations with physical phenomena.",
      "points": [
        "Sciences Mathématiques A · 2026",
        "Highest Honors / High Distinction",
        "First in my city in the 2026 baccalaureate",
        "Mathematics, mechanics, electricity and optics"
      ],
      "images": [
        {
          "src": "images/bac-1.jpg",
          "alt": "bac-2026",
          "cap": "Picture 1"
        },
        {
          "src": "images/bac-2.jpg",
          "alt": "bac-2026",
          "cap": "Picture 2"
        }
      ],
      "icon": "award",
      "where": "Mathematics & Physics · Highest Honors",
      "text": "First in my city in the 2026 national baccalaureate."
    },
    {
      "when": "High school",
      "role": "Mathematics & Physics Olympiads",
      "img": "images/olympiads.jpg",
      "more": "During high school, I participated in national mathematics and physics olympiads. This experience encouraged me to explore unfamiliar problems, question assumptions and build solutions from fundamental principles. Physics preparation included dimensional analysis, order-of-magnitude reasoning, static equilibrium, gravitation, direct-current circuits, geometrical optics and electrostatics.",
      "points": [
        "National mathematics and physics olympiad participation",
        "NPhO physics preparation",
        "Dimensional analysis and orders of magnitude",
        "Mechanics, circuits, optics and electrostatics",
        "Logical reasoning and clearly justified solutions"
      ],
      "images": [
        {
          "src": "images/olympiads-1.jpg",
          "alt": "olympiads",
          "cap": "Picture 1"
        },
        {
          "src": "images/olympiads-2.jpg",
          "alt": "olympiads",
          "cap": "Picture 2"
        }
      ],
      "icon": "trophy",
      "where": "NPhO · National level",
      "text": "Took part in national mathematics and physics olympiads."
    },
    {
      "when": "Ongoing",
      "role": "Physics & mathematical modelling",
      "icon": "layers",
      "where": "Academic interests & applied learning",
      "text": "Exploring how mathematical models describe mechanical, electrical and optical systems.",
      "more": "My studies and reading connect mathematical tools with concrete physical questions: the motion and equilibrium of a system, the response of an electrical circuit, or the formation of an optical image. Topics I explore also include electromagnetic induction, rotating magnetic fields and asynchronous motors.",
      "points": [
        "Mechanics: Newton’s laws, energy and angular momentum",
        "Oscillations and differential equations",
        "Electrical circuits: RC, RL and RLC responses",
        "Electromagnetism: magnetic flux and induction",
        "Optics: lenses, mirrors and image formation"
      ],
      "images": []
    },
    {
      "when": "Ongoing",
      "role": "Experimental practice & measurement",
      "icon": "gauge",
      "where": "Academic interests & applied learning",
      "text": "Learning to design measurements, estimate uncertainty and interpret experimental data.",
      "more": "Laboratory work helps me connect a theoretical model with observations. In my pressure-sensor work, I examine zero offset, noise and stability, then study the voltage–pressure relationship. The wider investigation covers sensitivity, linearity, hysteresis, response time and calibration, with uncertainty considered throughout.",
      "points": [
        "Measurement protocols and repeatability",
        "Sensor characterisation and calibration",
        "Type A and type B uncertainty",
        "Regression, residuals and interpretation",
        "Technical reports and evidence-based conclusions"
      ],
      "images": []
    },
    {
      "when": "Ongoing",
      "role": "Computing for engineering",
      "icon": "terminal",
      "where": "Academic interests & applied learning",
      "text": "Using programming to support scientific learning and practical problem-solving.",
      "more": "I use Python and C# in personal projects and am strengthening my fundamentals in C. My interest in software is rooted in engineering needs: organising measurements, automating calculations, visualising results and building useful interfaces. NearlyExact is one application of this approach.",
      "points": [
        "Python and C# projects",
        "Learning C and programming fundamentals",
        "Scientific calculations and data visualisation",
        "Measurement tools and desktop interfaces"
      ],
      "images": []
    }
  ],
  "profile": {
    "headline": "Engineering student at EMINES – UM6P",
    "tagline": "I build software with Python and C#, and I enjoy turning complex ideas into practical solutions.",
    "intro": "I am Mohammed Bader Tbaïli, an engineering student at EMINES, the School of Industrial Management at Mohammed VI Polytechnic University. My academic journey brings together mathematics, physics, experimental work and engineering projects, with programming as a tool for modelling, measurement and problem-solving.",
    "about": "My interests lie in understanding physical systems and connecting theory with practical engineering. I study mathematical reasoning, mechanics, electricity and experimental methods, and apply these foundations through laboratory work and collaborative projects. Alongside my studies, I develop tools in Python and C# to organise measurements, analyse results and communicate technical ideas clearly. I am also strengthening my fundamentals in C."
  }
};
  /* ===================================================================== */

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const ico = (n) => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const hue = (i) => (i * 47 + 200) % 360; // spread hues around the colour wheel
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Academic identity also replaces the static introduction when present. */
  const setText = (selector, text) => {
    const element = $(selector);
    if (element) element.textContent = text;
  };
  const kicker = $(".hero .kicker");
  if (kicker) { // keep the icon, replace only the text
    Array.from(kicker.childNodes).filter((x) => x.nodeType === 3).forEach((x) => x.remove());
    kicker.append(document.createTextNode(CONFIG.profile.headline));
  }
  setText(".hero .lede", CONFIG.profile.tagline);
  const aboutP = $(".about > p");
  if (aboutP) aboutP.outerHTML = `<div class="intro"><p>${esc(CONFIG.profile.intro)}</p><p>${esc(CONFIG.profile.about)}</p></div>`;
  document.title = "Mohammed Bader Tbaïli | Engineering student · EMINES–UM6P";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = CONFIG.profile.intro;

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Toast ---------- */
  const toastEl = $("#toast");
  let timer;
  const toast = (msg) => {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  };

  /* ---------- Projects (expandable, with picture slots) ---------- */
  $("#rows").innerHTML = CONFIG.projects.map((p, i) => `
    <article class="proj reveal" style="--h:${p.hue};--d:${i * 0.08}s">
      <button class="row" type="button" aria-expanded="false" aria-controls="d${i}">
        <span class="yr mono">${p.year}</span>
        <span class="thumb"><img src="${p.cover}" alt="${p.title} cover" loading="lazy"><span class="ph" aria-hidden="true">${ico(p.icon)}</span></span>
        <span class="body">
          <strong>${ico(p.icon)}${p.title}</strong>
          <span class="desc">${p.desc}</span>
          <span class="tags mono">${p.tags}</span>
        </span>
        <span class="arrow" aria-hidden="true">+</span>
      </button>
      <div class="detail" id="d${i}" inert><div class="inner"><div class="in2">
        <p class="more">${p.more}</p>
        <ul class="pts">${p.points.map((t, k) => `<li style="--k:${k}">${t}</li>`).join("")}</ul>
        ${p.software.length ? `<p class="swl mono"><span>Software</span>${p.software.join(" · ")}</p>` : ""}
        <div class="gallery">${p.images.map((im) => `
          <figure class="shot">
            <img src="${im.src}" alt="${im.alt}" loading="lazy">
            
            <figcaption class="mono">${im.cap}</figcaption>
          </figure>`).join("")}</div>
        ${p.links.length ? `<p class="plinks">${p.links.map((l) => `<a class="u" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}</p>` : ""}
      </div></div></div>
    </article>`).join("");

  $$(".proj").forEach((proj) => {
    const btn = $(".row", proj), det = $(".detail", proj);
    btn.addEventListener("click", () => {
      const open = !proj.classList.contains("open");
      proj.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      det.inert = !open;
    });
  });

  // Missing pictures fall back to a labelled placeholder
  $$(".shot img, .thumb img").forEach((img) => {
    const miss = () => img.parentElement.classList.add("empty");
    img.addEventListener("error", miss);
    if (img.complete && img.naturalWidth === 0) miss();
  });

  // Lightbox for pictures that exist
  const lb = $("#lb"), lbImg = $("img", lb);
  const closeLb = () => { lb.hidden = true; };
  $$(".shot").forEach((f) => f.addEventListener("click", () => {
    if (f.classList.contains("empty")) return;
    const im = $("img", f); lbImg.src = im.src; lbImg.alt = im.alt; lb.hidden = false;
  }));
  lb.addEventListener("click", closeLb);
  addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

  /* ---------- Software grid with official logos ---------- */
  const initials = (n) => {
    const w = n.replace(/[^A-Za-z0-9+#.\s]/g, "").split(/\s+/).filter(Boolean);
    return (w.length > 1 ? w[0][0] + w[1][0] : n.slice(0, 2)).toUpperCase();
  };
  let n = 0;
  $("#tools").innerHTML = CONFIG.stack.map((cat) => `
    <div class="cat">
      <h4>${esc(cat.title)}</h4>
      <ul class="logos">${cat.items.map((it) => `
        <li class="logo" style="--h:${hue(n)};--k:${n++}" title="${esc(it.name)}">
          <span class="mark">
            <img src="${esc(it.src[0])}" data-srcs='${esc(JSON.stringify(it.src))}' data-i="0" data-name="${esc(it.name)}" alt="${esc(it.name)} logo" loading="lazy" decoding="async">
          </span>
          <span class="nm">${esc(it.name)}</span>
        </li>`).join("")}</ul>
    </div>`).join("");

  // If a logo fails, try the next source, then show a monogram.
  $("#tools").addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    const srcs = JSON.parse(img.dataset.srcs || "[]");
    const next = Number(img.dataset.i) + 1;
    if (next < srcs.length) { img.dataset.i = next; img.src = srcs[next]; return; }
    const m = document.createElement("span");
    m.className = "mono-logo";
    m.textContent = initials(img.dataset.name);
    img.replaceWith(m);
  }, true);

  /* ---------- Languages, path ---------- */
  $("#langs").innerHTML = CONFIG.languages.map((l, i) => `<li style="--h:${hue(i + 3)}"><span>${l.name}</span><span>${l.note}</span></li>`).join("");
  $("#path").innerHTML = CONFIG.path.map((p, i) => `
    <li class="reveal" style="--h:${hue(i + 1)};--d:${i * 0.07}s">
      <div class="phead" ${p.more ? `role="button" tabindex="0" aria-expanded="false" aria-controls="s${i}"` : ""}>
        <span class="when">${p.when}</span>
        <div><h3>${ico(p.icon)}${p.role}</h3><p class="where">${p.where}</p><p>${p.text}</p></div>
        ${p.img ? `<span class="thumb pthumb"><img src="${p.img}" alt="${p.role}" loading="lazy"><span class="ph" aria-hidden="true">${ico(p.icon)}</span></span>` : "<span></span>"}
        ${p.more ? `<span class="arrow" aria-hidden="true">+</span>` : "<span></span>"}
      </div>
      ${p.more ? `<div class="detail" id="s${i}" inert><div class="inner"><div class="in2">
        <p class="more">${p.more}</p>
        <ul class="pts">${p.points.map((t, k) => `<li style="--k:${k}">${t}</li>`).join("")}</ul>
        <div class="gallery">${p.images.map((im) => `
          <figure class="shot"><img src="${im.src}" alt="${im.alt}" loading="lazy"><figcaption class="mono">${im.cap}</figcaption></figure>`).join("")}</div>
      </div></div></div>` : ""}
    </li>`).join("");

  $$("#path li").forEach((li) => {
    const head = $(".phead", li), det = $(".detail", li);
    if (!det) return;
    const toggle = () => {
      const open = !li.classList.contains("open");
      li.classList.toggle("open", open);
      head.setAttribute("aria-expanded", String(open));
      det.inert = !open;
    };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });
  $$("#path .thumb img, #path .shot img").forEach((img) => {
    const miss = () => img.parentElement.classList.add("empty");
    img.addEventListener("error", miss);
    if (img.complete && img.naturalWidth === 0) miss();
  });
  $$("#path .shot").forEach((f) => f.addEventListener("click", () => {
    if (f.classList.contains("empty")) return;
    const im = $("img", f); lbImg.src = im.src; lbImg.alt = im.alt; lb.hidden = false;
  }));

  // Probe every picture up front: missing ones are hidden instead of showing a placeholder.
  $$(".shot img, .thumb img").forEach((img) => {
    const t = new Image();
    t.onerror = () => img.parentElement.classList.add("empty");
    t.src = img.getAttribute("src");
  });

  /* ---------- Email ---------- */
  const mail = $("#mail");
  $("#mailText").textContent = CONFIG.email;
  mail.href = `mailto:${CONFIG.email}`;
  $("#copyBtn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(CONFIG.email); toast("Email copied"); }
    catch {
      const r = document.createRange(); r.selectNodeContents(mail);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      toast("Press Ctrl+C to copy");
    }
  });

  /* Currently working on: uses the same chooser and panel behaviour. */
  const choices = $(".choices");
  const referencePanel = $("[data-panel]");
  if (choices && referencePanel && !$("#currently-working")) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.dataset.view = "currently-working";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "currently-working");
    button.innerHTML = `${ico("layers")}Currently working on <span aria-hidden="true">↓</span>`;
    choices.append(button);

    const panel = document.createElement("section");
    panel.id = "currently-working";
    panel.className = referencePanel.className;
    panel.classList.remove("reveal", "rise");
    panel.dataset.panel = "currently-working";
    panel.hidden = true;
    panel.setAttribute("aria-labelledby", "currently-working-title");
    const work = [
      {
        title: "NearlyExact · Laboratory database",
        text: "I am building NearlyExact’s database of laboratories and equipment to make instrument information easier to find and use in experimental work.",
        points: ["Organising laboratories and their equipment", "Structuring instrument specifications and uncertainty data", "Connecting the catalogue to the measurement workflow"]
      },
      {
        title: "NearlyExact · New features",
        text: "Alongside the laboratory database, I am adding new features to NearlyExact to support measurements, uncertainty calculations and experimental analysis.",
        points: ["Expanding the app’s capabilities", "Improving the measurement workflow", "Refining the interface for laboratory use"]
      }
    ];
    panel.innerHTML = `
      <h2 class="label" id="currently-working-title">${ico("layers")}Currently working on</h2>
      <p class="more">Currently developing NearlyExact: building the laboratory database and adding new features.</p>
      <div class="path">${work.map((item) => `
        <article style="padding-block:22px;border-bottom:1px solid var(--line)">
          <h3 style="margin:0 0 10px;font-size:18px">${esc(item.title)}</h3>
          <p class="more">${esc(item.text)}</p>
          <ul class="pts">${item.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>
        </article>`).join("")}</div>`;
    referencePanel.after(panel);
  }

  /* Show only the chosen content. Clicking again closes it. */
  const panels = $$("[data-panel]");
  const controls = $$("[data-view]");
  let activeView = null;
  function selectView(view) {
    activeView = view;
    panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== view; });
    controls.forEach((button) => {
      button.setAttribute("aria-expanded", String(button.dataset.view === view));
    });
    const target = view && panels.find((p) => p.dataset.panel === view);
    if (target && target.getBoundingClientRect().top > innerHeight * 0.6) {
      const calmNow = matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => target.scrollIntoView({ behavior: calmNow ? "auto" : "smooth", block: "start" }));
    }
  }
  controls.forEach((button) => button.addEventListener("click", () => {
    const view = button.dataset.view;
    selectView(activeView === view ? null : view);
  }));
  $(".brand").addEventListener("click", () => selectView(null));

  // Keep the academic choice prominent; start with all panels closed.
  const academicSection = $("#education") || $("#path")?.closest("section");
  const academicPanel = $("#path")?.closest("[data-panel]");
  if (academicSection) {
    const label = $(".label", academicSection);
    if (label) label.textContent = "Academic journey";
  }
  if (academicPanel) {
    const view = academicPanel.dataset.panel;
    const choice = controls.find((button) => button.dataset.view === view && button.classList.contains("choice"));
    if (choice) choice.parentElement.prepend(choice);
  }
  selectView(null);


  /* ---------- Reveal on scroll ---------- */
  // Panels start hidden, so reveal elements are observed when they become visible.
  const els = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Motion layer ---------- */
  $$(".name .w").forEach((w) => {
    const d = parseFloat(w.style.getPropertyValue("--d")) || 0;
    w.innerHTML = Array.from(w.textContent).map((c, i) => `<span class="ch" style="--i:${i};--d:${d}s">${c}</span>`).join("");
  });

  const bar = $("#progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (fine && !calm) {
    const root = document.documentElement, ring = $(".glow");
    let tx = innerWidth / 2, ty = innerHeight / 3, x = tx, y = ty;
    addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; ring.classList.add("on"); }, { passive: true });
    document.addEventListener("pointerleave", () => ring.classList.remove("on"));
    (function loop() {
      x += (tx - x) * 0.1; y += (ty - y) * 0.1;
      root.style.setProperty("--mx", x.toFixed(1) + "px"); root.style.setProperty("--my", y.toFixed(1) + "px");
      requestAnimationFrame(loop);
    })();

    $$(".choice, .copy, .brand").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.12}px ${(e.clientY - r.top - r.height / 2) * 0.2}px`;
      });
      el.addEventListener("pointerleave", () => { el.style.translate = ""; });
    });

    $$(".row").forEach((row) => row.addEventListener("pointermove", (e) => {
      const r = row.getBoundingClientRect();
      row.style.setProperty("--rx", e.clientX - r.left + "px");
      row.style.setProperty("--ry", e.clientY - r.top + "px");
    }));
  }
})();
