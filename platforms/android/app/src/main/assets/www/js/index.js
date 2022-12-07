const usuario = {
    "Oscar" : "hola123"
}
function go(){
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
    } 
    else{ 
             alert("Porfavor ingrese, nombre de rusuario y contraseña correctos."); 
    } 
} 
