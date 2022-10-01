const totop = document.querySelector(".totop");
window.addEventListener("scroll", () =>
{
	totop.classList.toggle("totop-visible", window.scrollY > 450);
});
totop.addEventListener("click", () => window.scrollTo({ behavior: "smooth", top: 0 }));