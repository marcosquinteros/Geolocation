const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44f33b0f3dmsh41f8b9f5124aea3p1cfd39jsn494002689392',
		'X-RapidAPI-Host': 'ip-geo-location4.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location4.p.rapidapi.com/?ip=${ip}`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}

const $ = selector => document.querySelector(selector)
const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');
const $leftSection = $('#left-section');
$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return 

// $submit.setAttribute('disabled', '')
// $submit.setAttribute('aria-busy','true')

    const ipInfo = await fetchIpInfo(value)
    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')    
    element.classList.remove('left-section');
})


