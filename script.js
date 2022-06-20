function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
        let value = generateRandomInteger(24);
        console.log(value)
      if(value == 1){
        fieldNameElement.innerHTML = "Trójkąt pitagorejski jest trójkątem prostokątny, w którym długość boków stanowią liczny naturalne, np. 5, 12, 13 czy 7, 24, 25 bądź 3, 4,5.";
      } else if (value == 2){
        fieldNameElement.innerHTML = "Trójkąt o bokach 3, 4,5 jest nazywany trójkątem egipskim, ponieważ przez Egipcjan był stosowany do wyznaczenia w terenie kąta prostego.";
      }else if (value == 3){
        fieldNameElement.innerHTML = "Trójkąt Pascala jest ściśle powiązany z symbolem Newtona.";
      }else if (value == 4){
        fieldNameElement.innerHTML = "Googol to dziesięć do setnej potęgi.";
      }else if (value == 5){
        fieldNameElement.innerHTML = "Albert Einstein urodził się w dzień liczby Pi, czyli 14 marca.";
      }else if (value == 6){
        fieldNameElement.innerHTML = "Pitagoras jest uznawany za twórcę tabliczki mnożenia. W kilku językach, np. francuskim czy rosyjskim, tabliczka mnożenia jest nazywana tabliczką Pitagorasa.";
      }else if (value == 7){
        fieldNameElement.innerHTML = "Suma liczb na kole ruletki wynosi 666, dlatego też jest nazywana „szatańską grą”.";
      }else if (value == 8){
        fieldNameElement.innerHTML = "W matematyce znajdziemy teorię gier, teorię węzłów i teorię warkoczy.";
      }else if (value == 9){
        fieldNameElement.innerHTML = "Znak równości, czyli =, został użyty pierwszy raz przez Roberta Recorda w roku 1557.";
      }else if (value == 10){
        fieldNameElement.innerHTML = "Stephen Hawking, brytyjski kosmolog, astrofizyk i fizyk teoretyczny, zajmujący się głównie grawitacją kwantową i czarną dziurą, zmarł w dzień liczby Pi, czyli 14 marca.";
      }else if (value == 11){
        fieldNameElement.innerHTML = "Fałszywe pierwiastki” to pojęcie wprowadzone do matematyki przez Kartezjusza jako odpowiedź na nieścisłości XVIII – wiecznej nowoczesnej arytmetyki współtworzonej przez niego. To również pierwsze w europejskiej historii matematyki użycie ujemnych liczb.";
      }else if (value == 12){
        fieldNameElement.innerHTML = "Liczba e, czyli tak zwana liczna Eulera to wykorzystywana w wielu dziedzinach zarówno matematyki, jak i fizyki, stała matematyczna, która w przybliżeniu wynosi 2, 71… .";
      }else if (value == 13){
        fieldNameElement.innerHTML = "W typowej kostce do gry suma oczek na przeciwległych ściankach wynosi 7, a mianowicie: 3+4, 2+5, 1+6.";
      }else if (value == 14){
        fieldNameElement.innerHTML = "Leonardo z Pizy jest twórcą Ciągu Fibonacciego.";
      }else if (value == 15){
        fieldNameElement.innerHTML = "Liczba urojona to inaczej zespolona liczba, która po podniesieniu jej do kwadratu, daje ujemny wynik. Takimi liczbami zajmowali się wielcy uczeni jak np. Euler czy Hamilton.";
      }else if (value == 16){
        fieldNameElement.innerHTML = "W roku 1921 Albert Einstein otrzymał Nagrodę Nobla za efekt fotoelektryczny.";
      }else if (value == 17){
        fieldNameElement.innerHTML = "Euklides jest autorem dzieła „Elementy”, które stało się wzorem w wielu naukowych dziedzinach, a także ukształtowało sposób myślenia o matematycznych teoriach.";
      }else if (value == 18){
        fieldNameElement.innerHTML = "60 – letni Japończyk znalazł się w Księdze Rekordów Guinnesa, gdyż udało mu się zapamiętać najwięcej licz Pi po przecinku, a mianowicie, wyrecytował aż 100. 000 liczb, pobijając tym samym swój rekord z roku 1995, kiedy to zapamiętał 83. 432 liczby.";
      }else if (value == 19){
        fieldNameElement.innerHTML = "Z równobocznych trójkątów można złożyć trzy idealne bryły – ikosaedr, czyli dwudziestościan foremny, oktaedr, czyli ośmiościan foremny, a także tetraedr, czyli czworościan foremny.";
      }else if (value == 20){
        fieldNameElement.innerHTML = "Moment to jednostka czasu trwająca około setną część sekundy.";
      }else if (value == 21){
        fieldNameElement.innerHTML = "Liczby ujemne zostały zalegalizowane po raz pierwszy w III wieku w Chinach, jednak były wykorzystywane jedynie w przypadkach wyjątkowych, gdyż ogólnie uznawano je za pozbawione sensu.";
      }else if (value == 22){
        fieldNameElement.innerHTML = "W XI wieku w Indiach powstały równana kwadratowe. Największa liczba, która byłą stosowana w Indiach to 1053, podczas gdy Rzymianie i Grecy stosowali w tym czasie tylko 106.";
      }else if (value == 23){
        fieldNameElement.innerHTML = "Zero to liczba, której nie zapiszemy rzymskimi cyframi.";
      }else if (value == 24){
        fieldNameElement.innerHTML = "Prawdopodobieństwo dowolnego zdarzenia leży między 0 a 1.";
      }
    
  }
}