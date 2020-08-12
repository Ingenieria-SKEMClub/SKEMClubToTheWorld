//Ivan Valverde🐦
//Angel Ureña💢
let options = {
  accordion:null

}
function ret(){
  /*$('.collapsible').collapsible();*/
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);

    var elems1 = document.querySelectorAll('.collapsible');
    
var instances1 = M.Collapsible.init(elems1,options);
}
function changeColor(){
  let y = 0;
  setInterval(function() {
    
    y += 1;
    if(y===colors.length){
    y=0
    }
    //your code to be executed after 1 second
    document.getElementById("bgc").style.background = colors[y];
  document.getElementById("text").innerHTML = text[y];
  document.getElementById("img").innerHTML = img[y];
  document.getElementById("bs").style.boxShadow = shadow[y];

    console.log(y);
}, 10000);
  let colors = ["linear-gradient(75.51deg, rgba(232, 94, 60, 0.81) 1.71%, rgba(232, 60, 163, 0) 50.49%), linear-gradient(247.47deg, #E83C4C -3.23%, #E83C4C -3.23%)", "linear-gradient(76.43deg, #8052C0 -0.49%, rgba(13, 27, 146, 0) 51.03%), linear-gradient(0deg, #386FCB, #386FCB)","linear-gradient(73.69deg, #02A3A3 8.96%, rgba(126, 179, 183, 0) 48.74%), linear-gradient(247.47deg, #65C8D0 -3.23%, #65C8D0 -3.22%)","linear-gradient(79.16deg, #FFB972 9.61%, rgba(255, 185, 114, 0) 50.05%), linear-gradient(247.47deg, #FFDC72 -3.23%, #FFDC72 43.98%)","linear-gradient(75.51deg, #E83CA3 1.71%, rgba(232, 94, 60, 0) 50.49%), linear-gradient(247.47deg, #E83C4C -3.23%, #E83C4C -3.23%)"]
  let text = ["Ejectuamos ideas geniales.","Ejectuamos ideas reales.","Ejectuamos ideas con impacto.","Ejectuamos ideas para el mundo.","Ejectuamos ideas con impulso."]
  let img = ["<img class='img' src='/IMG/Dirección de Arte.png' > </img>","<img   class='img' src='/IMG/Dirección de Ciencia.png' ></img>","<img class='img' src='/IMG/Dirección de Ingenieria.png'></img>","<img class='img' src='/IMG/Dirección de Desarrollo Sostenible.png'></img>","<img class='img' src='/IMG/Dirección de Liderazgo.png'></img>"]
  let shadow =["-5px 10px  rgb(249, 101, 3)","-5px 10px rgb(128, 82, 192)"," -5px 10px rgb(2, 163, 163)"," -5px 10px  rgb(238, 191, 74)"," -5px 10px rgb(232, 60, 163)"]
  

    return;
}

class SkemCW extends React.Component { 
    constructor(props){
        super(props);
        this.state ={
          colors : ["black", "white","green","yellow","red"]
        
            
        }
    }
  
    componentDidMount() {
      let indexOfColor=0;
        changeColor(indexOfColor);
        ret();
        
    }

 

    render(){
        return(
            <div>
              <div className="contenedor" id='bgc'>
                <nav class="transparent ">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo ">SKEMClub</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down black-text">
        <li><a href="sass.html" >Inicio</a></li>
        <li><a class='dropdown-trigger ' href='#' data-target='dropdown1'><i class="material-icons white-text right">keyboard_arrow_down</i>Areas</a>

<ul id='dropdown1' class='dropdown-content transparent'>
  <li class='transparent xd'  ><a class='white-text'  href="#!"><i class="material-icons white-text">folder</i>Portafolio</a></li>
  <li class='transparent'><a class='white-text'  href="#!"><i class="material-icons white-text">view_module</i>Área</a></li>
  <li class='transparent'><a class='white-text' href="#!"><i class="material-icons white-text">import_contacts</i>Historias</a></li>
  <li class='transparent'><a  class='white-text' href="#!"><i class="material-icons white-text">cloud</i>Sistemas</a></li>
</ul></li>
        <li><a href=".html">Galeria</a></li>
        <li><a href="sass.html" >Contacto</a></li>
      </ul>
    </div>
  </nav>   
              <div class="container">
                <p className="Slogan" id='text'>Ejectuamos ideas geniales.</p>
                  <div class='left'>
                    <button className="ibutton" id='bs' >¡Descubre más!</button>
                  </div>
                <div class='right' >
                  <div id='img' className="img">
                    <img class='img' src='/IMG/Dirección de Arte.png'></img>
                  </div>
                </div>
              </div>
            </div>  
            <div  className="WR">
              <div className="ball a"></div>
              <div className="ball b"></div>
              <div className="ball c"></div>
              <div className="ball d"></div>
              <div className="ball e"></div>
              <div className="ball f"></div>
              <div className="ball g"></div>
                <div id='grid_who'>
                  <div class="center-align"> 
                    <h1 className="WRT">¿Quiénes somos?</h1>
                  </div>
                  <div class="center-align">
                    <p className="WRp">Se pone infromación recumida del club</p>
                  </div>
                  <div class="row">
                    <div><video class="responsive-video" autoplay className="WRi" src="/IMG/WidePutin.mp4"  controls loop   ></video></div>
                  </div>
                </div>
              </div>
              
            <div className="WD">
              <div id='grid_who'>
                <div class="center-align">
                  <h1 className="WRT">¿Quieres saber qué hacemos?</h1>
                </div>
                <div class="center-align">
                  <p className="WDp">¡Échale un vistazo a nuestro trabajo!</p>
                </div>
                <div class="row">

<div class="center-align" className="center">
    
<ul class="collapsible" >
<li>
<div class="collapsible-header #dd2c00 deep-orange accent-4 white-text" ><i class="material-icons">slideshow</i>YouTube</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>
<li>
<div class="collapsible-header  #01579b light-blue darken-4 white-text"><i class="material-icons">thumb_up</i>Facebook</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>

<li>
<div class="collapsible-header #aa00ff purple accent-4 white-text"><i class="material-icons">photo_camera</i>Instagram</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>
<li>
<div class="collapsible-header #212121 grey darken-4 white-text" ><i class="material-icons">code</i>GitHub</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>
<li>
<div class="collapsible-header #80d8ff light-blue accent-1 white-text"><i class="material-icons">view_carousel</i>Behance</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>
</ul>
</div>
</div>
            </div>  
          </div>

          <div className="STo">
          <div class="center-align"><h1 className="StoT">Historias de personas</h1></div>
          <div className="cont"><div className="contc"><img className="eme" src="/IMG/emerson.png"></img></div></div>
          <div className="cont1"><div className="contc1"><img className="ad" src="/IMG/ad.jpg"></img></div></div>
          <div className="cont2"><div className="contc2"><img className="micro" src="/IMG/Microsoft.png"></img></div></div>
          </div>



            
        </div>
                
            
        )
    }

}

ReactDOM.render(<SkemCW/>, document.getElementById("app"));