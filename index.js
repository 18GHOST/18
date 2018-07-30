const  discord  =  require ( ' discord.js ' );
const  ytdl  =  require ( ' ytdl-core ' );
const  fs  =  require ( ' fs ' );
const  client  =  nouveau  discord.Client ();
const  token  =  processus . env . JETON ;

client . sur ( ' prêt ' , () => {
    var servers =  client . guildes . array (). carte ( g  =>  g . nom ). rejoindre ( ' . ' );
    console . log ( " ===================== \ n [!] Je fonctionne " );
    client . utilisateur . setPresence ({jeu : {nom :  " Le Jeu Ici " , url : " le lien " , tapez :  1 }});
    });
// VSAV
 client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 1 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' PARTIT ' ,
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }})
}});
 client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 2 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' SUR LES LIEUX ' ,
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 4 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' MESSAGE URGENT '
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 5 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' DEPART HOPITAL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 6 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' ARRIVEE HOPITAL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 7 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' DIPONIBLE'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 8 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  'INDISPONIBLE'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 9 ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' RENTRE'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
 client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 3' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' MESSAGE ' ,
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
//SPECIAL
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 22' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' SMUR SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 30' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' POLICE SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 31' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  'GENDARMERIE SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 32' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  'EDF SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 33' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' GDF SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( '34' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' DDE SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 35' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' CG68 SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 36' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' POLICE MINI. SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 37' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' BRIG. VERTE SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( '38')) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' MAIRE SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' 44' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' STATUS ' ,
          description :  ' DISPONIBLE SLL'
          couleur :  0xff090f ,
          vignette : {
          url :  " http://up.autotitre.com/86e3caf4f8.jpg " }
          }});
client . on ( ' message ' , message  => {
      if ( message . content . startsWith ( ' aide ' )) {
        un message . canal . envoyer ({embed : {
          titre :  ' 18 ' ,
          description :  ' Les Pompiers bonjour que se passe t`il? » ,
          couleur :  0xff090f ,
          vignette : {
          url :  " http://p5.storage.canalblog.com/56/27/118811/116341477_o.jpg "
        }
          }})
        }
    });


client . on ( ' message ' , fonction ( message ) {
  if ( message . content  ==  " stop " ) {
    si ( un message . membres . hasPermission ( " MANAGE_MESSAGES " )) {
      un message . canal . fetchMessages ()
      . then ( function ( list ) {
        un message . canal . bulkDelete (liste); },
        function ( err ) { message . canal . send ( " ERREUR: ERREUR CLEARING CHANNEL. " )})
    } 
  } 
});




client . connexion (token);
