const filterEls = document.querySelectorAll(".filter input");
filterEls.forEach(el => el.addEventListener("change", onFilter.bind(el, el)))


function onFilter(el)
{
	const v = el.getAttribute("data-v");
	console.log(v, el.checked);
}

const headers = document.querySelectorAll("h1");
for (const el of headers)
{
	const link = document.createElement("a");
	link.href = `./projects.html#${el.id}`;
	el.appendChild(link);
}

