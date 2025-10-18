// Highlight active menu link on scroll
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("header nav a");

document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = 2; // ระยะเผื่อหัวเว็บ
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // ปรับให้ตรง header
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      const offset = 2; // ระยะห่างจาก header

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    });
  });
  // members
});

const memberGrid = document.getElementById("memberGrid");
MEMBERS.forEach((m) => {
  const card = document.createElement("div");
  card.className =
    "rounded-2xl border border-gray-700 bg-transparent shadow-sm hover:shadow-md transition p-4 text-center";

  card.innerHTML = `
    <div class="flex flex-col items-center gap-4">
      <img class="w-40 h-40 rounded-full object-cover border border-gray-600" 
           src="${m.img}" 
           alt="${m.fullName}">
      <div>
        <p style="color:#F2A805; font-weight:600; font-size:1.1rem;">
          ${m.fullName}
        </p>
        <p style="color:#ddd; font-size:0.9rem;">
          รหัส ${m.studentId}
        </p>
        <p style="color:#ccc; font-size:0.9rem;">
          สาขา ${m.major} • Sec ${m.section}
        </p>
      </div>
    </div>`;
  memberGrid.appendChild(card);
});

