module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
          h1, h2, p {
            padding: 0 100px;
          } 
          ol {
            padding: 0 100px 0 150px;
          }
          ol li {
            margin-top: 15px;
          }     
          .contendedor2 h2 {
            text-align: center;
          }
          
          .justify-center {
          text-align: center;      
          }
          .fontSize14 {
            font-size: 14px;
          }
          .justify-text {
            text-align: justify;
          }
          .firmas {
            margin-top: 100px;            
            display: -webkit-box; 
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex; 
            display: flex;
            -webkit-justify-content: space-between;
            -moz-justify-content: space-between;
            -ms-justify-content: space-between;
            justify-content: space-between;            
            text-align: center;
            padding: 0 100px;
          }
          .firmas p {
            padding-left: 0;
            padding-right: 0;
            font-size: 14px;
          }
          .firmas div {
            flex-basis: 50%;
          }
          .subtitulo1 {       
            margin-top: 5px;
          }
          .titulo1 {
            margin-bottom: 0;
            margin-top: 0;
            font-size: 16px;
            text-align: center;
          }
          .firmaMandante1 {
            margin-top: 80px;
          }
          .prestador {
            margin-bottom: 80px;
          }
          body {
            background: rgb(204,204,204);
            margin: 0;
            padding: 0; 
          }
          page {
            font-family: 'Century Gothic', 'Helvetica';
            background: white;
            display: block;
            margin: 0 auto;
            margin-bottom: 0.5cm;
            box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
            width: 21cm;
            height: 26.68cm; 
            max-height: 26.68cm; 
            padding-top: 3cm;
          }
          
          @media print {
            body, page {
              margin: 0;
              box-shadow: 0;
            }
          }
          </style>
       </head>
       <body>      
          <page size="A4">
              <h2 class="titulo1">CONTRATO DE PRESTACIÓN DE SERVICIOS DE ASISTENCIA TÉCNICA, LEGAL, ADMINISTRATIVA Y DE OPERACION DEL PROGRAMA</h2> 
              <p class="justify-center subtitulo1">(Programa de Protección del Patrimonio Familiar para la obtención  de Subsidios destinados al Financiamiento de Materiales de Construcción)</p> 
              <strong><p class="justify-center firmaMandante1">...................................................................</p>
              <p class="justify-center">(MANDANTE)</p>
              <p class="justify-center">&</p>
              <p class="justify-center">...................................................................</p>
              <p class="justify-center prestador">(PRESTADOR)</p></strong>
                <div>
                  <p class="justify-text fontSize14">En ................., a ..... de .................. de ............, entre don(ña) ............................ Cédula de Identidad Nº ....................................., domiciliado(a) en .................................., comuna de ............................., en adelante, el “Mandante”, y don(ña) ........................... Cédula de Identidad Nº ........................., domiciliado(a) para estos efectos en ................................, comuna de ..........................., en representación de .........................................., en adelante el “Prestador”, se convienen el siguiente contrato:</p>
                  <p class="justify-text fontSize14"><strong>PRIMERO:</strong> El “Mandante” declara  ser  beneficiario y ser asignatario del subsidio destinado al financiamiento de materiales de construcción para proyectos de mejoramiento de viviendas previsto y establecido por la Resolución Exenta  Nº xx del MINVU de xx de xx de 20xx,  asimilados a <strong>Proyectos de Habitabilidad de la Vivienda</strong> del programa de Protección del Patrimonio Familiar regulado por el D. S. 255 (V. y U.)  de 2006 que <strong>tengan relación con obras de reparación de la envolvente de la vivienda;</strong> haber suscrito la declaración jurada de ser propietario o su cónyuge o arrendatario o ocupante legal del inmueble antes indicado, utilizar los materiales en el mejoramiento de esta y ejecutar dichas obras siguiendo la indicaciones del Prestador elegido, y tener conocimiento que se debe retirar la tarjeta prevista en aquella Resolución para la compra de materiales en el SERVIU Región del Maule una vez aprobado el presupuesto o listado de materiales de construcción por este último.  Por su parte el “Prestador”  declara haber suscrito el convenio marco regional para actuar como PSAT con la SEREMI de Vivienda y Urbanismo con fecha …… y aprobado por Resolución Exenta Nº……de la Seremi de V. y U., el cual se encuentra vigente según consta en el Certiificado Nº …… de fecha….. extendido por la misma SEREMI, y haber tenido proyectos habitacionales calificados como hábiles en cualquier Región del país desde la fecha en que comenzó  a regir dicho convenio.  </p>
                </div>   
          </page>
          <page size="A4">
              <p class="justify-text fontSize14"><strong>SEGUNDO:</strong> El “Mandante” encomienda al “Prestador”, proveer, entregar o suministrar los servicios de asesoría para la operación y aplicación de subsidio otorgado en su favor destinado al financiamiento de materiales para proyectos de reparación de viviendas asimilados a Proyectos de Mantención o de Habitabilidad del programa de Protección del Patrimonio Familiar referido en la cláusula que antecede. El prestador, por su parte, viene en este acto en aceptar  el encargo encomendado y se compromete a desarrollar y ejecutar todas las acciones, tareas y actividades de asesoría para la operación y aplicación del subsidio ya indicado, durante todas las etapas del proceso, previo, durante y después de la adquisición de los materiales. </p>
              <p class="justify-text fontSize14"><strong>TERCERO:</strong> La prestación de los servicios de asesoría técnica, legal, administrativa y de operación del subsidio antes indicado que le corresponderá desarrollar al prestador de servicios de asistencia técnica, comprende las  siguientes acciones, tareas y actividades, sin que la enunciación sea taxativa.  </p>
              <ol type="A" class="justify-text fontSize14">
                <li>Visitar la vivienda de propiedad del  mandante (si se puede) o contar con antecedentes como fotografías o video proporcionados por el mandante (ante la emergencia sanitara del covid-19) y elaborar el proyecto de mejoramiento, determinando las obras a desarrollar, la cubicación de los materiales requeridos, el costo estimativo de estos  y el presupuesto del proyecto, considerando solo el costo de los materiales  y herramientas menores que se requieran utilizar,  de conformidad a lo dispuesto en la Resolución Exenta Nº …….MINVU de fecha……  </li>
                <li>Incorporar al sistema RUKAN del MINVU las obras a realizar y elaborar e ingresar al SERVIU Región del Maule la carpeta técnica y legal con todos los antecedentes del proyecto recién indicado. </li>
                <li>Asistir al mandante – beneficiario y asignatario del subsidio, cuando se acerque a un establecimiento comercial del giro de ferretería o provisión de materiales con convenio suscrito con SERVIU Región del Maule,  en la  adquisición  de materiales y herramientas de acuerdo a lo indicado en el presupuesto elaborado por el prestador. </li>
                <li>Apoyar técnicamente al mandante en la operación y aplicación de subsidio otorgado,  e inspeccionar la correcta ejecución de las obras de reparación del inmueble afectado, dejando constancia en el libro de obra que deberá disponer para tal efecto. </li>
                <li>Informar favorablemente al SERVIU del avance de obras y/o para certificar su finalización, de acuerdo al formato tipo entregado por el MINVU, con declaración que los materiales adquiridos fueron empleados en esa operación, según los procedimientos establecidos al efecto.</li>
              </ol>        
          </page> 
          <page size="A4">
            <p class="justify-text fontSize14"><strong>CUARTO:</strong> El precio que se pagará por los servicios antes señalados, será los honorarios dispuestos en la Resolución Exenta  Nº …… del MINVU de ……..,  por las actividades, tramites y gestiones que le corresponde realizar al prestador en cumplimiento del presente contrato, y que el SERVIU pagará al prestador una vez que se cumplan los requisitos establecidos por la Resolución indicada en relación a lo dispuesto en el D.S. Nº  255 que Reglamento el Programa de Protección del Patrimonio Familiar.</p>
            <p class="justify-text fontSize14">Dicho precio, determinado en Unidades de Fomento, se pagará en su equivalente en pesos moneda nacional al valor de dicha unidad al momento de efectuarse el pago, y de acuerdo a como se señala en la cláusula siguiente.</p>
            <p class="justify-text fontSize14">El precio que se pague, incluirá todos los gastos que directa o indirectamente demanden las labores que se encomienda. Sin que la enunciación sea taxativa, dicho precio también cubrirá el pago que deberá efectuar el “Prestador” de impuestos, gastos notariales, honorarios profesionales, planos y gastos financieros de garantías y seguros que correspondan.</p>
            <p class="justify-text fontSize14"><strong>QUINTO:</strong> El SERVIU de la Región del Maule pagará al “Prestador” de acuerdo a lo dispuesto en la Resolución Exenta  Nº  …… del MINVU de ………. .</p>
            <p class="justify-text fontSize14"><strong>SEXTO:</strong> Si el “Prestador” incurriera en un incumplimiento grave de las obligaciones que contrae en este acto, el “Mandante” podrá poner término anticipado al contrato unilateralmente y solicitar a SERVIU la asesoria para buscar una nueva entidad Patrocinante. Este incumplimiento lo deberá informar SERVIU a la  SEREMI-MINVU, a objeto de dar  aplicación a lo establecido en el D.S. N° 135, (V. y U.), de 1978 y sus modificaciones sobre el Reglamento del Registro Nacional de Consultores del Ministerio de Vivienda y Urbanismo, y proceder a la revisión de cumplimiento del convenio marco suscrito entre dicha institución y el prestador.</p>
            <p class="justify-text fontSize14">Deberá entenderse que existe incumplimiento grave de las obligaciones, sin que la enunciación sea taxativa, en los siguientes casos:
            </p>
            <ol class="justify-text fontSize14">
              <li>Cuando el “Prestador”, injustificadamente, no inicie los servicios de asesoría encomendados en el plazo convenido;</li>
              <li>Cuando los servicios encomendados se paralicen por más de 15 días corridos, por causas imputables al “Prestador”;</li>
            </ol>    
        </page> 
        <page>
            <ol class="justify-text fontSize14">
            <li>Cuando exista notoria incapacidad técnica por parte del “Prestador” para efectuar los servicios de asistencia técnica encomendados;</li>
            <li>Cuando el “Prestador” se negara injustificada y reiteradamente a entregar los antecedentes técnicos, financieros o jurídicos solicitados por el “Mandante”, en relación al trabajo encomendado.</li>
            </ol> 
            <p class="justify-text"><strong>SÉPTIMO:</strong> Durante la etapa de ejecución de las obras, el SERVIU deberá fiscalizar o supervisar las labores del “Prestador”. En caso de detectarse fallas, podrá optar, entre otras, por las siguientes medidas para resguardar la debida aplicación del subsidio otorgado:</p>
            <ol type="A" class="justify-text fontSize14">
            <li>Enviar al “Prestador” un informe que dé cuenta del estado de aplicación del beneficio, de las deficiencias en la calidad y/o de eventuales riesgos asociados a la ejecución del proyecto;</li>
            <li>Solicitar al “Prestador” que exija a quien preste el servicio de construcción, la reparación o demolición y posterior ejecución de las partidas que presenten deficiencias constructivas, fallas o problemas de calidad de materiales o de ejecución;</li>
            <li>Solicitar al “Prestador” que ponga en conocimiento de la D.O.M. respectiva, las irregularidades detectadas, cuando corresponda, para que en virtud de las facultades que ésta posee, tome las medidas que sean procedentes. </li>
            </ol>
            <p class="justify-text fontSize14"><strong>OCTAVO:</strong> En todo aquello no acordado expresamente en el presente  acto, se aplican las normas establecidas en la Resolución Exenta  Nº  …… del MINVU de y lo dispuesto en el D. S. 255 (V. y U.  de 2006. Además,  las partes fijan domicilio en la ciudad y comuna de................................. y se someten a la jurisdicción de los Tribunales Ordinarios de Justicia.</p>
            <p class="justify-text fontSize14"><strong>NOVENO:</strong> Se deja constancia que el “Prestador” se encuentra inscrito y vigente en el Registro de Consultores del Ministerio de Vivienda y Urbanismo, según consta en el certificado de inscripción vigente que ambos declaran conocer y se entiende formar parte integrante del presente contrato.</p>
            <p class="justify-text fontSize14"><strong>DÉCIMO:</strong> La personería de don(ña) .................................................... como representante del “Prestador” ....................................... consta de .................................., que se adjunta y el documento que las partes declaran conocer.</p>
        </page>
        <page>
            <p class="justify-text fontSize14"><strong>DÉCIMO PRIMERO:</strong> El presente contrato se firma en cuatro ejemplares de igual tenor, quedando uno en poder de cada una de las partes, y otra en poder del SERVIU de la........... Región.</p> 
            <div class="firmas">
              <div class="prestador">
                <strong><p>______________________________________</p>
                <p>(PRESTADOR)</p></strong>
              </div>
            <div class="mandante">
              <strong><p>______________________________________</p>
              <p>(MANDANTE)</p></strong>
            </div>  
            </div> 
        </page>
       </body>
    </html>
    `;
};