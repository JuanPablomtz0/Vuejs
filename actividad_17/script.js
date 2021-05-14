const app = Vue.createApp(
    {
        data(){
            return {
                estatus: false,
                imagen: "imagen/focoOff.png"
            }
        },
        methods:{
            cambiarEstatus(){
                if(this.imagen == "imagen/focoOff.png")
                    this.imagen = "imagen/focoOn.png"
                else
                this.imagen = "imagen/focoOff.png"
            }

        }
    }
)

const vm = app.mount('#app');