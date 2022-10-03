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
	const tags = [];
	for (const filterEl of filterEls)
	{
		const tag = filterEl.getAttribute("data-v");
		if (filterEl.checked) tags.push(tag);
	}

	for (const pj of projects)
	{
		pj.style.display = "";
		if (tags.length == 0) continue;
		
		const pj_tags = pj.getAttribute("data-tags").split(";");
		let found = false;
		for (const pj_tag of pj_tags)
		{
			for (const tag of tags)
			{
				if (pj_tag == tag)
				{
					found = true;
					break
				}
			}
			if (found) break
		}
		if (!found) pj.style.display = "none";
	}
}