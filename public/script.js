function naytaSivu(sivu) {
    const sisalto = document.getElementById('sisalto');

    if (sivu === 'etusivu') {
        sisalto.innerHTML = `
            <h2>Tervetuloa TechNova Oy:n sivuille!</h2>
            <p>Tarjoamme moderneja IT-ratkaisuja ja web-kehitystä yrityksille.</p>
        `;
    } else if (sivu === 'yritys') {
        sisalto.innerHTML = `
            <h2>Yritysesittely</h2>
            <p>TechNova Oy on vuonna 2020 perustettu suomalainen teknologiayritys. Erikoisalaamme ovat pilvipalvelut ja räätälöidyt verkkosovellukset.</p>
        `;
    } else if (sivu === 'henkilosto') {
        sisalto.innerHTML = '<h2>Henkilöstö</h2><p>Ladataan tietoja...</p>';
        
        fetch('/api/henkilosto')
            .then(response => response.json())
            .then(data => {
                let html = '<h2>Henkilöstö</h2>';
                data.forEach(henkilo => {
                    html += `
                        <div class="kortti">
                            <h3>${henkilo.nimi}</h3>
                            <p><strong>Tehtävä:</strong> ${henkilo.tehtava}</p>
                            <p><strong>Sähköposti:</strong> ${henkilo.sahkoposti}</p>
                        </div>
                    `;
                });
                sisalto.innerHTML = html;
            })
            .catch(error => {
                sisalto.innerHTML = '<p>Virhe ladattaessa henkilöstötietoja.</p>';
            });
    } else if (sivu === 'yhteystiedot') {
        sisalto.innerHTML = `
            <h2>Yhteystiedot</h2>
            <p><strong>Osoite:</strong> Esimerkkikatu 12, 00100 Helsinki</p>
            <p><strong>Puhelin:</strong> 040 123 4567</p>
            <p><strong>Sähköposti:</strong> info@technova.fi</p>
        `;
    }
}

// Ladataan etusivu automaattisesti kun sivu avataan
window.onload = () => naytaSivu('etusivu');