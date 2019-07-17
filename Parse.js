
const fs = require("fs")

let temp = JSON.parse(fs.readFileSync("./results_AkkaProjects_post.json"))
let tab = Object.keys(temp).map(key=>{
	return temp[key].properties.commit.files.map(c=>`${c.commit.author.name.replace(/\n/g,"")}>>>${c.html_url}\n`).join("")
}).join("");
fs.writeFileSync("./list.csv",tab)


