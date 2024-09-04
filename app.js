

const n1 = document.getElementById("n1");
const contenedor = document.getElementById("contenedo")
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
   
    const num = parseFloat(n1.value);
    

    if (num >= 0) {
        contenedor.textContent = `Este número es positivo = ${num}`;
    } else {
        contenedor.textContent = `Este número es negativo = ${num}`;
    }
});
