import{w as n,d as a}from"./index-88070051.js";var s={en:{English:()=>"French",Accueil:()=>"Home",MisesAJour:()=>"Updates",Documents:()=>"Documents",Contact:()=>"Contact",Carte:()=>"Map","Escalade Laurentides":()=>"Laurentians Climbing",erreurSEstProduite:()=>"Oops. An error ocurred\u2026",retourAcceuil:()=>"Go back to home page",disponible:()=>"Now Available !",D\u00E9j\u00E0Dispo:()=>"Already available",couverturePdB:()=>"The new guidebook's front cover",couvertureWeir:()=>"Weir guidebook's front cover",voirExtraits:()=>"Open Preview",sitewebWeir:()=>"www.escaladeweir.ca",Anciens:()=>"Some older guidebooks","Autres resources":()=>"Other resources","Et plus":()=>"And more\u2026",MerciInfo:()=>"Thank you for notifying us for any updates/errors/inconsistencies in the guidebook. Please provide all details (sector, route, name, date, etc.).",ContacterAuteurs:()=>"Contact authors by email",LienEmailBrise:()=>"Direct email: ",infoGuide:()=>"Infos for the Laurentians guidebook","Mises-a-jour":()=>"Updates","Erreur 404":()=>"Error 404",Weir:()=>"Weir Guidebook","Moyen de contact":()=>"Contact (Email/Phone/Other)",send:()=>"Send",Envoyer:()=>"Send","Nouvelle mise \xE0 jour":()=>"Updates/informations",Informations:()=>"Informations*",MerciContact:()=>"SVP laisser une forme de contact pour qu\u2019il soit possible de communiquer avec vous si n\xE9cessaire.",Merci:()=>"Thank you, your message has been sent.",achatLaurentides:()=>"Buy online"},fr:{English:()=>"English",Accueil:()=>"Accueil",MisesAJour:()=>"Mises-\xE0-jour",Documents:()=>"Documents",Contact:()=>"Contact",Carte:()=>"Carte","Escalade Laurentides":()=>"Escalade Laurentides",erreurSEstProduite:()=>"Oups. Une erreur s'est produite\u2026",retourAcceuil:()=>"Retour \xE0 la page d'acceuil",disponible:()=>"Maintenant Disponible !",D\u00E9j\u00E0Dispo:()=>"D\xE9j\xE0 Disponible",couverturePdB:()=>"La page de couverture du nouveau livre-guide",couvertureWeir:()=>"La page de couverture du livre-guide de Weir",voirExtraits:()=>"Voir des extraits",sitewebWeir:()=>"www.escaladeweir.ca",Anciens:()=>"Anciens topos \u2013 livres guides","Autres resources":()=>"Autres resources","Et plus":()=>"Et plus\u2026",MerciInfo:()=>"Merci de nous faire part d\u2019informations de mise \xE0 jour qui peuvent compl\xE9ter/corriger le guide. Fournissez tous les d\xE9tails possibles (secteur, voie, nom, date, etc.).",ContacterAuteurs:()=>"Contacter les auteurs par courriel",LienEmailBrise:()=>"Courriel direct: ",infoGuide:()=>"Infos sur le guide des Laurentides","Mises-a-jour":()=>"Mises-\xE0-jour","Erreur 404":()=>"Erreur 404",Weir:()=>"Livre-Guide de Weir",MerciContact:()=>"SVP laisser une forme de contact pour qu\u2019il soit possible de communiquer avec vous si n\xE9cessaire.",Merci:()=>"Merci, votre message a \xE9t\xE9 envoy\xE9.",achatLaurentides:()=>"Commander en ligne"}};const c=(e,o)=>{{const i=localStorage.getItem(e),r=n(i?JSON.parse(i):o);return r.subscribe(u=>localStorage.setItem(e,u?JSON.stringify(u):"")),r}},t="fr",l=c("locale",t),p=a(l,e=>{let o;if(e===t){if(!Object.prototype.hasOwnProperty.call(s,e))return function(i){return i};o=s[e]}return Object.prototype.hasOwnProperty.call(s,e)?o=s[e]:(console.error(`Trying to get info from locale "${e}", which doesn't exist.
 Falling back to source locale("${t}")`),o=s[t]),function i(r,u){return Object.prototype.hasOwnProperty.call(o,r)?o[r](u):e===t?r:Object.hasOwnProperty.call(s,t)?o===s[t]?r:(console.error(`Key "${r}" not present in locale "${e}", falling back to source locale ("${t}")`),o=s[t],i(r,u)):r}});export{l,p as t};
