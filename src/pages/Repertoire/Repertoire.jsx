import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Repertoire.module.scss";

const Repertoire = () => {
  return (
    <div>
      <div className='detail_header'>
        <Container>
          <h2 className='detail_title'>Repertoire</h2>
        </Container>
      </div>
      <div className='detail_body'>
        <Container>
          <div className={styles.repertoire_list}>
            <h3>Konzerte/ Oratorium</h3>
            <ul>
              <li>
                <span className={styles.artist}>Bach, Johann Sebastian</span>
                <ul className={styles.product}>
                  <li>H-moll Messe BWV232</li>
                  <li>Magnificat BWV 243</li>
                  <li>Matthäus Passion BWV244 ( Tenor, Evangelist )</li>
                  <li>Johannes Passion BWV245 ( Tenor, Evangelist )</li>
                  <li>Weihnachtsoratorium BWV 248( Tenor, Evangelist )</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Beethoven, Ludwig van</span>
                <ul className={styles.product}>
                  <li>Symphonie No.9 in d-Moll op 125</li>
                  <li>Missa solemnise op. 123</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Britten, Benjamin</span>
                <ul className={styles.product}>
                  <li>Les Illuminations</li>
                  <li>Serenade for Tenor, Horn and Strings</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Donizetti, Gaetano</span>
                <ul className={styles.product}>
                  <li>Messa di Requiem</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Händel ,Georg Friedrich</span>
                <ul className={styles.product}>
                  <li>Messiah, HWV56</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Haydn, Joseph</span>
                <ul className={styles.product}>
                  <li>Die Schöpfung</li>
                  <li>
                    HobXXII 11Lord Nelson Mass Nelson Messe Missa in Angustiis
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Mahler, Gustav</span>
                <ul className={styles.product}>
                  <li>Das Lied von der Erde</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Márquez, Arturo</span>
                <ul className={styles.product}>
                  <li>Cantata Sueños</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>
                  Mendelssohn-Bartholdy, Felix
                </span>
                <ul className={styles.product}>
                  <li>Elias op. 70 MWV A25</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Mozart, Wolfgang Amadeus</span>
                <ul className={styles.product}>
                  <li>Requiem in D minor, K626</li>
                  <li>Coronation Mass in C Major, K 317</li>
                  <li>Große Messe in C minor K 427</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Puccini, Giacomo</span>
                <ul className={styles.product}>
                  <li>Messa di Gloria</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Rossini, Gioacchino</span>
                <ul className={styles.product}>
                  <li>Petite Messe solennelle</li>
                  <li>Messa di Gloria</li>
                  <li>Stabat Mater</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Stravinsky Igor</span>
                <ul className={styles.product}>
                  <li>Les noces</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Verdi, Giuseppe</span>
                <ul className={styles.product}>
                  <li>Messa da Requiem</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.repertoire_list}>
            <h3 className={styles.title}>
              Opera / Studied and debuted repertoire
            </h3>
            <ul>
              <li>
                <span className={styles.artist}>Bellini, Vincenzo</span>
                <ul className={styles.product}>
                  <li>Norma (Pollione*)</li>
                  <li>I Capuleti e i Montecchi (Tebaldo)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Bizet, Georges</span>
                <ul className={styles.product}>
                  <li>Carmen (Don José*)</li>
                  <li>Les pêcheurs de perles (Nadir)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Chabrier, Emmanuel</span>
                <ul className={styles.product}>
                  <li>L’étoile (König Ouf*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Donizetti, Gaetano</span>
                <ul className={styles.product}>
                  <li>L’elisir d’amore (Nemorino*)</li>
                  <li>Lucia di Lammermoor (Edgardo*)</li>
                  <li>Maria Stuarda (Leicester)</li>
                  <li>Roberto Devereux (Roberto*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Dvořak, Antonin</span>
                <ul className={styles.product}>
                  <li>Rusalka (Prinz*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Gounod, Charles</span>
                <ul className={styles.product}>
                  <li>Faust (Faust)</li>
                  <li>Romeo et Juliette (Romeo, Tybald*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Händel, Georg Friedrich</span>
                <ul className={styles.product}>
                  <li>Alcina (Oronte*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Hartmann,Karl Amadeus</span>
                <ul className={styles.product}>
                  <li>Simplicius Simplicissimus (Einsiedel*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Janáček Leoš</span>
                <ul className={styles.product}>
                  <li>Jenůfa (Laca*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Lehàr, Franz</span>
                <ul className={styles.product}>
                  <li>Das Land des Lächelns (Sou Chong*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Leoncavallo, Ruggero</span>
                <ul className={styles.product}>
                  <li>Pagliacci (Canio*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Mascagni, Pietro</span>
                <ul className={styles.product}>
                  <li>Cavalleria Rusticana (Turiddu)</li>
                  <li>Massenet, Jules</li>
                  <li>Manon (Des Grieux)</li>
                  <li>Werther (Werther*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Mozart, Wolfgang Amadeus</span>
                <ul className={styles.product}>
                  <li>Don Giovanni (Don Ottavio*)</li>
                  <li>Cosi fan tutte (Ferrando*)</li>
                  <li>Idomeneo (Idomeneo*)</li>
                  <li>Die Zauberflöte (Tamino*)</li>
                  <li>La clemenza di Tito (Tito*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Puccini, Giacomo</span>
                <ul className={styles.product}>
                  <li>Tosca (Mario Cavaradossi*)</li>
                  <li>La bohème (Rodolfo*)</li>
                  <li>Il Tabarro (Luigi*)</li>
                  <li>Gianni Schicchi (Rinuccio*)</li>
                  <li>Madama Butterfly (Pinkerton*)</li>
                  <li>La Rondine (Ruggiero)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Rossini, Gioacchino</span>
                <ul className={styles.product}>
                  <li>Il Barbiere di Siviglia (Conte di Almaviva*)</li>
                  <li>La Scala di seta (Dorvil*)</li>
                  <li>Il Signor Bruschino (Florville*)</li>
                  <li>Maometto II (Paolo Erisso*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Strauss, Johann</span>
                <ul className={styles.product}>
                  <li>Die Fledermaus (Alfred*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Strauss, Richard</span>
                <ul className={styles.product}>
                  <li>Der Rosenkavalier (ein Sänger*)</li>
                  <li>Salome (Narraboth*)</li>
                  <li>Tschaikowsky, Pjotr I.</li>
                  <li>Pique Dame (Hermann*)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Verdi, Giuseppe</span>
                <ul className={styles.product}>
                  <li>La Traviata (Alfredo*)</li>
                  <li>Rigoletto (Il duca di Mantova)</li>
                  <li>Aida (Radamès*)</li>
                  <li>Messa di Requiem (Tenor*)</li>
                  <li>Un ballo in maschera (Riccardo*) Macbeth (Macduff*)</li>
                  <li>Nabucco (Ismaele*)</li>
                  <li>Falstaff (Fenton*)</li>
                  <li>Don Carlos (Don Carlo*)</li>
                  <li>Simon Boccanegra (Gabriele Adorno)</li>
                </ul>
              </li>
              <li>
                <span className={styles.artist}>Wagner, Richard</span>
                <ul className={styles.product}>
                  <li>Der fliegende Holländer (Erik*, Steuermann*)</li>
                  <li>Tannhäuser (Walther*)</li>
                </ul>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Repertoire;
