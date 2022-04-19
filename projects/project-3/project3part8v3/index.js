
const airtableApiKey = "key0zgkz38dpB9LQp";
const tableUrl = "https://api.airtable.com/v0/appL2736bTburkkDY/Table%202";
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// DOM References
const bodyElement = document.querySelector("main#app");
const artisticImagesContainerElement = document.querySelector("div#artistic-images")
const futureImagesContainerElement = document.querySelector("div#future-images")
const colorsImagesContainerElement = document.querySelector("div#colors-images")
// Application
fetch(authenticatedUrl)
  .then((res) => res.json())
  .then((data) => {
    const illustrations = data.records;
    for (let index = 0; index < illustrations.length; index++) {
      const illustration = illustrations[index];
      const title = illustration.fields.Title;
      const imageUrl = illustration.fields.Images[0].url;
      const containerElement = document.createElement("div");
      containerElement.classList.add("container");
      const imageElement = document.createElement("img");
    imageElement.classList.add("image");
      imageElement.setAttribute("src", imageUrl);
      const titleElement = document.createElement("p");
      titleElement.classList.add("title");
      titleElement.innerHTML = title;
      if(illustration.fields.Type === "artistic") {
        artisticImagesContainerElement.appendChild(containerElement);
        containerElement.appendChild(imageElement);
        containerElement.appendChild(titleElement);
      } else if (illustration.fields.Type === "colors") {
      } else if (illustration.fields.Type === "future ") {
      }else {
        bodyElement.appendChild(containerElement);
        containerElement.appendChild(imageElement);
        containerElement.appendChild(titleElement);
      }

    }
  })
  .catch((error) => {
    console.log(error);
  });