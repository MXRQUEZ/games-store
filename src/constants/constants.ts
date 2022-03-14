// header
export const storeName = "Game $tore";

// footer
export const yearNow = new Date().getFullYear();
export const copyrights = `${yearNow} ${storeName} | All rights reserved | Terms Of Service | Privacy`;

// about
export const about =
  "Game Store is a video game digital distribution service. It was launched as a standalone software client in September 2003 as a way to provide automatic updates for their games, and expanded to include games from third-party publishers. Game Store has also expanded into an online web-based and mobile digital storefront. Game Store offers digital rights management (DRM), server hosting, video streaming, and social networking services. It also provides the user with installation and automatic updating of games, and community features such as friends lists and groups, cloud storage, and in-game voice and chat functionality.\n" +
  "\n" +
  "The software provides a freely available application programming interface, which developers can use to integrate many of Game Store's functions into their products, including in-game achievements, microtransactions, and support for user-created content through Steam Workshop. Though initially developed for use on Microsoft Windows operating systems, versions for macOS and Linux were later released. The platform also offers a small selection of other content, including design software, hardware, game soundtracks, anime, and films.\n" +
  "\n" +
  "The Game Store platform is the largest digital distribution platform for PC gaming, holding around 75% of the market share in 2013. By 2017, users purchasing games through Steam totaled roughly US$4.3 billion, representing at least 18% of global PC game sales. By 2019, the service had over 34,000 games with over 95 million monthly active users. The success of Game Store has led to the development of a line of Steam Machine microconsoles, which include the GS-OS operating system and Game Store Controllers, Game Store Link devices for local game streaming, and the Game Store Deck, a handheld personal computer system tailored for running Game Store games.";
export const gmail = "Gmail: svistunss.py@gmail.com";
export const gitHubLink = "https://github.com/MXRQUEZ";
export const gitHubRepoLink = "https://github.com/MXRQUEZ/js-react";

// forms
export const defaultErrorMessage = "Error!";
export const allFieldsRequired = "All fields are required";
export const userInvalidMessage = "Login or password is invalid";
export const userExistsMessage = "User with this login already exists";
export const requiredFieldMessage = "This field is required!";

export const loginLabel = "login";
export const loginIconClass = "fa fa-solid fa-address-card";
export const loginMaxLength = 20;
export const loginMinLength = 5;
export const loginLengthMessage = `Login length must be between ${loginMinLength} and ${loginMaxLength}`;

export const usernameMaxLength = 20;
export const usernameMinLength = 5;
export const usernameLengthMessage = `Username length must be between ${usernameMinLength} and ${usernameMaxLength}`;

export const profileDescMaxLen = 150;
export const descriptionMinLen = 1;
export const productDescMaxLen = 300;
export const productDescMinLen = 30;
export const productDescLenMessage = "Too small description";

export const passwordLabel = "password";
export const passwordIconClass = "fa fa-solid fa-lock";
export const passwordMinLength = 6;
export const passwordLengthMessage = `Min password length is ${passwordMinLength} symbols`;
export const passwordRepeatLabel = "repeat password";
export const passwordRepeatMessage = "The passwords do not match";

export const pricePattern = /^\d+(\.\d\d)?$/;
export const pricePatternMessage = "Price must contain only numbers with two decimal places";
