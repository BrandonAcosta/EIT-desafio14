
const regexName = /^[A-Za-zÁÉÍÓÚÜáéíóúü][a-záéíóúü]*$/;
const regexLastName = /^[A-Za-zÁÉÍÓÚÜáéíóúü']*$/;
const regexDNI = /^\d{1,2}\.?\d{3}\.?\d{3}$/;
const regexCUIL = /^[\d]{2,2}\-?[\d]{7,8}\-?[\d]{1,1}$/;
const regexAddress = /^[A-Za-zÁÉÍÓÚÜáéíóúüÂÊÎÔÛâêîôûÃÕãõÇç\s0-9,.\-()/°'`]*$/;

const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const dni_check = document.getElementById("dni");
const cuil_check = document.getElementById("cuil");
const id_number = document.getElementById("id-number");
const address = document.getElementById("address");

const aValidString = (string, regex) => regex.test(string);


const aValidLength = (string, min, max) =>{
    let validString = true;
    if(min > string.length || string.length > max ) validString = false;
    return validString;
}

const fastCheck = () =>{
    console.log(`Nombre (${typeof first_name.value}) ${first_name.value}`);
    console.log(`Apellido (${typeof last_name.value}) ${last_name.value}`);
    console.log(`DNI? (${typeof dni_check.checked}) ${dni_check.checked}`);
    console.log(`CUIL? (${typeof cuil_check.checked}) ${cuil_check.checked}`);
    console.log(`Numero (${typeof id_number.value}) ${id_number.value}`);
    console.log(`Direccion (${typeof address.value}) ${address.value}`);
}

function setError(input, string) {
    const inputControl = input.parentElement;
    const errormsg = inputControl.querySelector('span');

    errormsg.innerText = string;
    if (!inputControl.classList.contains("error")) {
        inputControl.classList.toggle("error");
    }
    
}

function setSuccess(input) {
    const inputControl = input.parentElement;
    const errormsg = inputControl.querySelector('span');
    if (inputControl.classList.contains("error")) {
        inputControl.classList.toggle("error");
        errormsg.innerText ="";
    }

    if (!inputControl.classList.contains("success")) {
        inputControl.classList.toggle("success");
    }

}


const onSubmit = e =>{
    e.preventDefault();
    const firstnameValue = first_name.value;
    const lastnameValue = last_name.value;
    const dniBoolean = dni_check.checked;
    const cuilBoolean = cuil_check.checked;
    const idValue = id_number.value;
    const addressValue = address.value;

    fastCheck();

    if (firstnameValue) {
        if (aValidLength(firstnameValue, 3, 10)) {
            if (aValidString(firstnameValue, regexName)) {
                setSuccess(first_name);//succes class
                console.log("Bien hecho 👍");

            } else setError(first_name, `Solo caracteres alfabeticos`);//error class - message

        } else setError(first_name, `Debe tener de 3 a 10 caracteres`);//error class - message
    } 


    if (aValidLength(lastnameValue, 2, 20)) {
        if (aValidString(lastnameValue, regexLastName)) {
            setSuccess(last_name);//succes class
            //console.log("Bien hecho 👍");

        } else setError(last_name, `Solo caracteres alfabeticos`);//error class - message

    } else setError(last_name, `Debe tener de 2 a 20 caracteres`);//error class - message


    if (dniBoolean) {
        if (aValidString(idValue, regexDNI)) {
            setSuccess(dni_check);
            setSuccess(id_number);//succes class
            //console.log("Bien hecho 👍");

        } else setError(id_number, `DNI inválido`);//error class - message

    } else if(cuilBoolean) {
        if (aValidString(idValue, regexCUIL)) {
            setSuccess(cuil_check);
            setSuccess(id_number);//succes class
            //console.log("Bien hecho 👍");

        } else setError(id_number, `CUIL inválido`);//error class - message

    } else setError(dni_check, `Debe seleccionar uno`);//error class - message

    if (addressValue) {
        if (aValidLength(addressValue, 10, 200)) {
            if (aValidString(addressValue, regexAddress)) {
                setSuccess(address);//succes class
                //console.log("Bien hecho 👍");
    
            } else setError(address, `Hay caracteres no permitidos`);//error class - message
    
        } else setError(address, `Debe tener de 10 a 200 caracteres`);//error class - message
    }
}