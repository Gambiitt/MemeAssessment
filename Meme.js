//alert('hi from js')
const imgInput = document.querySelector("#imgInput");
const topTextInput = document.querySelector("#topText");
const bottomTextInput = document.querySelector("#bottomText");
const meme = document.querySelector("#meme");

let image;

imgInput.addEventListener("change", () => {
const imgUrl = URL.createObjectURL(imgInput.files[0]);
console.log(imgUrl);

image = new Image();
image.src = imgUrl;


image.addEventListener("load", () => {
    makeMeme(meme, image, topTextInput.value, bottomTextInput.value);
}, {once:true});
});

function makeMeme(meme, image, topText, bottomText){
  const ctx = meme.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 15);
  const yOffSet = height / 25;


//make backgound

  meme.width = width;
  meme.height = height;
  ctx.drawImage(image, 0,0);


//style text

  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 5);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-sarif`;

  //add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffSet);
  ctx.fillText(topText, width / 2, yOffSet);
//add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffSet);
  ctx.fillText(bottomText, width / 2, height - yOffSet);
}