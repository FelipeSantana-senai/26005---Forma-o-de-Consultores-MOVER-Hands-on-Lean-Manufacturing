let creditos = {
    presidente: "Antonio Ricardo Alvarez Alban",
    gabineteDaPresidência: "xxxxxx",
    chefeDoGabinete: "Danusa Costa Lima e Silva de Amorim",
    presidenteDoConselhoNacional: "Antonio Ricardo Alvarez Alban",
    DiretorGeralCNI: "Gustavo Leal Sales Filho",
    DiretorGeralDN: "Gustavo Leal Sales Filho",
    SuperintendenteDeEducaçãoProfissionalESuperior: "Felipe Esteves Morgado",
    GerenteDeTecnologiasEducacionais: "Luiz Eduardo Leão",
    CoordenaçãoGeralDeDesenvolvimentoDosRecursosDidaticosNacionais: [
        "Anna Christina Theodora Aun de Azevedo Nascimento", "Cyro Visgueiro Maciel",
        "Laíse Caldeira Pedroso", "Décio Campos da Silva"],
    diretorRegional: "Ricardo Figueiredo Terra",
    GerenteDeEducacao: "Cassia Regina Souza da Cruz",
    DiretorDaEscolaSENAIDeEducaçãoOnline: "Luiz Carlos de Almeida Filho",
    DesenvolvimentoDeDonteudo: [],
    Coordenacao: ["Ana Claudia Neif Sanches Yasuraoka", "Melissa Rocha Gabarrone"],
    ProducaoMultimidia: [
        "Camila Ciarini Dias", "Maurício Rodrigues de Moraes", "Anderson Dos Santos Araujo",
        "Beatriz Helena Pedro", "Caio Marques Rodrigues", "Camilla Tauany Ribeiro Gomes",
        "Ederson Guilherme Antonio Silva", "Enrico Moreira Veiga Zilet", "Ezequiel Regino Monção",
        "Felipe de Santana Gonçalves", "Gisele Gomes da Silva", "Iris Toloni", "Isabella Ferreira",
        "Jevan Antonio de Souza Rocha", "Juliana Rumi Fujishima", "Ligia dos Santos Daghes",
        "Luiz Sansone", "Marisa Daniela Pereira Araujo", "Mateus Eustáquio de Oliveira",
        "Matheus Antônio de Guimarães Elegância", "Mhyrella Giovanna Massarente de Oliveira",
        "Thiago da Silva Rosa", "Tiago Florêncio da Silva", "Willian Ricardo Colombo"],
    DesignDeAprendizagem: [
        "Adriana de Souza Farias", "Isabela de Oliveira Crivellari", "João Francisco Correia de Souza",
        "Phillipe Rocca Datovo", "Ana Julia Carvalheiro Costa", "Andrei Souza Alves dos Santos",
        "Annadeives Aparecida Conceição Pita", "Catarine Aurora Nogueira Pereira", "Clarice da Silva Elias",
        "Cristiane de Barros Rodrigues Favareto", "Cristina Yurie Takahashi", "Daniel Coronel", "Daniel Vieira",
        "Ester Veronica Santos Jardim", "Flávia dos Santos Silveira", "Giuliana Reis Cardoso", "Jeferson Paiva",
        "Juliana Barbosa Manso", "Katya Martinez Almeida", "Larissa Gonçalves Ferreira Dias",
        "Leila Fernanda de Oliveira", "Maria Eronilsa Nascimento Ciriaco", "Mariana Almeida",
        "Rafaelly Domicia de Castro", "Raphael Todoverto Soares Silva", "Regina Kambara Hirata",
        "Simony Pimentel Santos do Nascimento", "Thiago da Silva Ferreira", "Victória Mendes Pereira"],
    DesenvolvimentoTecnologico: [
        "Rafael Santiago Apolinário", "Aldo Toma Junior", "Douglas Lacerda da Conceição",
        "Rolfi Cintas Gomes Luz", "Vinicius Vieira Lima"]
}

// Inserindo Diretor Regional SP
$("#diretorRegionalSP").find("em").length == 0 ? $("#diretorRegionalSP").prepend(`<em> ${creditos.diretorRegional}</em>`) : console.log("já tem Diretor Regional")

// Inserindo Gerente de Educação SP
$("#gerenteDeEducacaoSP").find("em").length == 0 ? $("#gerenteDeEducacaoSP").prepend(`<em> ${creditos.GerenteDeEducacao}</em>`) : console.log("já tem Gerente De Educacao")


// Inserindo Diretor da Escola Senai Educação Online SP
$("#diretorDaEscolaSENAIDeEducaçãoOnlineSP").find("em").length == 0 ? $("#diretorDaEscolaSENAIDeEducaçãoOnlineSP").prepend(`<em> ${creditos.DiretorDaEscolaSENAIDeEducaçãoOnline}</em>`) : console.log("já tem Diretor Da EscolaSENAI De Educação Online")

// Inserindo desenvolvimento De Conteudo SP
$("#desenvolvimentoDeConteudoSP").find("em").length == 0 ? creditos.DesenvolvimentoDeDonteudo.forEach(conteudista => $("#desenvolvimentoDeDonteudoSP").prepend(`<em> ${conteudista}</em> <br>`)) : console.log("já tem Desenvolvimento De Conteudo")

// Inserindo cordenadores SP
$("#coordenacaoSP").find("em").length == 0 ? creditos.Coordenacao.forEach(cordenador => $("#coordenacaoSP").prepend(`<em> ${cordenador}</em> <br>`)) : console.log("já tem coordenacao")

// Inserindo Producao Multimidia SP
$("#producaoMultimidiaSP").find("em").length == 0 ? creditos.ProducaoMultimidia.forEach(produtorMultimidia => $("#producaoMultimidiaSP").prepend(`<em> ${produtorMultimidia}</em> <br>`)) : console.log("já tem Producao Multimidia")

// Inserindo Producao Multimidia Design De Aprendizagem SP
$("#designDeAprendizagemSP").find("em").length == 0 ? creditos.DesignDeAprendizagem.forEach(designDeAprendizagem => $("#designDeAprendizagemSP").prepend(`<em> ${designDeAprendizagem}</em> <br>`)) : console.log("já tem Design De Aprendizagem")

// Inserindo Desenvolvimento Tecnologico SP
$("#desenvolvimentoTecnologicoSP").find("em").length == 0 ? creditos.DesenvolvimentoTecnologico.forEach(desenvolvedorTecnologico => $("#desenvolvimentoTecnologicoSP").prepend(`<em> ${desenvolvedorTecnologico}</em> <br>`)) : console.log("já tem Desenvolvimento Tecnologico")



// Inserindo presidente DN
$("#presidente").find("em").length == 0 ? $("#presidente").prepend(`<em> ${creditos.presidente}</em>`) : console.log("já tem Diretor Regional")

// Inserindo Chefe do Gabinete – Diretora DN
$("#chefeDoGabinete").find("em").length == 0 ? $("#chefeDoGabinete").prepend(`<em> ${creditos.chefeDoGabinete}</em>`) : console.log("já tem Diretor Regional")

// Inserindo Presidente do Conselho Nacional DN
$("#presidenteDoConselhoNacional").find("em").length == 0 ? $("#presidenteDoConselhoNacional").prepend(`<em> ${creditos.presidenteDoConselhoNacional}</em>`) : console.log("já tem Diretor Regional")

// Inserindo Diretor Regional DN
$("#diretorRegionalDN").find("em").length == 0 ? $("#diretorRegionalDN").prepend(`<em> ${creditos.diretorRegional}</em>`) : console.log("já tem Diretor Regional")

// Inserindo Gerente de Educação DN
$("#gerenteDeEducacaoDN").find("em").length == 0 ? $("#gerenteDeEducacaoDN").prepend(`<em> ${creditos.GerenteDeEducacao}</em>`) : console.log("já tem Gerente De Educacao")

// Inserindo Diretor Geral CNI
$("#DiretorGeralCNI").find("em").length == 0 ? $("#DiretorGeralCNI").prepend(`<em> ${creditos.DiretorGeralCNI}</em>`) : console.log("já tem Diretor Geral CNI")

// Inserindo Diretor Geral DN
$("#DiretorGeralDN").find("em").length == 0 ? $("#DiretorGeralDN").prepend(`<em> ${creditos.DiretorGeralDN}</em>`) : console.log("já tem Diretor Geral CNI")

// Inserindo Superintendente De Educação Profissional E Superior DN
$("#SuperintendenteDeEducaçãoProfissionalESuperior").find("em").length == 0 ? $("#SuperintendenteDeEducaçãoProfissionalESuperior").prepend(`<em> ${creditos.SuperintendenteDeEducaçãoProfissionalESuperior}</em>`) : console.log("já tem Superintendente De Educação Profissional E Superior CNI")

// Inserindo Gerente De Tecnologias Educacionais DN
$("#GerenteDeTecnologiasEducacionais").find("em").length == 0 ? $("#GerenteDeTecnologiasEducacionais").prepend(`<em> ${creditos.GerenteDeTecnologiasEducacionais}</em>`) : console.log("já tem Gerente De Tecnologias Educacionais CNI")

// Inserindo Coordenação Geral de Desenvolvimento dos Recursos Didáticos Nacionais
 $("#CoordenaçãoGeralDeDesenvolvimentoDosRecursosDidaticosNacionais").find("em").length == 0 ? creditos.CoordenaçãoGeralDeDesenvolvimentoDosRecursosDidaticosNacionais.forEach(produtorMultimidia => $("#CoordenaçãoGeralDeDesenvolvimentoDosRecursosDidaticosNacionais").prepend(`<em> ${produtorMultimidia}</em> <br>`)) : console.log("já tem Producao Multimidia")

// Inserindo Diretor da Escola Senai Educação Online DN
$("#diretorDaEscolaSENAIDeEducaçãoOnlineDN").find("em").length == 0 ? $("#diretorDaEscolaSENAIDeEducaçãoOnlineDN").prepend(`<em> ${creditos.DiretorDaEscolaSENAIDeEducaçãoOnline}</em>`) : console.log("já tem Diretor Da EscolaSENAI De Educação Online")

// Inserindo desenvolvimento De Conteudo DN
$("#desenvolvimentoDeConteudoDN").find("em").length == 0 ? creditos.DesenvolvimentoDeDonteudo.forEach(conteudista => $("#desenvolvimentoDeDonteudoDN").prepend(`<em> ${conteudista}</em> <br>`)) : console.log("já tem Desenvolvimento De Conteudo")

// Inserindo cordenadores DN
$("#coordenacaoDN").find("em").length == 0 ? creditos.Coordenacao.forEach(cordenador => $("#coordenacaoDN").prepend(`<em> ${cordenador}</em> <br>`)) : console.log("já tem coordenacao")

// Inserindo Producao Multimidia DN
$("#producaoMultimidiaDN").find("em").length == 0 ? creditos.ProducaoMultimidia.forEach(produtorMultimidia => $("#producaoMultimidiaDN").prepend(`<em> ${produtorMultimidia}</em> <br>`)) : console.log("já tem Producao Multimidia")


// Inserindo Producao Multimidia Design De Aprendizagem DN
$("#designDeAprendizagemDN").find("em").length == 0 ? creditos.DesignDeAprendizagem.forEach(designDeAprendizagem => $("#designDeAprendizagemDN").prepend(`<em> ${designDeAprendizagem}</em> <br>`)) : console.log("já tem Design De Aprendizagem")

// Inserindo Desenvolvimento Tecnologico DN
$("#desenvolvimentoTecnologicoDN").find("em").length == 0 ? creditos.DesenvolvimentoTecnologico.forEach(desenvolvedorTecnologico => $("#desenvolvimentoTecnologicoDN").prepend(`<em> ${desenvolvedorTecnologico}</em> <br>`)) : console.log("já tem Desenvolvimento Tecnologico")