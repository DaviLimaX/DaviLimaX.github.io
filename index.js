        /* Pede informações dos usuários, pega os dados e exibe na tela
            o IF serve para dizer que o usuário terminou a cota do dia
            o else diz o que falta ser cumprido ainda caso o usuário não tenha cumprido a cota

            as funções "entrar" e "sair" são pra orientar a interação com o botão "clique aqui"
        */
       function sub(){

        var button = window.document.getElementById('button') 
        var nome = window.document.getElementById('usuario')
        var cg = window.document.getElementById('aulas')
        var resto = window.document.getElementById('resto')
        var res = window.document.getElementById('res')
        var usuario = String(nome.value)
        var n1 = Number(cg.value)
        var n2 = Number(resto.value)
        var sub = n1 - n2
        
        /* condições pra aparecer as mensagens de resposta aos dados do usuário*/
               

                if (sub==0) {
                res.innerHTML = `BOA <strong>${usuario}</strong>! AGORA RESTAM ${sub} AULAS! (Não fez mais que sua obrigação )`
                }
                else
                res.innerHTML = `vamo lá <strong>${usuario}</strong> , ${sub} aula(s) restante(s) ainda!`
                if (sub<0 || n2<0) {
                res.innerHTML = `Ops, por favor ${usuario}, reveja a quantidade de aulas e tente novamente!`
                    }
        }

           var agora = new Date()
           var horario = agora.getHours()
           var minutos = agora.getMinutes()
           var segundos = agora.getSeconds()
           var ht = agora.getTime()
           var hora = document.getElementById('hora')
           var tempo = document.getElementById('tempo')

                   if(horario < 12) {
                       hora.innerHTML =(`Bom Dia!`)
                   }
                   else if(horario <= 18) {
                       hora.innerHTML =(`Boa Tarde!`)
                   }
                   else {
                       horario.innerHTML =(`Boa Noite!`)
                   }

           var dia = agora.getDay()
           var diaSem = document.getElementById("diaSem")

           switch(dia) {
               case 0:
                   diaSem.innerHTML = ('Que belo Domingo para estudar hein?')
                   break
               case 1:
                   diaSem.innerHTML =('Que bela Segunda para estudar hein?')
                   break
               case 2:
                   diaSem.innerHTML =('Que bela Terça para estudar hein?')
                   break
               case 3:
                   diaSem.innerHTML =('Que bela Quarta para estudar hein?')
                   break
               case 4:
                   diaSem.innerHTML =('Que bela Quinta para estudar hein?')
                   break
               case 5:
                   diaSem.innerHTML =('Que bela Sexta para estudar hein?')
                   break
               case 6:
                   diaSem.innerHTML =('Que belo Sábado para estudar hein?')
                   break
               default:
                   diaSem.innerHTML =(`Ops, o calendário tá indisponível :/`)
           }
       
