import React from 'react';
import ReactDOM from 'react-dom';
import './Components/styles.css';
import new1 from './Components/images/new1.jpg';
import new2 from '.Components/images/new2.webp';
import new3 from '.Components/images/new3.jpg';
import logo from '.Components/images/elpais.svg'


const data = {logo: logo, name: "El País", email: "contacto@elpais.es", phone: "+34 722 11 21   11", language: "Español"};

const writer1 = {
  name: "Miguel Jimenez", 
  location: "Madrid", 
  linkedin: "www.twitter.com" ,
  facebook:"www.facebook.com" , 
  twitter: "www.twiter.com"
}

const writer2 = {
  name: "Elena González",
  location: "Barcelona",
  linkedin: "www.twitter.com" ,
  facebook:"www.facebook.com" ,
  twitter: "www.twiter.com" 
}

const writer3 = {
  name: "Jimena Perez",
  location: "Sevilla",
  linkedin: "www.twitter.com" ,
  facebook:"www.facebook.com" ,
  twitter: "www.twiter.com" 
}

const socialMedia=[
  {href:"", name: "facebook", icon:""},
  {href:"", name: "instagram", icon:""},
  {href:"", name: "twitter", icon:""}
]

const INTERNACIONAL = 1;
const OPINION = 2;
const ESPANA = 3;
const ECONOMIA = 4;
const SOCIEDAD = 5;
const EDUCACION = 6;
const MEDIOAMBIENTE= 7;
const CIENCIA = 8;
const CULTURA = 9;
const BABELIA = 10;
const DEPORTES  = 11;
const TECNOLOGIA = 12;
const TELEVISION = 13;
const GENTE = 14;
const ELPAISSEMANAL = 15;


const categories = [INTERNACIONAL, OPINION, ESPANA,ECONOMIA, SOCIEDAD, EDUCACION, MEDIOAMBIENTE, CIENCIA, CULTURA, BABELIA, DEPORTES, TECNOLOGIA, TELEVISION, GENTE, ELPAISSEMANAL]
 
const news = [
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



const navBarElements = [
  {href: "", name: ECONOMIA},
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



class Header extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return <div>
      <div className="title-header">
        <h1>{data.name}</h1>
        <ul>
          <li>{data.email}</li>
          <li>{data.phone}</li>
        </ul>
      </div>
      <NavBar/>
    </div>
  }
}

class NavBar extends React.Component{
  constructor(props) {
    super(props)
    this.state={...this.props.categories}
  }
  render(){
      return <nav>
           <NavBarElement elements={navBarElements} />
    </nav> 
  }
}


class NavBarElement extends React.Component{
  
  render(){
    let navBarElement = this.props.elements.map((element) => <a href ={element.href}>{element.name}</a>)
      return <>
          {navBarElement}
      </> 
  }
}

class Newspaper extends React.Component{
  constructor(props) {
    super(props)
    this.state = {isNewOpen: false}
    this.openNews = this.openNews.bind(this)
  }

  openNews(){
    this.setState(state => ({isNewOpen : !state.isNewOpen})) 
  }

  render(){
    let myRender = undefined
    if (this.state.isNewOpen === true) {
      myRender = <div>
       <Header />
       <New/>
       <Footer/>
      </div>
    } else {
      myRender=  <div><Header />
      <Board news={news} openNews={this.openNews}/>  /* invoca la 167 para terminar de elevar el estado */
      <Footer/>
      </div>
    }
    return <div>
      {myRender}
    </div>
  }
}

class Board extends React.Component{
  constructor(props){
    super(props)
    this.state={...news}
    this.openNews =this.openNews.bind(this);
    
  }
  openNews(){
    this.props.openNews()
  }
 
 
    render(){
      let newsItem = this.props.news.map((element) =><New elements={element} openNews={this.openNews} />);  /* pasar via propiedades por la linea 199 */
      return <div>
        {newsItem}
    </div>
    }
  }

class New extends React.Component{
  constructor(props){
    super(props)
    this.openNews = this.openNews.bind(this)
    this.state = {...this.props.elements, isNewOpen: false}
  }
 
  openNews(){
    this.setState(state =>(
        {isNewOpen: !state.isNewOpen}
    ));
    this.props.openNews();  /* luego esto bindea openNews como propiedad a a la linea 204 */
  }
  render() {
            
  return <div onClick={this.openNews} >  /* esto va a bindiar con la linea 218 */
      <img src={this.state.newsImage} alt ="other form of visual" className="new-image"></img>
          <h1>{this.state.title}</h1>
          <h4>{this.state.subtitle}</h4>
          <p>{this.state.content}</p>
      </div>
  }
}



class Footer extends React.Component {

  render(){
    return<>
    <NavBar elements={socialMedia}/>
    </>
  }
}





ReactDOM.render(<Newspaper />, document.getElementById('root'));


