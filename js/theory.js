const THEORY_DATA = [
  {
    id: "introduccion",
    title: "Introducción a la Plataforma",
    content: `
      <p>Bienvenida a tu guía teórica de Química Orgánica. Este apartado está diseñado para consolidar tus conocimientos sobre sistemas aromáticos y heterocíclicos, sus propiedades físicas y químicas, así como su reactividad principal.</p>
      <div class="theory-card">
        <h4>Recomendación de Estudio</h4>
        <p>Lee cuidadosamente las reglas de regioselectividad y los mecanismos de reacción expuestos aquí antes de dirigirte a la pestaña de <strong>Temario</strong> para poner a prueba tu conocimiento dibujando las estructuras y productos principales en los ejercicios interactivos.</p>
      </div>
    `
  },
  {
    id: "bencenos",
    title: "Bencenos y Arenos",
    content: `
      <h3>Conceptos Generales</h3>
      <p>El benceno (<strong>C₆H₆</strong>) es el representante clásico de los compuestos aromáticos. Posee una estructura plana en forma de anillo hexagonal regular. Según la regla de Hückel, cumple con los criterios de aromaticidad: es un sistema monocíclico, plano, totalmente conjugado y posee <strong>4n + 2 electrones π</strong> (n=1, es decir, 6 electrones π).</p>
      
      <div class="theory-card warning">
        <h4>Estabilidad Termodinámica</h4>
        <p>A pesar de estar dibujado con dobles enlaces (como si fueran alquenos), el benceno no sufre reacciones típicas de adición electrofílica que romperían su sistema conjugado. En su lugar, el anillo retiene su aromaticidad y experimenta <strong>Sustitución Electrofílica Aromática (SEAr)</strong>.</p>
      </div>

      <h3>Mecanismo General de la SEAr</h3>
      <p>La sustitución electrofílica aromática ocurre en dos etapas principales:</p>
      <ol>
        <li><strong>Ataque del electrófilo:</strong> Los electrones π del benceno atacan a un electrófilo fuerte (E⁺), formando un carbocatión intermediario no aromático estabilizado por resonancia, conocido como <em>complejo sigma</em> o ión arenio. Esta es la etapa lenta y determinante de la velocidad.</li>
        <li><strong>Desprotonación:</strong> Una base extrae el protón del carbono sp³ del complejo sigma, restaurando el doble enlace y devolviendo la aromaticidad al anillo.</li>
      </ol>

      <h3>Reacciones Clave</h3>
      <ul>
        <li><strong>Halogenación:</strong> Requiere un ácido de Lewis (como FeBr₃ o AlCl₃) para activar el halógeno. Forma halobencenos.</li>
        <li><strong>Nitración:</strong> Utiliza mezcla sulfonítrica (HNO₃/H₂SO₄) para generar el ión nitronio (NO₂⁺) in situ. Es útil para sintetizar anilinas por posterior reducción.</li>
        <li><strong>Sulfonación:</strong> Usa ácido sulfúrico fumante (H₂SO₄ / SO₃). Es una reacción reversible.</li>
        <li><strong>Acilación de Friedel-Crafts:</strong> Utiliza haluros de acilo catalizados por AlCl₃. Evita los problemas de transposición de carbocationes típicos de la alquilación de Friedel-Crafts.</li>
      </ul>

      <h3>Derivados de Importancia</h3>
      <p>El <strong>Ácido para-aminobenzoico (PABA)</strong> es un precursor biosintético del ácido fólico en bacterias. Los medicamentos tipo "sulfas" (sulfonamidas) actúan como inhibidores competitivos del PABA, deteniendo el crecimiento bacteriano. Su estructura consta de un anillo bencénico con un grupo carboxilo y un grupo amino en posición relativa 1,4 (para).</p>
    `
  },
  {
    id: "pirrol",
    title: "Pirrol",
    content: `
      <h3>Heterociclo Aromático de 5 Miembros</h3>
      <p>El pirrol es un heterociclo con un átomo de nitrógeno. A diferencia de las aminas, el par de electrones no enlazante del nitrógeno se encuentra en un orbital <em>p</em> y participa en el sistema π para completar los 6 electrones necesarios para la aromaticidad de Hückel.</p>

      <div class="theory-card">
        <h4>Propiedades Ácido-Base</h4>
        <p>Debido a que su par solitario es parte fundamental del anillo aromático, el pirrol es una base extremadamente débil (su pKa del ácido conjugado es ~ -3.8). Protonarlo destruiría la aromaticidad. De hecho, el pirrol actúa como un ácido débil (pKa ~ 16.5) y puede ser desprotonado por bases fuertes para formar el ión pirrolato.</p>
      </div>

      <h3>Regioselectividad en la SEAr</h3>
      <p>El pirrol es <strong>muy reactivo</strong> frente a electrófilos debido a que es un anillo "rico en electrones" (excedente π, los 5 átomos comparten 6 electrones). Es tan reactivo que no requiere ácidos de Lewis fuertes como el benceno.</p>
      
      <div class="theory-card warning">
        <h4>Preferencia por C2 (Posición Alfa)</h4>
        <p>La sustitución electrofílica ocurre predominantemente en la <strong>posición C2</strong> (carbono adyacente al nitrógeno). Esto se debe a que el carbocatión intermediario (complejo sigma) resultante de un ataque en C2 se estabiliza por resonancia mediante <strong>tres estructuras contribuyentes</strong> (incluyendo una donde el nitrógeno tiene octeto completo), mientras que el ataque en C3 solo genera dos estructuras de resonancia.</p>
      </div>

      <h3>Principales Síntesis</h3>
      <ul>
        <li><strong>Síntesis de Paal-Knorr:</strong> Es el método clásico. Se hace reaccionar una 1,4-dicetona con amoníaco o una amina primaria. El mecanismo involucra la formación de iminas y ciclización intramolecular seguida de deshidratación.</li>
        <li><strong>Síntesis de Hantzsch para Pirroles:</strong> Condensación multicomponente de una α-halocetona, un β-cetoéster y amoníaco. Es excelente para obtener pirroles altamente sustituidos.</li>
        <li><strong>Síntesis de Knorr:</strong> Reacción entre una α-aminocetona (generada in situ por reducción de oximas) y un compuesto β-dicarbonílico.</li>
      </ul>
    `
  },
  {
    id: "furano_tiofeno",
    title: "Furano y Tiofeno",
    content: `
      <h3>Características del Furano</h3>
      <p>El furano es el análogo del pirrol con un átomo de oxígeno. El oxígeno es más electronegativo, lo que retiene los electrones más fuertemente. Esto lo hace el <strong>menos aromático</strong> de los heterociclos de 5 miembros.</p>
      <p>Por su menor aromaticidad, el furano tiene un carácter diénico pronunciado y es propenso a sufrir <strong>reacciones de Diels-Alder</strong> como dieno frente a dienófilos típicos.</p>

      <h3>Características del Tiofeno</h3>
      <p>El tiofeno contiene un átomo de azufre. Es el <strong>más aromático</strong> y estable de los heterociclos de 5 miembros (después del benceno), lo que se atribuye a un mejor traslape de los orbitales o a la menor electronegatividad del azufre comparada con oxígeno y nitrógeno.</p>
      <p>El tiofeno puede aislarse frecuentemente de alquitranes de hulla debido a su punto de ebullición casi idéntico al del benceno.</p>

      <h3>Reactividad y SEAr</h3>
      <p>Al igual que el pirrol, tanto el furano como el tiofeno son más reactivos que el benceno frente a la Sustitución Electrofílica Aromática. Siguen la misma regla de regioselectividad: <strong>orientan la sustitución hacia la posición C2 (alfa).</strong></p>
      <ul>
        <li>La nitración del furano debe realizarse con reactivos suaves como nitrato de acetilo (AcONO₂) porque los ácidos fuertes provocan la polimerización o apertura del anillo.</li>
        <li>La formilación se realiza a menudo mediante la reacción de <strong>Vilsmeier-Haack</strong> (utilizando POCl₃ y DMF).</li>
      </ul>
    `
  },
  {
    id: "indol",
    title: "Indol",
    content: `
      <h3>Estructura y Bioquímica</h3>
      <p>El indol consiste en un anillo de benceno fusionado a un anillo de pirrol. Es uno de los núcleos heterocíclicos más abundantes en la naturaleza. Es la estructura base del aminoácido esencial <strong>triptófano</strong>, y de neurotransmisores vitales como la <strong>serotonina</strong>.</p>

      <h3>Regioselectividad en la SEAr</h3>
      <div class="theory-card warning">
        <h4>Preferencia por C3 (Posición Beta)</h4>
        <p>A diferencia del pirrol simple (que prefiere C2), la sustitución electrofílica en el indol ocurre casi exclusivamente en la <strong>posición C3</strong>. La razón es la conservación de la aromaticidad del benceno.</p>
        <p>Si el electrófilo ataca en C3, la carga positiva resultante en el pirrol se deslocaliza sobre el nitrógeno adyacente <strong>sin interrumpir</strong> los 6 electrones π del anillo bencénico. Si el ataque fuera en C2, la deslocalización de la carga requeriría romper el sexteto aromático del benceno fusionado, un proceso energéticamente muy desfavorable.</p>
      </div>

      <h3>Síntesis de Fischer</h3>
      <p>Es la ruta de laboratorio más importante para sintetizar indoles. Consiste en calentar una <strong>fenilhidrazona</strong> (obtenida de la condensación de una fenilhidrazina con una cetona) en presencia de un catalizador ácido (como ácido de Lewis, ZnCl₂, o ácido polifosfórico).</p>
      <p>El mecanismo es una transposición sigmatrópica [3,3] del tautómero enehidrazina, seguida de una rearomatización y pérdida de amoníaco. Esta síntesis permite obtener indoles sustituidos en la posición 2 y 3, dependiendo de la cetona original utilizada.</p>
    `
  },
  {
    id: "piridina",
    title: "Piridina y Diazinas",
    content: `
      <h3>Estructura de la Piridina</h3>
      <p>La piridina es un heterociclo de 6 miembros que contiene un nitrógeno. A diferencia del pirrol, el nitrógeno de la piridina tiene hibridación <em>sp²</em>, y su par de electrones no enlazantes se encuentra en un orbital <em>sp²</em> perpendicular al sistema π aromático. Por tanto, el par solitario <strong>no</strong> forma parte de la aromaticidad.</p>

      <div class="theory-card">
        <h4>Basicidad y Nucleofilia</h4>
        <p>Debido a que su par de electrones está disponible (no deslocalizado en el anillo), la piridina es una base razonable (pKa ~ 5.2) y un buen nucleófilo. Se utiliza comúnmente como disolvente y catalizador básico en reacciones orgánicas.</p>
      </div>

      <h3>Deficiencia Electrónica (Efecto Desactivante)</h3>
      <p>El nitrógeno es más electronegativo que el carbono. Por efecto inductivo (-I) y de resonancia (-M), retira densidad electrónica del anillo, haciéndolo "deficiente en electrones" (deficiente π). Esto hace que la piridina sea muchísimo menos reactiva que el benceno hacia la Sustitución Electrofílica Aromática.</p>
      
      <div class="theory-card warning">
        <h4>SEAr orientada a C3 (Meta)</h4>
        <p>Cuando se logran forzar condiciones drásticas para una SEAr, esta ocurre en la posición <strong>C3 (meta)</strong>. Un ataque en orto (C2) o para (C4) generaría estructuras de resonancia donde la carga positiva reside sobre el nitrógeno altamente electronegativo (que ya tiene un octeto incompleto), una situación inestable. El ataque en meta evita colocar la carga positiva sobre el nitrógeno.</p>
      </div>

      <h3>Sustitución Nucleofílica Aromática (SNAr)</h3>
      <p>Debido a su deficiencia electrónica, la piridina experimenta fácilmente reacciones de Sustitución Nucleofílica en las posiciones <strong>C2 y C4</strong> (orto y para al nitrógeno), ya que el intermediario aniónico (complejo de Meisenheimer) es estabilizado porque la carga negativa recae sobre el átomo de nitrógeno electronegativo. Un ejemplo clásico es la reacción de Chichibabin, que introduce un grupo amino en C2 utilizando amiduro de sodio (NaNH₂).</p>

      <h3>Síntesis de Hantzsch (Piridina)</h3>
      <p>Es un método multicomponente para sintetizar piridinas simétricamente sustituidas. Involucra la condensación de un aldehído con dos equivalentes de un β-cetoéster y amoníaco. El producto inicial es una 1,4-dihidropiridina. Para obtener la piridina final, se requiere un paso de <strong>oxidación</strong> (con agentes como ácido nítrico, DDQ o cloruro férrico) para aromatizar el anillo.</p>

      <h3>Diazinas</h3>
      <p>Son análogos de la piridina pero con dos átomos de nitrógeno en el anillo. Son más deficientes en electrones que la piridina.</p>
      <ul>
        <li><strong>Pirimidina (1,3-diazina):</strong> Sus derivados son las bases pirimidínicas de los ácidos nucleicos (Citosina, Timina, Uracilo). Tienen un papel fundamental en la biología y la farmacología celular.</li>
        <li><strong>Pirazina (1,4-diazina):</strong> Muchas pirazinas alquiladas contribuyen a los aromas de alimentos tostados (café, pan).</li>
        <li><strong>Piridazina (1,2-diazina):</strong> Utilizada en herbicidas y algunos fármacos sintéticos.</li>
      </ul>
    `
  }
];
