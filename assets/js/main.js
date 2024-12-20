function toggleMenu() {
  const menubar = document.querySelector(".menubar");
  const overlay = document.querySelector(".overlay");
  const hamburger = document.querySelector(".hamburger");

  menubar.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

  const links = document.querySelectorAll(".menubar ul li a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menubar.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

const categories = {
  graphic: [
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/01 Roll_up_Mockup Print_.jpg",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/02 Banner_Frame_Stand_Mockup_.jpg",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/03 Roll_up_Mockup_.png",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/04 Billboard_Mockup.png",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/05 Book_Mockup_A.jpg",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/06 Book_Mockup_A Inside.jpg",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/07 Magazine Mockup.jpg",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/08 Magazine Mockup B.jpg",
      alt: "Graphic Design 1",
      design_categories: "Print Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/01 Raise Your Glass!.png",
      alt: "Graphic Design 1",
      design_categories: "Digital Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/Float With Smile.png",
      alt: "Graphic Design 1",
      design_categories: "Digital Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/Tolip- African Event SM (2).png",
      alt: "Graphic Design 1",
      design_categories: "Digital Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/when was your last trip.png",
      alt: "Graphic Design 1",
      design_categories: "Digital Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/01 Desk_Calendar_Mockup_1.jpg",
      alt: "Graphic Design 1",
      design_categories: "Stationery Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/03 Mousepad_Mockup_1.jpg",
      alt: "Graphic Design 1",
      design_categories: "Stationery Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/04 Folder_Mockup_2.jpg",
      alt: "Graphic Design 1",
      design_categories: "Stationery Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/05 Folder_Mockup_1.jpg",
      alt: "Graphic Design 1",
      design_categories: "Stationery Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/06 Coaster_Mockup_1.jpg",
      alt: "Graphic Design 1",
      design_categories: "Stationery Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/01 Total Brochure_Mockup cover.png",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/02 Total Brochure_Mockup inside.png",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/03 Brochure-Mockup Marketing.jpg",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/04 Square_Trifold_Brochure_Mockup_1.jpg",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/05 Flyer_Mockup_A.jpg",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/06 Flyer_Mockup_B.jpg",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/07 Flyer_Mockup.png",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/08 Door_Hanger Menu_Mockup.png",
      alt: "Graphic Design 1",
      design_categories: "Marketing Collateral Design",
    },
  ],
  branding: [
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-01.png",
      alt: "Branding 1",
      design_categories: "Logo Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-02.png",
      alt: "Branding 2",
      design_categories: "Logo Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-03.png",
      alt: "Branding 2",
      design_categories: "Logo Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-04.png",
      alt: "Branding 2",
      design_categories: "Logo Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/01 Roll_up_Mockup_.jpg",
      alt: "Branding 2",
      design_categories: "Event Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/02 SM.png",
      alt: "Branding 2",
      design_categories: "Event Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/03 Brochure-Mockup.jpg",
      alt: "Branding 2",
      design_categories: "Event Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/04 Pen Mockup.png",
      alt: "Branding 2",
      design_categories: "Event Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/05 T-Shirt_Mockup_1.jpg",
      alt: "Branding 2",
      design_categories: "Event Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/06 Maleda Award-01.png",
      alt: "Branding 2",
      design_categories: "Event Collateral Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/03 PACKAGING DESIGN/01 Paint_Can_Mockup_1.jpg",
      alt: "Branding 2",
      design_categories: "Packaging Design",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/03 PACKAGING DESIGN/02 ELGEL Cake Box Mockup B Updated.jpg",
      alt: "Branding 2",
      design_categories: "Packaging Design",
    },
  ],
  dazzle: [
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/01 Anniversary Digital Postcard 1.png",
      alt: "Dazzle Special 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/02 Birthday Digital Postcard 1.png",
      alt: "Dazzle Special 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/03 Anniversary Digital Postcard 1.png",
      alt: "Dazzle Special 3",
    },
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/04 Amh Birthday Digital Postcard 1.png",
      alt: "Dazzle Special 3",
    },
  ],
};

function showCategory(category) {
  const contentDiv = document.getElementById("content");
  const headerDiv = document.getElementById("header");

  const categoryImagesWithSubCategories = categories[category].reduce(
    (acc, item) => {
      const subCategory = item.design_categories || "";
      if (!acc[subCategory]) {
        acc[subCategory] = [];
      }
      acc[subCategory].push(item);
      return acc;
    },
    {}
  );

  const categoryImages = Object.entries(categoryImagesWithSubCategories)
    .map(
      ([subCategory, images]) => `
      <div class="subcategory-container">
        <h3 class="subcategory-title">${subCategory}</h3>
        <div class="images-list">
          ${images
            .map(
              (item) => `
                <div class="image-item">
                  <a href="${item.src}" data-lightbox="models" data-title="${item.alt}">
                    <img src="${item.src}" alt="${item.alt}" />
                  </a>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  const categoryButtons = `
  <div class="category-buttons">
    <span data-category="graphic" class="button">Graphic Design</span>
    <span class="vertical-bar"></span>
    <span data-category="branding" class="button">Branding</span>
    <span class="vertical-bar"></span>
    <span data-category="dazzle" class="button">Dazzle’s Special</span>
  </div>
`;
  let categoryTitle = "";
  if (category === "graphic") {
    categoryTitle = "Graphic Design";
  } else if (category === "branding") {
    categoryTitle = "Branding";
  } else if (category === "dazzle") {
    categoryTitle = "Dazzle Special";
  }

  const title = `<div class="category-title"><h1>${categoryTitle}</h1></div>`;
  headerDiv.innerHTML = `<div class="portfolio-section">${categoryButtons}</div>`;
  contentDiv.innerHTML = `
    <div class="image-section">
      ${title}
      <div >${categoryImages}</div>
    </div>
  `;
}

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.closest(".image-item")) {
    const category = target
      .closest(".image-item")
      .getAttribute("data-category");
    if (category) {
      showCategory(category);
    }
  }
  if (target.closest(".button")) {
    const category = target.closest(".button").getAttribute("data-category");
    if (category) {
      showCategory(category);
    }
  }
});

window.onload = function () {
  window.scrollTo(0, 0);
};
