const filterEls = document.querySelectorAll(".filter input");
filterEls.forEach(el => el.addEventListener("change", onFilter.bind(el, el)))


function onFilter(el)
{
	const v = el.getAttribute("data-v");
	console.log(v, el.checked);
}

