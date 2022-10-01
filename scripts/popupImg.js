const popup = document.createElement("div");
popup.classList.add("popup");
popup.addEventListener("click", e => { if (e.target == popup) popupClose() });
document.body.appendChild(popup);

const popupBody = document.createElement("div");
popupBody.classList.add("popup-body");
popup.appendChild(popupBody);

const popupButton = document.createElement("button");
popupButton.classList.add("popup-close");
popupButton.addEventListener("click", popupClose);
popupBody.appendChild(popupButton);

const popupImgEl = document.createElement("img");
popupBody.appendChild(popupImgEl);


const imgs = document.querySelectorAll(".pimg");
imgs.forEach(el => el.addEventListener("click", popupImg.bind(el, el)))

function popupImg(img)
{
	popup.style.display = "flex";
	popupImgEl.setAttribute("src", img.getAttribute("src"));
}
function popupClose()
{
	popup.style.display = "none"
}
