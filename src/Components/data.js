import logo from './images/elpais.png';
import new1 from './images/new1.jpg';
import new2 from './images/new2.webp';
import new3 from './images/new3.jpg';

export const data = {logo: logo, name: "El País: el periódico global", email: "contacto@elpais.es", phone: "+34 722 11 21   11", language: "Español"};

export const writer1 = {
  name: "Miguel Jimenez", 
  location: "Madrid", 
  linkedin: "www.twitter.com" ,
  facebook:"www.facebook.com" , 
  twitter: "www.twiter.com"
}

export const writer2 = {
  name: "Elena González",
  location: "Barcelona",
  linkedin: "www.twitter.com" ,
  facebook:"www.facebook.com" ,
  twitter: "www.twiter.com" 
}

export const writer3 = {
  name: "Jimena Perez",
  location: "Sevilla",
  linkedin: "www.twitter.com" ,
  facebook:"www.facebook.com" ,
  twitter: "www.twiter.com" 
}

export const socialMedia=[
  {href:"", name: "facebook"},
  {href:"", name: "instagram"},
  {href:"", name: "twitter"}
]

export const INTERNACIONAL = 1;
export const OPINION = 2;
export const ESPANA = 3;
export const ECONOMIA = 4;
export const SOCIEDAD = 5;
export const EDUCACION = 6;
export const MEDIOAMBIENTE= 7;
export const CIENCIA = 8;
export const CULTURA = 9;
export const BABELIA = 10;
export const DEPORTES  = 11;
export const TECNOLOGIA = 12;
export const TELEVISION = 13;
export const GENTE = 14;
export  const ELPAISSEMANAL = 15;


export const categories = [INTERNACIONAL, OPINION, ESPANA,ECONOMIA, SOCIEDAD, EDUCACION, MEDIOAMBIENTE, CIENCIA, CULTURA, BABELIA, DEPORTES, TECNOLOGIA, TELEVISION, GENTE, ELPAISSEMANAL]
 


export const news = [
    {title: "Diego Ávalos, jefe de Netflix en España: “Nos interesa el talento en cualquier idioma",
    subtitle: "El vicepresidente de la plataforma de series en la Península afirma que el compromiso con el país es “firme”, al margen de la nueva ley audiovisual",
    newsImage: new1,
    writer: writer1.name,
    category: ECONOMIA,
    location: writer1.location,
    linkedin: writer1.linkedin,
    facebook: writer1.facebook,
    twitter: writer1.twitter,
    content: "Las plataformas de series y películas como Netflix llevan semanas en el centro de la polémica por la nueva ley audiovisual. La normativa exime a las multinacionales extranjeras de tener que producir un porcentaje de sus contenidos en catalán, gallego y euskera, según el proyecto impulsado por el Gobierno. Pero ERC ha amenazado con no apoyar los Presupuestos para 2022 si no se incluye en la obligación a estas empresas y la discusión política sigue abierta. En ese contexto, el vicepresidente de contenido original de Netflix en España y Portugal, Diego Ávalos (Cabo San Lucas, México, 1981), asegura que el compromiso de la compañía estadounidense con este país es “firme”. “Nos interesa el talento en cualquier idioma”, afirma en una entrevista este miércoles en las oficinas de Netflix en Tres Cantos (Madrid).La empresa estadounidense ha duplicado la capacidad de rodaje de sus instalaciones en la localidad madrileña para pasar de 5 a 10 los platós para producciones originales. También se están centrando en el desarrollo de un centro de excelencia especializado en posproducción. Desde que llegó a España en 2015, el equipo español ha estrenado más de 50 títulos, entre ellos La casa de papel, uno de los grandes éxitos globales de Netflix."},

    {title: "Hacienda recurre la sentencia que le obliga a devolver más de 1.000 millones a Telefónica",
    subtitle: "El fisco acude al Supremo y consigue de momento demorar el desembolso",
    newsImage: new2,
    writer: writer2.name,
    location: writer2.location,
    category: INTERNACIONAL,
    linkedin: writer2.linkedin,
    facebook: writer2.facebook,
    twitter: writer2.twitter,
    content: "Hacienda ha decidido recurrir ante el Supremo el fallo de la Audiencia Nacional que le obliga a devolver a Telefónica más de 1.000 millones, según confirman fuentes cercanas al caso. El tribunal tendrá ahora que decidir si admite a trámite el recurso y, en caso afirmativo, establecer cuál de las dos partes tiene la razón en un pleito que gira en torno a liquidaciones del impuesto de sociedades de 2009 y 2010, y que tiene origen en una operación realizada hace más de dos décadas. El desenlace del pleito implica un fuerte desembolso en efectivo, pero la entrada de caja para Telefónica se demora hasta que el Supremo resuelva."},
   
    {title: "Marta Ortega, heredera del imperio de Zara y nueva mujer fuerte del Ibex",
    subtitle: "La hija del fundador de Inditex, que se convertirá en presidenta del grupo en abril, ha sido clave en el desarrollo de las colecciones y la imagen de la empresa",
    newsImage: new3,
    writer: writer3.name,
    location: writer3.location,
    category: SOCIEDAD,
    linkedin: writer3.linkedin,
    facebook: writer3.facebook,
    twitter: writer3.twitter,
    content: "Marta Ortega Pérez no tiene un despacho en Zara a pesar de que lleva trabajando en la empresa 15 años. La hija pequeña de Amancio Ortega, de 37 años, que a partir del 1 de abril se pondrá al frente del imperio que levantó su padre como presidenta no ejecutiva, prefiere trabajar en un espacio abierto, codo con codo con el resto del equipo, y visitar casi todas las semanas las tiendas de la marca para estar cerca del corazón del negocio. En este sentido recuerda a su padre, que nunca ha tenido una oficina separada en la sede del grupo en Arteixo (A Coruña). Pero los que la conocen están convencidos de que el estilo de gestión de la futura presidenta de Inditex estará más alejado del gran hermetismo que caracterizó al fundador del grupo. Una muestra de este cambio fue la extensa entrevista que The Wall Street Journal publicó en septiembre, la primera que Marta Ortega ha concedido (su padre nunca dio ninguna y durante años fue difícil verlo y fotografiarlo en público). “Estaré siempre donde la compañía más me necesite”, afirmaba la empresaria gallega en lo que ahora se interpreta como un anticipo de su nuevo papel en el grupo, confirmado este martes. En la entrevista con el Journal, diario de cabecera de la élite financiera, recordaba sus inicios trabajando en una tienda de Zara en King’s Road, en el barrio londinense de Chelsea. “La primera semana pensé que no iba a sobrevivir”, aseguraba. “Pero luego es como si te hicieras adicta a la tienda. Hay gente que nunca quiere irse”, comentaba en el artículo. Lo que no cuenta en esta entrevista es que, cuando fue a trabajar de dependienta sin revelar que era la hija del jefe, sus compañeras pronto se enteraron al ver el Rolex que llevaba."},
]

export const navBarElements = [
    {href: "", name: "Economía"},
    {href: "", name: "Opinion"},
    {href: "", name: "España"},
    {href: "", name: "Economia"},
    {href: "", name: "Sociedad"},
    {href: "", name: "Educacion"},
    {href: "", name: "Medio Ambiente"},
    {href: "", name: "Ciencia"},
    {href: "", name: "Cultura"},
    {href: "", name: "Babelia"},
    {href: "", name: "Deportes"},
    {href: "", name: "Tecnologia"},
    {href: "", name: "Television"},
    {href: "", name: "Gente"},
    {href: "", name: "El Pais Semanal"},
  ]
  
  
