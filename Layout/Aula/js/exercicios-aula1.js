//=====================================================================================================================================================================
// ESCOLHA UNICA
//=====================================================================================================================================================================
var tentativasEx1 = 0,
    tentativasEx2 = 0,
    tentativasEx3 = 0,
    tentativasEx4 = 0,
    tentativasEx5 = 0;
//=======================================================
// Exercicio 1 - ESCOLHA UNICA
//=======================================================

$("input[data-exercicio1]").click(function () {
    switch ($(this).data("exercicio1")) {
        //Exercício 1
        case 1:
            // Resposta correta
            if ($(this).data("alternativa1") == "e") {
                /**layout da resposta correta */
                $("#alternativas-escolha-unica-1 input").prop("disabled", true); // id para bloquear as respostas quando corretas
                $("#collapse-ex1-3").collapse("hide");
                // chama o collapsed de resposta correta.
                setTimeout(function () {
                    $("#collapse-ex1-1").collapse("show"); //apresenta
                    $("#collapse-ex1-2").collapse("hide"); //oculta
                }, 0);
            } else if (
                tentativasEx1 == 0 &&
                $(this).data("alternativa1") != "e"
            ) {
                //feedback de resposta incorreta 1
                $("#collapse-ex1-2").collapse("show"); //apresenta
                setTimeout(function () {}, 0);
                tentativasEx1++;
            } else if (
                tentativasEx1 == 1 &&
                $(this).data("alternativa1") != "e"
            ) {
                //Letra correspondente a alternativa

                //feedback de resposta incorreta 2
                tentativasEx1 = 2;
                $("#collapse-ex1-2").collapse("hide"); //oculta

                setTimeout(function () {
                    $("#collapse-ex1-2").collapse("hide"); //oculta
                    $("#collapse-ex1-3").collapse("show"); //apresenta
                }, 0);
                $("#alternativas-escolha-unica-1 input").prop("disabled", true); // id para bloquear as respostas quando erradas duas vezes
            }
            break;
    }
});

//=======================================================
// Exercicio 2 - ESCOLHA UNICA
//=======================================================

$("input[data-exercicio2]").click(function () {
    switch ($(this).data("exercicio2")) {
        //Exercício 1
        case 1:
            // Resposta correta
            if ($(this).data("alternativa2") == "e") {
                /**layout da resposta correta */
                $("#2-alternativas-escolha-unica-1 input").prop("disabled", true); // id para bloquear as respostas quando corretas
                $("#collapse-ex2-3").collapse("hide");
                // chama o collapsed de resposta correta.
                setTimeout(function () {
                    $("#collapse-ex2-1").collapse("show"); //apresenta
                    $("#collapse-ex2-2").collapse("hide"); //oculta
                }, 0);
            } else if (
                tentativasEx2 == 0 &&
                $(this).data("alternativa2") != "e"
            ) {
                //feedback de resposta incorreta 1
                $("#collapse-ex2-2").collapse("show"); //apresenta
                setTimeout(function () {}, 0);
                tentativasEx2++;
            } else if (
                tentativasEx2 == 1 &&
                $(this).data("alternativa2") != "e"
            ) {
                //Letra correspondente a alternativa

                //feedback de resposta incorreta 2
                tentativasEx2 = 2;
                $("#collapse-ex2-2").collapse("hide"); //oculta

                setTimeout(function () {
                    $("#collapse-ex2-2").collapse("hide"); //oculta
                    $("#collapse-ex2-3").collapse("show"); //apresenta
                }, 0);
                $("#2-alternativas-escolha-unica-1 input").prop("disabled", true); // id para bloquear as respostas quando erradas duas vezes
            }
            break;
    }
});

//=======================================================
// Exercicio 3 - ESCOLHA UNICA
//=======================================================

$("input[data-exercicio3]").click(function () {
    switch ($(this).data("exercicio3")) {
        //Exercício 3
        case 1:
            // Resposta correta
            if ($(this).data("alternativa3") == "b") {
                /**layout da resposta correta */
                $("#3-exercicio-escolha-unica-1").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-2").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-3").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-4").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-5").prop("disabled", true); // id para bloquear o imput.
                $("#collapse-ex3-3").collapse("hide");

                // chama o collapsed de resposta correta.
                setTimeout(function () {
                    $("#collapse-ex3-1").collapse("show"); //apresenta
                    $("#collapse-ex3-2").collapse("hide"); //oculta
                }, 0);
            } else if (
                tentativasEx3 == 0 &&
                $(this).data("alternativa3") != "b"
            ) {
                //feedback de resposta incorreta 1
                $("#collapse-ex3-2").collapse("show"); //apresenta

                setTimeout(function () {}, 0);

                tentativasEx3++;
            } else if (
                tentativasEx3 == 1 &&
                $(this).data("alternativa3") != "a"
            ) {
                //Letra correspondente a alternativa

                //feedback de resposta incorreta 2
                tentativasEx3 = 2;
                $("#collapse-ex3-2").collapse("hide"); //oculta

                setTimeout(function () {
                    $("#collapse-ex3-2").collapse("hide"); //oculta
                    $("#collapse-ex3-3").collapse("show"); //apresenta
                }, 0);
                $("#3-exercicio-escolha-unica-1").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-2").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-3").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-4").prop("disabled", true); // id para
                $("#3-exercicio-escolha-unica-5").prop("disabled", true); // id para bloquear o imput.
            }
            break;
    }
});

//=======================================================
// Exercicio 4 - ESCOLHA UNICA
//=======================================================

$("input[data-exercicio4]").click(function () {
    switch ($(this).data("exercicio4")) {
        //Exercício 4
        case 1:
            // Resposta correta
            if ($(this).data("alternativa4") == "b") {
                /**layout da resposta correta */
                $("#4-exercicio-escolha-unica-1").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-2").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-3").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-4").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-5").prop("disabled", true); // id para bloquear o imput.
                $("#collapse-ex4-3").collapse("hide");

                // chama o collapsed de resposta correta.
                setTimeout(function () {
                    $("#collapse-ex4-1").collapse("show"); //apresenta
                    $("#collapse-ex4-2").collapse("hide"); //oculta
                }, 0);
            } else if (
                tentativasEx4 == 0 &&
                $(this).data("alternativa4") != "b"
            ) {
                //feedback de resposta incorreta 1
                $("#collapse-ex4-2").collapse("show"); //apresenta

                setTimeout(function () {}, 0);

                tentativasEx4++;
            } else if (
                tentativasEx4 == 1 &&
                $(this).data("alternativa4") != "a"
            ) {
                //Letra correspondente a alternativa

                //feedback de resposta incorreta 2
                tentativasEx4 = 2;
                $("#collapse-ex4-2").collapse("hide"); //oculta

                setTimeout(function () {
                    $("#collapse-ex4-2").collapse("hide"); //oculta
                    $("#collapse-ex4-3").collapse("show"); //apresenta
                }, 0);
                $("#4-exercicio-escolha-unica-1").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-2").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-3").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-4").prop("disabled", true); // id para
                $("#4-exercicio-escolha-unica-5").prop("disabled", true); // id para bloquear o imput.
            }
            break;
    }
});

//=======================================================
// Exercicio 5 - ESCOLHA UNICA
//=======================================================

$("input[data-exercicio5]").click(function () {
    switch ($(this).data("exercicio5")) {
        //Exercício 5
        case 1:
            // Resposta correta
            if ($(this).data("alternativa5") == "b") {
                /**layout da resposta correta */
                $("#5-exercicio-escolha-unica-1").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-2").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-3").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-4").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-5").prop("disabled", true); // id para bloquear o imput.
                $("#collapse-ex5-3").collapse("hide");

                // chama o collapsed de resposta correta.
                setTimeout(function () {
                    $("#collapse-ex5-1").collapse("show"); //apresenta
                    $("#collapse-ex5-2").collapse("hide"); //oculta
                }, 0);
            } else if (
                tentativasEx5 == 0 &&
                $(this).data("alternativa5") != "b"
            ) {
                //feedback de resposta incorreta 1
                $("#collapse-ex5-2").collapse("show"); //apresenta

                setTimeout(function () {}, 0);

                tentativasEx5++;
            } else if (
                tentativasEx5 == 1 &&
                $(this).data("alternativa5") != "a"
            ) {
                //Letra correspondente a alternativa

                //feedback de resposta incorreta 2
                tentativasEx5 = 2;
                $("#collapse-ex5-2").collapse("hide"); //oculta

                setTimeout(function () {
                    $("#collapse-ex5-2").collapse("hide"); //oculta
                    $("#collapse-ex5-3").collapse("show"); //apresenta
                }, 0);
                $("#5-exercicio-escolha-unica-1").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-2").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-3").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-4").prop("disabled", true); // id para
                $("#5-exercicio-escolha-unica-5").prop("disabled", true); // id para bloquear o imput.
            }
            break;
    }
});

//=====================================================================================================================================================================
// MULTIPLA ESCOLHA
//=====================================================================================================================================================================
var multi_tentativa1 = 0,
    tentativas2 = 0,
    tentativas3 = 0,
    tentativas4 = 0,
    tentativas5 = 0;
//=======================================================
// Exercicio 1 - MULTIPLA ESCOLHA
//=======================================================
function respostaMultiplaescolha1() {
    if (
        $("#1-ex-multi-1").is(":checked") == false &&
        $("#1-ex-multi-2").is(":checked") == false &&
        $("#1-ex-multi-3").is(":checked") == false &&
        $("#1-ex-multi-4").is(":checked") == false &&
        $("#1-ex-multi-5").is(":checked") == false
    ) {
        setTimeout(function () {
            $("#collapse-multi-ex1-seleciona").collapse("show");
        }, 0);
    } else if (
        $("#1-ex-multi-1").is(":checked") == true && //Seleciona o checked e o classifica como verdadeiro, por que essa é uma das opções certas.
        $("#1-ex-multi-2").is(":checked") == false && //Seleciona o checked e o classifica como falso, por que essa é a resposta errada.
        $("#1-ex-multi-3").is(":checked") == true && //Seleciona o checked e o classifica como verdadeiro, por que essa é uma das opções certas.
        $("#1-ex-multi-4").is(":checked") == false && //Seleciona o checked e o classifica como falso, por que essa é a resposta errada.
        $("#1-ex-multi-5").is(":checked") == false
    ) {
        //Seleciona o checked e o classifica como falso, por que essa é a resposta errada.
        $("#ex1_multi").prop("disabled");
        $(".correto").css("background-color", "#08da4e"); //fundo da box da escolha.
        $("#1-ex-multi-1").prop("disabled", true); // opção de bloqueio
        $("#1-ex-multi-2").prop("disabled", true); // opção de bloqueio
        $("#1-ex-multi-3").prop("disabled", true); // opção de bloqueio
        $("#1-ex-multi-4").prop("disabled", true); // opção de bloqueio
        $("#1-ex-multi-5").prop("disabled", true); // opção de bloqueio

        setTimeout(function () {
            $("#vr-button1multi").hide();
            $("#collapse-multi-ex1-seleciona").collapse("hide"); //Frase de selecione opção oculta.
            $("#collapse-multi-ex1-tentativa1").collapse("hide"); //Frase de errado tente novamente.
            $("#collapse-multi-ex1-certo").collapse("show"); //Frase de parabéns você acertou.
        }, 0);
    } else {
        if (multi_tentativa1 == 0) {
            setTimeout(function () {
                $("#collapse-multi-ex1-seleciona").collapse("hide");
                $("#collapse-multi-ex1-tentativa1").collapse("show");
            }, 0);
            multi_tentativa1++;
        } else {
            setTimeout(function () {
                $("#vr-button1multi").hide();
                $("#collapse-multi-ex1-tentativa1").collapse("hide");
                $("#collapse-multi-ex1-seleciona").collapse("hide");
                $("#collapse-multi-ex1-errada").collapse("show");
            }, 0);
            $(".correto").css("background-color", "#08da4e"); //fundo da box da escolha.
            $("#1-ex-multi-1").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#1-ex-multi-3").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#1-ex-multi-1").prop("disabled", true); // opção de bloqueio
            $("#1-ex-multi-2").prop("disabled", true); // opção de bloqueio
            $("#1-ex-multi-3").prop("disabled", true); // opção de bloqueio
            $("#1-ex-multi-4").prop("disabled", true); // opção de bloqueio
            $("#1-ex-multi-5").prop("disabled", true); // opção de bloqueio
        }
    }
}
//=======================================================
// Exercicio 2 - MULTIPLA ESCOLHA
//=======================================================

//=======================================================

//Para adicionar mais exercicios será necessario mudar o id de resposta, o número após (ex) e o número após as tentativas e o html voce tem que alterar o console html como referenciado

//=====================================================================================================================================================================
// VERDADEIRO OU FALSO - UNICA ESCOLHA
//=====================================================================================================================================================================
//=======================================================
// Exercicio 1 - VERDADEIRO OU FALSO - UNICA ESCOLHA
//=======================================================
function verdadeiro() {
    $("#verdadeiro").addClass("uk-disabled");
    $("#falso").addClass("uk-disabled");
}
function falso() {
    //tentando adicionar cor
    $("#verdadeiro").addClass("uk-disabled");
    $("#falso").addClass("uk-disabled");
}

//=======================================================
// Exercicio 2 - VERDADEIRO OU FALSO - UNICA ESCOLHA
//=======================================================
function verdadeiro2() {
    $("#verdadeiro2").addClass("disabled");
    $("#falso2").addClass("disabled");
}
function falso2() {
    $("#falso2").addClass("disabled");
    $("#verdadeiro2").addClass("disabled");
}

//=======================================================
// Exercicio 3 - VERDADEIRO OU FALSO - UNICA ESCOLHA
//=======================================================
function verdadeiro3() {
    $("#verdadeiro3").addClass("disabled");
    $("#falso3").addClass("disabled");
}
function falso3() {
    $("#falso3").addClass("disabled");
    $("#verdadeiro3").addClass("disabled");
}

//=====================================================================================================================================================================
// VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=====================================================================================================================================================================
var vftentativas1 = 0,
    vftentativas2 = 0,
    vftentativas3 = 0,
    vftentativas4 = 0,
    vftentativas5 = 0;
//=======================================================
// Exercicio 1 - VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=======================================================
function RespostaTrueOrFalse1() {
    //Checagem campos selecionados
    if (
        // Campo 1
        $("#1-ex-multi-tf-1").is(":checked") == false && //Verdadeiro
        $("#1-ex-multi-tf-2").is(":checked") == false && //Falso
        // Campo 2
        $("#1-ex-multi-tf-3").is(":checked") == false && //Verdadeiro
        $("#1-ex-multi-tf-4").is(":checked") == false && //Falso
        // Campo 3
        $("#1-ex-multi-tf-5").is(":checked") == false && // Verdadeiro
        $("#1-ex-multi-tf-6").is(":checked") == false
    ) {
        // Falso
        setTimeout(function () {
            $("#collapse-multi-tf-ex1-seleciona").collapse("show");
        }, 0);
    } else if (
        //Checagem da resposta
        // Campo 1
        $("#1-ex-multi-tf-1").is(":checked") == true && //Verdadeiro
        $("#1-ex-multi-tf-2").is(":checked") == false && //falso
        // Campo 2
        $("#1-ex-multi-tf-3").is(":checked") == false && //verdadeiro
        $("#1-ex-multi-tf-4").is(":checked") == true && //falso
        // Campo 3
        $("#1-ex-multi-tf-5").is(":checked") == true && //verdadeiro
        $("#1-ex-multi-tf-6").is(":checked") == false
    ) {
        //falso
        $("#ex1_multi-tf .form-check-input").prop("disabled", true);
        // $(".verdadeira1").css("background-color", "--bg-certo");

        setTimeout(function () {
            $("#vr-button1multi-tf").hide();
            $("#collapse-multi-tf-ex1-seleciona").collapse("hide");
            $("#collapse-multi-tf-ex1-tentativa1").collapse("hide");
            $("#collapse-multi-tf-ex1-certo").collapse("show");
        }, 0);
    } else {
        if (vftentativas1 == 0) {
            setTimeout(function () {
                $("#collapse-multi-tf-ex1-seleciona").collapse("hide");
                $("#collapse-multi-tf-ex1-tentativa1").collapse("show");
            }, 0);
            vftentativas1++;
        } else {
            setTimeout(function () {
                $("#vr-button1multi-tf").hide();
                $("#collapse-multi-tf-ex1-tentativa1").collapse("hide");
                $("#collapse-multi-tf-ex1-errada").collapse("show");
            }, 0);

            // $("#ex1_multi-tf_obj_3").prop('disabled', true);

            $("#ex1_multi-tf .form-check-input").prop("disabled", true);
            $("#1-ex-multi-tf-1").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#1-ex-multi-tf-4").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#1-ex-multi-tf-5").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
        }
    }
}

//=======================================================
// Exercicio 2 - VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=======================================================
function RespostaTrueOrFalse2() {
    //Checagem campos selecionados
    if (
        // Campo 1
        $("#2-ex-multi-tf-1").is(":checked") == false && // verdadeiro
        $("#2-ex-multi-tf-2").is(":checked") == false && //Falso
        // Campo 2
        $("#2-ex-multi-tf-3").is(":checked") == false && //Verdadeiro
        $("#2-ex-multi-tf-4").is(":checked") == false && //Falso
        // Campo 3
        $("#2-ex-multi-tf-5").is(":checked") == false && // Verdadeiro
        $("#2-ex-multi-tf-6").is(":checked") == false && // Falso
        // Campo 4
        $("#2-ex-multi-tf-7").is(":checked") == false && //Verdadeiro
        $("#2-ex-multi-tf-8").is(":checked") == false && //Falso
        // Campo 5
        $("#2-ex-multi-tf-9").is(":checked") == false && // Verdadeiro
        $("#2-ex-multi-tf-10").is(":checked") == false
    ) {
        // Falso
        setTimeout(function () {
            $("#collapse-multi-tf-ex2-seleciona").collapse("show");
        }, 0);
    } else if (
        //Checagem da resposta
        // Campo 1
        $("#2-ex-multi-tf-1").is(":checked") == true && //Verdadeiro -
        $("#2-ex-multi-tf-2").is(":checked") == false && //falso
        // Campo 2
        $("#2-ex-multi-tf-3").is(":checked") == false && //verdadeiro
        $("#2-ex-multi-tf-4").is(":checked") == true && //falso -
        // Campo 3
        $("#2-ex-multi-tf-5").is(":checked") == true && //Verdadeiro -
        $("#2-ex-multi-tf-6").is(":checked") == false && //falso
        // Campo 4
        $("#2-ex-multi-tf-7").is(":checked") == false && //verdadeiro
        $("#2-ex-multi-tf-8").is(":checked") == true && //falso -
        // Campo 5
        $("#2-ex-multi-tf-9").is(":checked") == false && //verdadeiro
        $("#2-ex-multi-tf-10").is(":checked") == true
    ) {
        //falso -
        //Verificação
        $("#vf input").prop("disabled", true);
        $(".verdadeira2").css("background-color", "--bg-certo");

        setTimeout(function () {
            $("#vr-button2multi-tf").hide();
            $("#collapse-multi-tf-ex2-seleciona").collapse("hide");
            $("#collapse-multi-tf-ex2-tentativa1").collapse("hide");
            $("#collapse-multi-tf-ex2-certo").collapse("show");
        }, 0);
    } else {
        if (vftentativas2 == 0) {
            setTimeout(function () {
                $("#collapse-multi-tf-ex2-seleciona").collapse("hide");
                $("#collapse-multi-tf-ex2-tentativa1").collapse("show");
            }, 0);
            vftentativas2++;
        } else {
            setTimeout(function () {
                $("#vr-button2multi-tf").hide();
                $("#collapse-multi-tf-ex2-tentativa1").collapse("hide");
                $("#collapse-multi-tf-ex2-errada").collapse("show");
            }, 0);

            $("#vf input").prop("disabled", true);
            $(".verdadeira2").css("background-color", "--bg-certo"); //fundo da box da escolha.

            $("#vf input").prop("disabled", true);
            $("#2-ex-multi-tf-1").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#2-ex-multi-tf-4").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#2-ex-multi-tf-5").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#2-ex-multi-tf-8").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
            $("#2-ex-multi-tf-10").prop("checked", true); // opção verdadeira o check = a bolinha da resposta.
        }
    }
}

//Para adicionar mais exercicios será necessario mudar o id de resposta, o número após (ex) e o número após as tentativas e o html voce tem que alterar o console html como referenciado
//=====================================================================================================================================================================
// COMBOBOX
//=====================================================================================================================================================================
var tentativaspergunta1 = 0,
    tentativaspergunta2 = 0,
    tentativaspergunta3 = 0,
    tentativaspergunta4 = 0,
    tentativaspergunta5 = 0,
    tentativaspergunta6 = 0,
    tentativaspergunta7 = 0,
    tentativaspergunta8 = 0,
    tentativaspergunta9 = 0,
    tentativaspergunta10 = 0;
//=======================================================
// Exercicio 1 - COMBOBOX
//=======================================================
$("#resposta-combobox1").click(function () {
    if (
        document.getElementById("combobox-1").value ==
            "Selecione" /* elemento do combobox que aparece ao iniciar */ ||
        document.getElementById("combobox-2").value == "Selecione" ||
        document.getElementById("combobox-3").value == "Selecione" ||
        document.getElementById("combobox-4").value == "Selecione" ||
        document.getElementById("combobox-5").value == "Selecione"
    ) {
        setTimeout(function () {
            $("#collapse-combobox1-0").collapse(
                "show"
            ); /* Apresenta o texto de selecione as seleções da alternativa*/
        }, 0);
    } else if (
        document.getElementById("combobox-1").value ==
            1 /* Esse if verifica qual é a alternativa correta*/ &&
        document.getElementById("combobox-2").value == 4 &&
        document.getElementById("combobox-3").value == 3 &&
        document.getElementById("combobox-4").value == 5 &&
        document.getElementById("combobox-5").value == 2
    ) {
        /* Todas as alternativas precisam estar corretas para validar. */

        setTimeout(function () {
            $("#vr-button-combobox1").removeClass("pt-5");
            $("#collapse-combobox1-0").collapse(
                "hide"
            ); /** Oculta os pop-us que não devem aparecer */
            $("#collapse-combobox1-2").collapse(
                "hide"
            ); /** Oculta os pop-us que não devem aparecer */
            $("#collapse-combobox1-1").collapse(
                "show"
            ); /* Apresenta o texto de seleção correta */
        }, 0);
        $(this).hide();

        document.getElementById(
            "combobox-1"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-1").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-1").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById(
            "combobox-2"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-2").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-2").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById(
            "combobox-3"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-3").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-3").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById(
            "combobox-4"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-4").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-4").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById(
            "combobox-5"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-5").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-5").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById("resposta-combobox1").style.display =
            "none"; /** Oculta o botão verificar resposta */
    } else {
        if (tentativaspergunta1 == 0) {
            setTimeout(function () {
                $("#collapse-combobox1-0").collapse("hide");
                $("#collapse-combobox1-2").collapse(
                    "show"
                ); /* Apresenta o texto de seleção errada (primeira tentativa) */
            }, 0);

            tentativaspergunta1++;
            if (document.getElementById("combobox-1").value == 5) {
            }
            if (document.getElementById("combobox-2").value == 3) {
            }
            if (document.getElementById("combobox-3").value == 4) {
            }
            if (document.getElementById("combobox-4").value == 2) {
            }
            if (document.getElementById("combobox-5").value == 1) {
            }
        } else {
            if (tentativaspergunta1 == 1) {
                tentativaspergunta1++;
                if (document.getElementById("combobox-1").value == 1) {
                    document.getElementById("combobox-1").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox-1").style.color =
                        "#d94242";
                }

                if (document.getElementById("combobox-2").value == 3) {
                    document.getElementById("combobox-2").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox-2").style.color =
                        "#d94242";
                }

                if (document.getElementById("combobox-3").value == 1) {
                    document.getElementById("combobox-3").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox-3").style.color =
                        "#d94242";
                }

                if (document.getElementById("combobox-4").value == 4) {
                    document.getElementById("combobox-4").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox-4").style.color =
                        "#d94242";
                }

                if (document.getElementById("combobox-5").value == 5) {
                    document.getElementById("combobox-5").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox-5").style.color =
                        "#d94242";
                }

                setTimeout(function () {
                    $("#vr-button-combobox1").removeClass("pt-5");
                    $("#collapse-combobox1-2").collapse("hide");
                    $("#collapse-combobox1-3").collapse(
                        "show"
                    ); /** Apresenta o pop-up de resposta errada final (segunda tentativa). */
                }, 0);

                document.getElementById("combobox-1").disabled = true;
                document.getElementById("combobox-2").disabled = true;
                document.getElementById("combobox-3").disabled = true;
                document.getElementById("combobox-4").disabled = true;
                document.getElementById("combobox-5").disabled = true;

                $("#resposta-combobox1").hide();
                $(this).hide();
            }
        }
    }
});

//=======================================================
// Exercicio 2 - COMBOBOX
//=======================================================
$("#resposta-combobox2").click(function () {
    if (
        document.getElementById("combobox2-1").value ==
            "Selecione" /* elemento do combobox que aparece ao iniciar */ ||
        document.getElementById("combobox2-2").value == "Selecione" ||
        document.getElementById("combobox2-3").value == "Selecione"
    ) {
        setTimeout(function () {
            $("#collapse-combobox2-0").collapse(
                "show"
            ); /* Apresenta o texto de selecione as seleções da alternativa*/
        }, 0);
    } else if (
        document.getElementById("combobox2-1").value ==
            1 /* Esse if verifica qual é a alternativa correta*/ &&
        document.getElementById("combobox2-2").value == 1 &&
        document.getElementById("combobox2-3").value == 1
    ) {
        /* Todas as alternativas precisam estar corretas para validar. */

        setTimeout(function () {
            $("#vr-button-combobox2").removeClass("pt-5");
            $("#collapse-combobox2-0").collapse(
                "hide"
            ); /** Oculta os pop-us que não devem aparecer */
            $("#collapse-combobox2-2").collapse(
                "hide"
            ); /** Oculta os pop-us que não devem aparecer */
            $("#collapse-combobox2-1").collapse(
                "show"
            ); /* Apresenta o texto de seleção correta */
        }, 0);
        $(this).hide();

        document.getElementById(
            "combobox2-1"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-1").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-1").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById(
            "combobox2-2"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-2").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-2").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById(
            "combobox2-3"
        ).disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-3").style.fontWeight =
            "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-3").style.color =
            "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById("resposta-combobox2").style.display =
            "none"; /** Oculta o botão verificar resposta */
    } else {
        if (tentativaspergunta2 == 0) {
            setTimeout(function () {
                $("#collapse-combobox2-0").collapse("hide");
                $("#collapse-combobox2-2").collapse(
                    "show"
                ); /* Apresenta o texto de seleção errada (primeira tentativa) */
            }, 0);

            tentativaspergunta2++;
            if (document.getElementById("combobox2-3").value == 1) {
            }

            if (document.getElementById("combobox2-2").value == 1) {
            }

            if (document.getElementById("combobox2-1").value == 1) {
            }
            setTimeout(function () {}, 0);
        } else {
            if (tentativaspergunta2 == 1) {
                tentativaspergunta2++;
                if (document.getElementById("combobox2-1").value == 1) {
                    document.getElementById("combobox2-1").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox2-1").style.color =
                        "#d94242";
                }

                if (document.getElementById("combobox2-2").value == 1) {
                    document.getElementById("combobox2-2").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox2-2").style.color =
                        "#d94242";
                }

                if (document.getElementById("combobox2-3").value == 1) {
                    document.getElementById("combobox2-3").style.color =
                        "#6ea778";
                } else {
                    document.getElementById("combobox2-3").style.color =
                        "#d94242";
                }

                setTimeout(function () {
                    $("#vr-button-combobox2").removeClass("pt-5");
                    $("#collapse-combobox2-2").collapse("hide");
                    $("#collapse-combobox2-3").collapse(
                        "show"
                    ); /** Apresenta o pop-up de resposta errada final (segunda tentativa). */
                }, 0);

                document.getElementById("combobox2-1").disabled = true;
                document.getElementById("combobox2-2").disabled = true;
                document.getElementById("combobox2-3").disabled = true;

                $("#resposta-combobox2").hide();
                $(this).hide();
            }
        }
    }
});