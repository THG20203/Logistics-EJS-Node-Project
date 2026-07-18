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

export const insightsPage = (req, res) => {
  res.render("insights", {
    pageTitle: "Insights",
  });
};

// export const companyPage = (req, res) => {
//   res.render("company", {
//     pageTitle: "Company",
//   });
// };

// export const contactPage = (req, res) => {
//   res.render("contact", {
//     pageTitle: "Contact",
//   });
// };
