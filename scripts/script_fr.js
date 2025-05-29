function screenVerif(evnt){
  console.log("Page chargé, js prêt")
  if (window.innerWidth<770){
    alert("𝗩𝗼𝘁𝗿𝗲 𝗳𝗲𝗻𝗲𝘁𝗿𝗲 𝗻'𝗲𝘀𝘁 𝗽𝗮𝘀 𝗮𝘀𝘀𝗲𝘇 𝗹𝗮𝗿𝗴𝗲. Essayez en paysage sur smartphone ou d'agrandir la page sur ordinateur \n𝗬𝗼𝘂𝗿 𝘄𝗶𝗻𝗱𝗼𝘄 𝗶𝘀 𝗻𝗼𝘁 𝘄𝗶𝗱𝗲 𝗲𝗻𝗼𝘂𝗴𝗵. Try landscape mode on smartphone or try to enlarge the page on computer" );
    return true;
    }
  }



function affichePopup(survolé){
  console.log(survolé.id);
  let maBulle = document.getElementById('infoBulle');
  maBulle.style.visibility = 'visible';
  posX=event.pageX+'px'; posY=event.pageY+'px';
  console.log(posX, posY)
  maBulle.style.left = posX;
  maBulle.style.top = posY;
  let textAMettre = "n/a"
  switch (survolé.id) {
    case 'catia':
      textAMettre="Logiciel vu en cours"
      break;
    case 'selfLearn':
      textAMettre="Ces projets m'ont amené constamment à apprendre par moi-même"
      break;
    case 'soif':
      textAMettre="J'ai toujours l'envie d'apprendre et d'en savoir plus"
      break;
    case 'collab':
      textAMettre="Les films et les projets associatifs auxquels j'ai participé m'ont appris le travail d'équipe"
      break;
    case 'savoirVivre':
      textAMettre="Je m'adapte facilement aux différents profils et je suis à l'écoute"
      break;
    case 'aisance':
      textAMettre="Je suis toujours volontaire lorsqu'il faut prendre la parole ou défendre un projet"
      break;
    case 'planification':
      textAMettre="Il est important de savoir répartir les collaborateurs en fonction de leur domaine d'excellence"
      break;
    case 'pratique':
        textAMettre="Ces compétences ont été acquises dans le cadre de mes projets personnels, surtout les expériences que l'on pourrait qualifier de \"bricolage\""
        break;
    case 'logicielsPerso':
      textAMettre="J'ai appris à utiliser ces logiciels hors de l'école"
      break;
    case 'langages':
      textAMettre="J'ai appris et pratiqué tous ces langages dans le cadre de mes projets"
      break;
    case 'inge':
      textAMettre="Les compétences que ma filière mécatronique m'a permis d'acquérir"
      break;
    default:
      textAMettre="n/a";
  }
  maBulle.innerHTML = textAMettre;
}

function retirePopup(){
  var maBulle = document.getElementById('infoBulle');
  maBulle.style.visibility = 'hidden';
}

window.onload = screenVerif;

//Thibaut BOURGEAIS
