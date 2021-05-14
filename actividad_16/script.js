const app = Vue.createApp({
    data(){
        return{
            materia: "Paradigma de programacion",
            semestre: "sexto semestre",
            carrera: "inge en compu",
            productos: [
                {nombre: "cerveza", cantidad: 100},
                {nombre: "sauce", cantidad: 69},
                {nombre: "agua", cantidad: 50},
            ],
            producto: ""
        }
    },
    methods:{
        agregarProducto(){
            this.productos.push(
                {nombre: this.producto, cantidad: 100}
            )
            this.producto="";
        }
    },
    computed:{
        total(){
            /*let total = 0;
            for(producto of this.productos){
                total += producto.cantidad;
            }
            return total;*/
            return this.productos.reduce((acc, product)=> acc + product.cantidad,0)
        }
    }
})

const vm = app.mount('#app');