const headers = document.querySelectorAll("h1");
for (const el of headers)
{
	const link = document.createElement("a");
	link.href = `./projects.html#${el.id}`;
	el.appendChild(link);
}


const filterEls = document.querySelectorAll(".filter input");
filterEls.forEach(el => el.addEventListener("change", onFilter.bind(el, el)))

const projects = document.querySelectorAll(".project");


function onFilter(el)
{
	const tag = el.checked ? el.getAttribute("data-v") : null;
	for (const filterEl of filterEls)
	{
		if (filterEl == el) continue;
		filterEl.checked = false;
	}

	for (const pj of projects)
	{
		pj.style.display = "";
		if (!tag) continue;

		const pj_tags = pj.getAttribute("data-tags").split(";");
		let hasTag = pj_tags.includes(tag);
		if (!hasTag) pj.style.display = "none";
	}
}