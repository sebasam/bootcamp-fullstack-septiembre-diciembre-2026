// ========================== PRODUCTOS ===========================
const productos = [
    {
        id: 1,
        nombre: 'Laptop',
        descripcion: 'Laptop para trabajo y estudio',
        precio: 2500000,
        imagen: 'https://placehold.co/600x400?text=Laptop'
    },
    {
        id: 2,
        nombre: 'Mouse',
        descripcion: 'Mouse inalámbrico',
        precio: 80000,
        imagen: 'https://placehold.co/600x400?text=Mouse'
    },
    {
        id: 3,
        nombre: 'Teclado',
        descripcion: 'Teclado mecánico RGB',
        precio: 150000,
        imagen: 'https://placehold.co/600x400?text=Teclado'
    },
]

// ==================== CARRITO =========================
let carrito = []

// ========================= ELEMENTOS DEL HTML ==================

const botonesAgregar = document.querySelectorAll('.btn-agregar')

const listaCarrito = document.getElementById('listaCarrito')
const carritoVacio = document.getElementById('carritoVacio')

const contadorCarrito = document.getElementById('contadorCarrito')
const totalProductos = document.getElementById('totalProductos')
const btnVaciarCarrito = document.getElementById('btnVaciarCarrito')
const btnComprar = document.getElementById('btnComprar')
const totalCarrito = document.getElementById('totalCarrito')

// ================ EVENTOS DE LOS BOTONES DE AGREGAR AL CARRITO ================

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const id = Number(boton.dataset.id)
        
        agregarAlCarrito(id)
    })
})

const formatearPrecio = (valor) => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(valor)
}

// ======================== ACTUALIZAR CARRITO ================================
const actualizarCarrito = () => {
    listaCarrito.innerHTML = ''

    if(carrito.length === 0) {
        carritoVacio.style.display = 'block'
    } else {
        carritoVacio.style.display = 'none'
    }

    carrito.forEach(producto => {
        const item = document.createElement('div')

        item.classList.add(
            'carrito-item',
            'row',
            'align-items.center'
        )

        item.innerHTML = `
            <div class="col-md-2">
                <img 
                    src="${ producto.imagen }" 
                    alt="${ producto.nombre }"
                    class="img-fluid rounded"
                >
            </div>
            <div class="col-md-4">
                <h5> ${ producto.nombre } </h5>
                <p class="text-muted mb-0">
                    ${ producto.descripcion }
                </p>
            </div>
            
            <strong>
                ${ formatearPrecio(producto.precio * producto.cantidad) }
            </strong>
        `

        listaCarrito.appendChild(item)
    })
}

// =================== AGREGAR PRODUCTOS AL CARRITO ==================

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id)

    const productoCarrito = carrito.find(producto => producto.id === id)

    if(productoCarrito) {
        productoCarrito.cantidad++
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        })
    }

    actualizarCarrito()
}


