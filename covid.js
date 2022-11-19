const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a93b2af4f4msh99c48370e1b5a84p1488f4jsn2d61036088bc',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(response => {
		console.log(response.countries_stat);
		let tabdata=[];
		response.countries_stat.map((values)=>{
			tabdata+=`
		<tr>
		<td>${values.country_name}</td>
		<td>${values.cases}</td>
		<td>${values.total_recovered}</td>
		<td>${values.deaths}</td>
		</tr>
		`
		});
		
		document.getElementById("table_body").innerHTML = tabdata;
	})
	 .catch(err => console.error(err));