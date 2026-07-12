/* Controller file does NOT import the route file because the controller should not care 
what URL triggered it. It's only job is to render the page. */

/* homePage controller render function */
export const homePage = (req, res) => {
  res.render("index", {
    pageTitle: "Home",
  });
};

export const servicesPage = (req, res) => {
  res.render("services", {
    pageTitle: "Services",
  });
};

export const fleetPage = (req, res) => {
  res.render("fleet", {
    pageTitle: "Fleet",
  });
};

export const caseStudiesPage = (req, res) => {
  res.render("caseStudies", {
    pageTitle: "Case Studies",
  });
};

// export const aboutPage = (req, res) => {
//   res.render("about", {
//     pageTitle: "About",
//   });
// };

// export const contactPage = (req, res) => {
//   res.render("contact", {
//     pageTitle: "Contact",
//   });
// };
