
const cepInput = document.getElementById('cep')
cepInput.addEventListener('input',()=>{
    const cep = cepInput.value;
        getCep(cep);
})

async function getCep(data){
    const cep = data.replace(/\D/g, '')
    try{
        const resource = `https://viacep.com.br/ws/${cep}/json/`;

        const res = await fetch(resource);
        const json = await res.json();
        if(json.erro){
            ativarErro();
            //limpar();
        }
        else{
            montar(json)
        }
       
        return  
    }
    catch(erro){
        console.log(erro)
        ativarErro();
        //limpar()
    }
    
}

function montar(obj) {
    desativarErro()
    document.getElementById('street').value = obj.logradouro || "";
    document.getElementById('neighborhood').value = obj.bairro || "";
    document.getElementById('state').value = obj.uf || "";
    document.getElementById('city').value = obj.localidade || "";
}

function desativarErro(){
    const err = document.getElementById('cepError')
    err.style.display = 'none';
}
function ativarErro(){
    const err = document.getElementById('cepError')
    err.style.display = 'block';
}

function limpar(){
    document.querySelector('input').value = "";
}

   