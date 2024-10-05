// Current Date for Title
const dateElement = document.getElementById("date");

let currentDate = new Date();

console.log(currentDate);

// "dateOptions" Object will allow us to change the format retrieve from current Date
let dateOptions = {year: "numeric", month: "long", day: "numeric"};

dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);


// Rapid API code to retreieve twitter trends
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '8c401b6549mshf3e85f4b5dfd6e3p1b4ac2jsnda9eac194062',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// // Dummy Data
// let myPost = {
// 	name:"#AlwaysToYouHannie",
// 	query:"%23AlwaysToYouHannie",
// 	url:"search?q=%23AlwaysToYouHannie",
// 	volume:98800,
// 	volumeShort:"97.9K",
// 	domainContext:"Korean music",
// 	groupedTrends:[]
// }

// // Array of Objects
// let graphData = [
// {
// 	name:"2ne1",
// 	query:"2ne1",
// 	url:"search?q=2ne1",
// 	volume:394000,
// 	volumeShort:"394K",
// 	domainContext:"K-pop",
// 	groupedTrends:[]
// },
// {
// 	name:"#FudgeeBarrxBINI",
// 	query:"%23FudgeeBarrxBINI",
// 	url:"search?q=%23FudgeeBarrxBINI",
// 	volume:23200,
// 	volumeShort:"22.6K",
// 	domainContext:"",
// 	groupedTrends:[]
// }
// ];

// // push() method - adds element at the end of an array
// graphData.push(myPost);

// // End of Dummy Data


let graphData = [];

// Fetch Request

fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

	for (let i=0; i<25; i++) {
		graphData.push(
			{
				"name": data.trends[i].name,
				"volume": data.trends[i].volume
			}
		)
	}

	// Copy Paste to Fetch Reqst

	// map method is used to loop through all elements
	// items of an array and execute some code
	// it creates a new array

	// This will create a topics variable that contains the "object.name"

	let topics = graphData.map(object => {
		console.log(object);
		console.log(object.name);
		return object.name;
	})

	console.log(topics);

	let volumes = graphData.map(object => {
		console.log(object.volume);
		return object.volume
	})


	const myChart = document.getElementById('myChart');

	let barChart = new Chart(myChart, {
	    type: 'bar',
	    data: {
	        labels: topics,
	        datasets: [{
	            label: '# of Tweets',
	            data: volumes,
	        	borderWidth: 2,
	        	backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
			    ],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
			    ],
				hoverBackgroundColor: [
			    	'rgb(255, 99, 132)',
			    	'rgb(255, 159, 64)',
			    	'rgb(255, 205, 86)',
			    	'rgb(75, 192, 192)',
			    	'rgb(54, 162, 235)',
			    	'rgb(153, 102, 255)',
			    	'rgb(201, 203, 207)'
			    ]
	        }]
	    },
	    options: {
	        indexAxis: 'y',
	        scales: {
		        y: {
		          beginAtZero: true
		        }
	        }
	    }
	});

	// End of Copy Paste to Fetch Reqst
});

// // Copy Paste to Fetch Reqst

// // map method is used to loop through all elements
// // items of an array and execute some code
// // it creates a new array

// // This will create a topics variable that contains the "object.name"

// let topics = graphData.map(object => {
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// })

// console.log(topics);

// let volumes = graphData.map(object => {
// 	console.log(object.volume);
// 	return object.volume
// })


// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//         labels: topics,
//         datasets: [{
//             label: '# of Tweets',
//             data: volumes,
//         	borderWidth: 2,
//         	backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(255, 159, 64, 0.2)',
// 				'rgba(255, 205, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(153, 102, 255, 0.2)',
// 				'rgba(201, 203, 207, 0.2)'
// 		    ],
// 			borderColor: [
// 				'rgb(255, 99, 132)',
// 				'rgb(255, 159, 64)',
// 				'rgb(255, 205, 86)',
// 				'rgb(75, 192, 192)',
// 				'rgb(54, 162, 235)',
// 				'rgb(153, 102, 255)',
// 				'rgb(201, 203, 207)'
// 		    ],
// 			hoverBackgroundColor: [
// 		    	'rgb(255, 99, 132)',
// 		    	'rgb(255, 159, 64)',
// 		    	'rgb(255, 205, 86)',
// 		    	'rgb(75, 192, 192)',
// 		    	'rgb(54, 162, 235)',
// 		    	'rgb(153, 102, 255)',
// 		    	'rgb(201, 203, 207)'
// 		    ]
//         }]
//     },
//     options: {
//         indexAxis: 'y',
//         scales: {
// 	        y: {
// 	          beginAtZero: true
// 	        }
//         }
//     }
// });

// // End of Copy Paste to Fetch Reqst