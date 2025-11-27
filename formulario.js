function processaFormulario(evento) {
    evento.preventDefault();
    console.log("Enviando o formulário");

    const input_nome = document.getElementById('nome');
    const input_sobrenome = document.getElementById('sobrenome');
    const input_dt_nascimento = document.getElementById('dt_nascimento');

    let nome = input_nome.value;
    let sobrenome = input_sobrenome.value;
    let dt_nascimento = input_dt_nascimento.value

    console.log(nome, sobrenome, dt_nascimento);

        if (nome != '' && sobrenome != '' && dt_nascimento != '') {
            if(nome.lenght >= 3 && sobrenome.lenght >=3){

            const usuario = {
                p_nome:nome,
                p_sobrenome:sobrenome,
                p_dt_nascimento:dt_nascimento
            }

            localStorage.setItem('usuasrio',JSON.stringify(usuario))
            }

        
    } else {console.log
        ("O formulário é inválido")

    }

}

