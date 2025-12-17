import { LitElement, html, css } from "lit";

export class ProductoCard extends LitElement{

    //nombre en una caja de texto, precio en otra caja de texto y cantidad con botones para aumentar y disminuir
    static properties = {
        nombre: { type: String },
        precio: { type: Number },
        cantidad: { type: Number },
    };  
    static styles = css`
        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            max-width: 220px;
            text-align: center;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
        }
        .nombre {
            font-size: 1.2em;
            margin-bottom: 8px;
        }
        .precio {
            color: #28a745;
            font-weight: bold;
        }
        .cantidad {
            margin: 8px 0;
        }
        .total {
            margin-top: 8px;
            font-weight: bold;
            color: #007bff;
        }
        input[type="text"], input {
            width: 100%;
            padding: 6px;
            box-sizing: border-box;
            margin-top: 4px;
            border-radius: 4px;
            border: 1px solid #ccc; 
        }
        button {
            margin: 4px;
            padding: 6px 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            background: white;
            cursor: pointer;
        }
        button[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;  

    //Valores por defecto
    constructor() {
        super();
        this.nombre = "Producto Ejemplo";
        this.precio = 500.00;
        this.cantidad = 1;
    }

    //dos botones para aumentar y disminuir la cantidad que no sea menor a 1
    aumentarCantidad() {
        this.cantidad++;
    }
    disminuirCantidad() {
        if (this.cantidad > 1) {
            this.cantidad--;
        }
    }                                                   

    _onNombreInput(e) {
        this.nombre = e.target.value;
    }

    get total() {
        return this.precio * this.cantidad;
    }

    render() {
        return html`
            <div class="card">
                <div class="nombre">
                    <label>Nombre:
                        <input .value=${this.nombre} @input=${this._onNombreInput} type="text" />
                    </label>
                </div>
                <div class="precio">Precio unitario: $${this.precio.toFixed(2)}</div>
                <div class="cantidad">Cantidad: ${this.cantidad}</div>
                <div class="total">Total: $${this.total.toFixed(2)}</div>
                <button ?disabled=${this.cantidad <= 1} @click=${this.disminuirCantidad}>-</button>
                <button @click=${this.aumentarCantidad}>+</button>
            </div>
        `;
    }

    
}

customElements.define("producto-card", ProductoCard);