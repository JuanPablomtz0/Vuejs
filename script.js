const app = Vue.createApp(
    {
        data(){
            return{ 
                valor: 1,
                tipoInput:"text",
                fondo:"ng-primary",
                nombre:"",
                correo:""
            }
        }
    }
)

const vm = app.mount('#app');