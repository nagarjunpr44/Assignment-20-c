const random_fact=document.getElementById('random_fact');
const anime_button=document.getElementById('fact_button');

function getRandomanimequote() {
	try{

		fetch('https://animechan.vercel.app/api/random')
		.then(res => res.json())
		.then(data => {
				random_fact.innerHTML = `<p class="container">${data.quote}</p>`;
			
		});
	}
		catch(e)
		{
			console.log(e);
		}
		
}
anime_button.addEventListener('click',getRandomanimequote)

