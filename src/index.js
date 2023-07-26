import './style.scss';
console.log("Hola Mundo");
const myFile = document.getElementById("myfile");
const myBtn = document.getElementById("myBtn");

const toBase64 = (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.readAsDataURL(file);
        reader.onload = () => {
            return resolve(reader.result);
        }
    });
}
myBtn.addEventListener("click", async () => {
    const result = await toBase64 (myFile.files[0]); 
    console.log(result);
})