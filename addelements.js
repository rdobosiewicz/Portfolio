//Dynamiczna zmiana treści na podstronie Moje Umiejętności

var b1 = document.querySelector("#b1"),
	b2 = document.querySelector("#b2"),
	b3 = document.querySelector("#b3"),
	b4 = document.querySelector("#b4"),
	b5 = document.querySelector("#b5"),
	b6 = document.querySelector("#b6"),
	b7 = document.querySelector("#b7");

b1.addEventListener("click", function() {clickOnButton(1);});
b2.addEventListener("click", function() {clickOnButton(2);});
b3.addEventListener("click", function() {clickOnButton(3);});
b4.addEventListener("click", function() {clickOnButton(4);});
b5.addEventListener("click", function() {clickOnButton(5);});
b6.addEventListener("click", function() {clickOnButton(6);});
b7.addEventListener("click", function() {clickOnButton(7);});

function clickOnButton(nr){
	var inContent = document.querySelector("#presentation p");
	var inH = document.querySelector("#presentation h1");
	
	switch(nr){
		case 1:
			inContent.innerHTML="Moja przygoda z językiem HTML rozpoczeła się w lutym 2018 roku. Uczyłem się tego języka za pośrednictwem kanału youtubowego <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCzn6vAfspIcagLax1fck_jw\">&#34;Pasja informatyki&#34;</a>. Następnie postanowiłem  przeczytać książkę J. Ducketta pod tytułem: &#34;HTML i CSS. Zaprojektuj i zbuduj witrynę WWW&#34; oraz kurs na udemy pt. &#34;Kurs Tworzenia Stron WWW w HTML i CSS od Podstaw do Eksperta&#34;. W trakcie nauki tworzyłem wiele kodu, a strona na której się znajdujemy została w całości napisana przeze mnie. Poznałem również standard HTML 5, który również został wykorzystany w niniejszym projekcie.";
			inH.textContent="JĘZYK HTML";
			break;
		case 2:
			inContent.innerHTML="Moja przygoda z językiem CSS rozpoczeła się w lutym 2018 roku, wraz z nauką języka HTML. Tutaj również wykorzystałem takie źródła wiedzy jak kanał youtubowy <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCzn6vAfspIcagLax1fck_jw\">&#34;Pasja informatyki&#34;</a>, &#34;Kurs Tworzenia Stron WWW w HTML i CSS od Podstaw do Eksperta&#34; oraz książkę J. Ducketta pod tytułem: &#34;HTML i CSS. Zaprojektuj i zbuduj witrynę WWW &#34;. Całość wyglądu strony został opracowany przeze mnie. Warto jednak zwrócić uwagę, że inspirowałem się wieloma stronami www znajdujących się w sieci oraz projektami, które tworzyłem podczas nauki. Do stworzenia tej strony wykorzystałem atrybuty CSS3.";
			inH.textContent="JĘZYK CSS";
			break;
		case 3:
			inContent.innerHTML="Ucząc się i poznawając tajniki HTML i CSS naturalnie doszedłem do etapu, w którym dostrzegłem potrzebe uatrakcyjniania stron za pomocą języka JavaScript. Doskonale wiedziałem, że będzie to już zupewłnie inny proces nauki. Moje zadanie jednak było o tyle ułatwione, że wcześniej już uczyłem się takich języków programowania jak C i C++. Poznałem wtedy wiele przydatnych sposobów rozwiązywania problemów. Dlatego nauka, chociaż również czasochłonna, przychodziła mi dosyć sprawnie. Moja nauka JS rozpoczeła się tradycyjnie od kanału youtubowego <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCzn6vAfspIcagLax1fck_jw\">&#34;Pasja informatyki&#34;</a>, a następnie kursu na udemy &#34;JavaScript od podstaw&#34; oraz książki J. Ducketta pod tytułem: &#34;JavaScript i jQuery – interaktywne strony WWW dla każdego&#34;. Wszystkie elementy interaktywne znajdujące się na tej stronie zostały orpacowane przeze mnie. Nie korzystałem z gotowców, a jedynie od czasu do czasu się czymś inspirowałem.";
			inH.textContent="JĘZYK JAVASCRIPT";
			break;
		case 4:
			inContent.innerHTML="Tutaj niestety nie mogę popisać się dużymi umiejętnościami. Dopiero rozpoczynam naukę tego języka.";
			inH.textContent="JĘZYK PHP";
			break;		
		case 5:
			inContent.innerHTML="Tutaj niestety nie mogę popisać się dużymi umiejętnościami. Dopiero rozpoczynam naukę tego języka.";
			inH.textContent="JĘZYK JAVA";
			break;
		case 6:
			inContent.innerHTML="Wcześniej pracowałem jako specjalista ds. Rozwoju Miast. Doskonale rozumiem potrzebę gromadzenia i analizowania danych. Dlatego też postanowiłem, że w najbliższym czasie również przeznaczę trochę czasu na naukę tego zadagnienia";
			inH.textContent="MYSQL";
			break;		
		case 7:
			inContent.innerHTML="Możesz poznać proces mojej nauki klikając na dowolny powyższy przycisk. Ta dynamiczna zmiana treści została opracowana za pomocą JavaScript. Miłej lektury.";
			inH.textContent="PROCES MOJEJ NAUKI";
			break;
			
	}
}


