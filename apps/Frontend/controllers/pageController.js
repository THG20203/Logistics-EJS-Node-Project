/* Controller file does not import the route file because the controller should not care 
what URL triggered it. It's only job is to render the page. */

export const homePage = (req, res) => {
  res.render("index", {
    pageTitle: "Home",
  });
};

// export const aboutPage = (req, res) => {
//   res.render("about", {
//     pageTitle: "About",
//   });
// };

// export const servicesPage = (req, res) => {
//   res.render("services", {
//     pageTitle: "Services",
//   });
// };

// export const contactPage = (req, res) => {
//   res.render("contact", {
//     pageTitle: "Contact",
//   });
// };
