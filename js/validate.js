<script>
    $(function() 
    {
        $("#form-contacto").validate(
        {   
            // Reglas de validacion             
            reglas: {
                nombre          :'text|4|10', // tipo|minimo|maximo
                correo          :'email',
                comentarios     :'text',
            },
            // Estilos de errores
            css: { 
                'class_error'   :'error',    // Class que se aplicará a los campos con reglas
                'id_msg_error'  :'#mensaje'  // id div del mensaje de error, con #              
            }
        }); 
    });
    </script>