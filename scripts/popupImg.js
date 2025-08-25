const popup = document.createElement("div");
popup.classList.add("popup");
popup.addEventListener("click", e => { if (e.target == popup) popupClose(); });
window.addEventListener("keyup", e => { if (e.key == "Escape") popupClose(); });
document.body.appendChild(popup);

const popupBody = document.createElement("div");
popupBody.classList.add("popup-body");
popup.appendChild(popupBody);

const popupButton = document.createElement("button");
popupButton.classList.add("popup-close");
popupButton.addEventListener("click", popupClose);
popupBody.appendChild(popupButton);

const popupImgEl = document.createElement("img");
const popupVideoEl = document.createElement("video");
popupBody.appendChild(popupImgEl);
popupBody.appendChild(popupVideoEl);

popupVideoEl.autoplay = true;
popupVideoEl.loop = true;
popupVideoEl.muted = true;


const imgs = document.querySelectorAll(".pimg");
imgs.forEach(el => el.addEventListener("click", popupImg.bind(el, el)))

function popupImg(img)
{
	popup.style.display = "flex";
	popupVideoEl.style.display = "none";
	popupImgEl.style.display = "none";
	const src = img.getAttribute("src") ?? "";
	if (src.endsWith(".mp4"))
	{
		popupVideoEl.style.display = "";
		popupVideoEl.setAttribute("src", src);
	}
	else
	{
		popupImgEl.style.display = "";
		popupImgEl.setAttribute("src", src);
	}
}
function popupClose()
{
	popup.style.display = "none"
}
