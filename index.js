/* 
- Cada producto que gestione debe contar con las propiedades:
		* title (nombre del producto)
		* description (descripción del producto)
		* price (precio)
		* thumbnail (ruta de imagen)
		* code (código identificador)
		* stock (número de piezas disponibles)

- Debe contar con un método “addProduct” el cual agregará 
	un producto al arreglo de productos inicial. 
		* Validar que no se repita el campo “code” y que todos los campos sean obligatorios
		* Al agregarlo, debe crearse con un id autoincrementable

- Debe contar con un método “getProducts” el cual debe devolver 
	el arreglo con todos los productos creados hasta ese momento

- Debe contar con un método “getProductById” el cual debe 
	buscar en el arreglo el producto que coincida con el id
		* En caso de no coincidir ningún id, mostrar en consola un error “Not found”

*/

class ProductManager {
	constructor() {
		this.products = [];
	}
	addProduct(
		title,
		description,
		price,
		thumbnail,
		code,
		stock) {
			if(title && description && price && thumbnail && code && stock) {
				if (this.products.indexOf(code) === -1) {
				this.products.push({
					title: title,
					description: description,
					price: price,
					thumbnail: thumbnail,
					code: code,
					stock: stock
				});
			} else console.log("Error: El código ya existe");
		} else console.log("Error: Debe ingresar todos los campos");
	}
	getProducts() {
		if(this.products.length > 0){
			return this.products;
		} else console.log("Error: No hay productos");
	}
	getProductById(id) {
		for (let i = 0; i < this.products.length; i++) {
			if (this.products[i].code === id) {
				return this.products[i];
			} else return "Not found";
		}
	}
}

const product = new ProductManager();
product.addProduct(
	"CAMISETA CRO M/C 65% POLIESTER 35%ALGODON JASPEADO FOX",
	"Camiseta de manga corta, en tejido vigoré. Cuello redondo en punto canalé 1x1 con cubrecosturas de refuerzo en su interior.",
	85.00,
	"https://uniformesbahia.com/17142-large_default/camiseta-cro-mc-65-poliester-35algodon-jaspeado-fox.jpg",
	1,
	55);
product.addProduct(
	"CAMISETA CRO M/C 65%POLI. 35%ALGODON LAVABLE 60 º 160GR",
	"Camiseta de manga corta, en tejido vigoré. Cuello redondo en punto canalé 1x1 con cubrecosturas de refuerzo en su interior.",
	79.00,
	"https://uniformesbahia.com/7371-large_default/camiseta-cro-mc-65poli-35algodon-lavable-60-160gr.jpg",
	2,
	24);

product.getProducts();
product.getProductById(2);