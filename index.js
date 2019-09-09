$(document).ready(function(){
  $('.sidenav').sidenav({
      edge: 'left',
      draggable: true
  });
});

var Home = { template: `
  <div>
    <h1 class="nomePagina">Home</h1>
    
    <div>
      <h2 class="titoloHomepage">I più cliccati</h2>
    </div>

    <div class="card" style="width: 240px; float:left; margin:16px">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" style="height: 300px; width: 240px" src="img/releone.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Re Leone<i class="material-icons right">more_vert</i></span>
        <p><a href="#"></a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Re Leone<i class="material-icons right">close</i></span>
        <p>Riassunto film</p>
      </div>
    </div>

    <div class="card" style="width: 240px; float:left; margin:16px">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" style="height: 300px; width: 240px" src="img/avengers.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Re Leone<i class="material-icons right">more_vert</i></span>
        <p><a href="#"></a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Avengers<i class="material-icons right">close</i></span>
        <p>Riassunto film</p>
      </div>
    </div>






  </div>



`


};
























var About = { template: `
<h1 class="center">About</h1>
` }
var Portfolio = { template: `
<h1 class="center">Portfolio</h1> 
` }
var Contatti = { template: `
<h1 class="center">Contatti</h1>
` }

var routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contatti', component: Contatti }
  ]

var router = new VueRouter({
    routes // short for `routes: routes`
  })

new Vue ({
    router,
    el: '#app',
    data:{
        
    }
}).$mount('#app')