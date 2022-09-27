const filterEls = document.querySelectorAll(".filter input");
filterEls.forEach(el => el.addEventListener("change", onFilter.bind(el, el)))


function onFilter(el)
{
	const v = el.getAttribute("data-v");
	console.log(v, el.checked);
}


const popup = document.getElementById("popup");
const popupImgEl = document.getElementById("popup-img");
document.getElementById("popup-close").addEventListener("click", popupClose);
popup.addEventListener("click", e => { if (e.target == popup) popupClose() });

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