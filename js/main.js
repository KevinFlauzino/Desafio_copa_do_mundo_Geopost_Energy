//======================================Consumindo dados da API com GET
function make_get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.setRequestHeader("git-user", "KevinFlauzino");
    request.send()
    return request.responseText    
}

data = make_get("https://estagio.geopostenergy.com/WorldCup/GetAllTeams")
list = JSON.parse(data)

//Lista dos times
list_teams = list.Result

//criando a Classe team
class Team{ 
    token;
    name;
    points = 0;
    goals = 0; 
    acc_goals = 0;  
    img;
}
//======================================

//======================================Times como objetos
const team_0 = new Team();
    team_0.name = list_teams[0].Name;
    team_0.token = list_teams[0].Token;      

const team_1 = new Team();
    team_1.name = list_teams[1].Name;
    team_1.token = list_teams[1].Token; 
    
const team_2 = new Team();
    team_2.name = list_teams[2].Name;
    team_2.token = list_teams[2].Token;

const team_3 = new Team();
    team_3.name = list_teams[3].Name;
    team_3.token = list_teams[3].Token;

const team_4 = new Team();
    team_4.name = list_teams[4].Name;
    team_4.token = list_teams[4].Token;

const team_5 = new Team();
    team_5.name = list_teams[5].Name;
    team_5.token = list_teams[5].Token;

const team_6 = new Team();    
    team_6.name = list_teams[6].Name;
    team_6.token = list_teams[6].Token;

const team_7 = new Team();
    team_7.name = list_teams[7].Name;
    team_7.token = list_teams[7].Token;

const team_8 = new Team();
    team_8.name = list_teams[8].Name;
    team_8.token = list_teams[8].Token;

const team_9 = new Team();
    team_9.name = list_teams[9].Name;
    team_9.token = list_teams[9].Token;

const team_10 = new Team();
    team_10.name = list_teams[10].Name;
    team_10.token = list_teams[10].Token;

const team_11 = new Team();
    team_11.name = list_teams[11].Name;
    team_11.token = list_teams[11].Token;

const team_12 = new Team();
    team_12.name = list_teams[12].Name;
    team_12.token = list_teams[12].Token;

const team_13 = new Team();
    team_13.name = list_teams[13].Name;
    team_13.token = list_teams[13].Token;

const team_14 = new Team();
    team_14.name = list_teams[14].Name;
    team_14.token = list_teams[14].Token;

const team_15 = new Team();
    team_15.name = list_teams[15].Name;
    team_15.token = list_teams[15].Token;

const team_16 = new Team();
    team_16.name = list_teams[16].Name;
    team_16.token = list_teams[16].Token;

const team_17 = new Team();
    team_17.name = list_teams[17].Name;
    team_17.token = list_teams[17].Token;

const team_18 = new Team();    
    team_18.name = list_teams[18].Name;
    team_18.token = list_teams[18].Token;

const team_19 = new Team();
    team_19.name = list_teams[19].Name;
    team_19.token = list_teams[19].Token;

const team_20 = new Team();
    team_20.name = list_teams[20].Name;
    team_20.token = list_teams[20].Token;

const team_21 = new Team();
    team_21.name = list_teams[21].Name;
    team_21.token = list_teams[21].Token;

const team_22 = new Team();
    team_22.name = list_teams[22].Name;
    team_22.token = list_teams[22].Token;

const team_23 = new Team();
    team_23.name = list_teams[23].Name;
    team_23.token = list_teams[23].Token;

const team_24 = new Team();
    team_24.name = list_teams[24].Name;
    team_24.token = list_teams[24].Token;

const team_25 = new Team();
    team_25.name = list_teams[25].Name;
    team_25.token = list_teams[25].Token;

const team_26 = new Team();
    team_26.name = list_teams[26].Name;
    team_26.token = list_teams[26].Token;

const team_27 = new Team();
    team_27.name = list_teams[27].Name;
    team_27.token = list_teams[27].Token;

const team_28 = new Team();
    team_28.name = list_teams[28].Name;
    team_28.token = list_teams[28].Token;

const team_29 = new Team();
    team_29.name = list_teams[29].Name;
    team_29.token = list_teams[29].Token;

const team_30 = new Team();
    team_30.name = list_teams[30].Name;
    team_30.token = list_teams[30].Token;

const team_31 = new Team();
    team_31.name = list_teams[31].Name;
    team_31.token = list_teams[31].Token; 




//Criando uma nova lista com os objetos
new_list = [team_0, team_1, team_2, team_3, team_4, team_5, team_6, team_7, team_8, team_9, team_10, team_11, team_12,
    team_13, team_14, team_15, team_16, team_17, team_18, team_19, team_20, team_21, team_22, team_23, team_24,
    team_25, team_26, team_27, team_28, team_29, team_30, team_31]

//Função que ramdomiza a lista em toda atualização
function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

//Ramdomizando nova lista
shuffleArray(new_list);   

//Função que relaciona imagem com o objeto ============================================================================
function img_object(inputArray, width){

    //criando array apenas com os nomes dos times
    name_array = [inputArray[0].name, inputArray[1].name,  inputArray[2].name,  inputArray[3].name,
                  inputArray[4].name, inputArray[5].name,  inputArray[6].name,  inputArray[7].name,
                  inputArray[8].name, inputArray[9].name,  inputArray[10].name,  inputArray[11].name,
                  inputArray[12].name, inputArray[13].name,  inputArray[14].name,  inputArray[15].name,
                  inputArray[16].name, inputArray[17].name,  inputArray[18].name,  inputArray[19].name,
                  inputArray[20].name, inputArray[21].name,  inputArray[22].name,  inputArray[23].name,
                  inputArray[24].name, inputArray[25].name,  inputArray[26].name,  inputArray[27].name,
                  inputArray[28].name, inputArray[29].name,  inputArray[30].name,  inputArray[31].name];   

    //colocando em ordem alfabética
    aux_array = name_array.sort(function (a, b){
        return a.localeCompare(b);});  

    //Ordenando array com objetos em ordem alfabética(nomes dos times)
    object_array = [];
        for(j=0; j<32; j+=1){
            for(i=0; i<32; i+=1){
                if(inputArray[i].name == aux_array[j])
                    object_array.push(inputArray[i]);   
            }
        }
            
    
    width_object = width; 

    //relacionando de fato as imagens aos objetos
    
    object_array[0].img = document.getElementById(aux_array[0]).innerHTML = "<img src='/img/alemanha.png' width='"+width_object+"'>";    
    object_array[1].img = document.getElementById(aux_array[1]).innerHTML = "<img src='/img/arabia_saudita.png' width='"+width_object+"'>"; 
    object_array[2].img = document.getElementById(aux_array[2]).innerHTML = "<img src='/img/argentina.png' width='"+width_object+"'>"; 
    object_array[3].img = document.getElementById(aux_array[3]).innerHTML = "<img src='/img/australia.png' width='"+width_object+"'>"; 
    object_array[4].img = document.getElementById(aux_array[4]).innerHTML = "<img src='/img/belgica.png' width='"+width_object+"'>"; 
    object_array[5].img = document.getElementById(aux_array[5]).innerHTML = "<img src='/img/brasil.png' width='"+width_object+"'>"; 
    object_array[6].img = document.getElementById(aux_array[6]).innerHTML = "<img src='/img/camaroes.png' width='"+width_object+"'>"; 
    object_array[7].img = document.getElementById(aux_array[7]).innerHTML = "<img src='/img/canada.png' width='"+width_object+"'>"; 
    object_array[8].img = document.getElementById(aux_array[8]).innerHTML = "<img src='/img/coreia_do_sul.png' width='"+width_object+"'>"; 
    object_array[9].img = document.getElementById(aux_array[9]).innerHTML = "<img src='/img/costa_rica.png' width='"+width_object+"'>"; 
    object_array[10].img = document.getElementById(aux_array[10]).innerHTML = "<img src='/img/croacia.png' width='"+width_object+"'>"; 
    object_array[11].img = document.getElementById(aux_array[11]).innerHTML = "<img src='/img/dinamarca.png' width='"+width_object+"'>"; 
    object_array[12].img = document.getElementById(aux_array[12]).innerHTML = "<img src='/img/equador.png' width='"+width_object+"'>"; 
    object_array[13].img = document.getElementById(aux_array[13]).innerHTML = "<img src='/img/espanha.png' width='"+width_object+"'>"; 
    object_array[14].img = document.getElementById(aux_array[14]).innerHTML = "<img src='/img/estados_unidos.png' width='"+width_object+"'>"; 
    object_array[15].img = document.getElementById(aux_array[15]).innerHTML = "<img src='/img/frança.png' width='"+width_object+"'>"; 
    object_array[16].img = document.getElementById(aux_array[16]).innerHTML = "<img src='/img/gana.png' width='"+width_object+"'>"; 
    object_array[17].img = document.getElementById(aux_array[17]).innerHTML = "<img src='/img/holanda.png' width='"+width_object+"'>"; 
    object_array[18].img = document.getElementById(aux_array[18]).innerHTML = "<img src='/img/inglaterra.png' width='"+width_object+"'>"; 
    object_array[19].img = document.getElementById(aux_array[19]).innerHTML = "<img src='/img/ira.png' width='"+width_object+"'>"; 
    object_array[20].img = document.getElementById(aux_array[20]).innerHTML = "<img src='/img/japao.png' width='"+width_object+"'>"; 
    object_array[21].img = document.getElementById(aux_array[21]).innerHTML = "<img src='/img/marrocos.png' width='"+width_object+"'>"; 
    object_array[22].img = document.getElementById(aux_array[22]).innerHTML = "<img src='/img/mexico.png' width='"+width_object+"'>"; 
    object_array[23].img = document.getElementById(aux_array[23]).innerHTML = "<img src='/img/pais_de_gales.png' width='"+width_object+"'>"; 
    object_array[24].img = document.getElementById(aux_array[24]).innerHTML = "<img src='/img/polonia.png' width='"+width_object+"'>"; 
    object_array[25].img = document.getElementById(aux_array[25]).innerHTML = "<img src='/img/portugal.png' width='"+width_object+"'>"; 
    object_array[26].img = document.getElementById(aux_array[26]).innerHTML = "<img src='/img/qatar.png' width='"+width_object+"'>"; 
    object_array[27].img = document.getElementById(aux_array[27]).innerHTML = "<img src='/img/senegal.png' width='"+width_object+"'>"; 
    object_array[28].img = document.getElementById(aux_array[28]).innerHTML = "<img src='/img/servia.png' width='"+width_object+"'>"; 
    object_array[29].img = document.getElementById(aux_array[29]).innerHTML = "<img src='/img/suiça.png' width='"+width_object+"'>"; 
    object_array[30].img = document.getElementById(aux_array[30]).innerHTML = "<img src='/img/tunisia.png' width='"+width_object+"'>"; 
    object_array[31].img = document.getElementById(aux_array[31]).innerHTML = "<img src='/img/uruguai.png' width='"+width_object+"'>";    
}

img_object(new_list, 70);    
        
    //criando grupos randômicos, pois a lista foi embaralhada
    group_A = [new_list[1], new_list[2], new_list[3], new_list[4]];
        document.getElementById("group_A_1").innerHTML = "<h2>"+group_A[0].name+"<br>"+group_A[0].img;
        document.getElementById("group_A_2").innerHTML = "<h2>"+group_A[1].name+"<br>"+group_A[1].img;
        document.getElementById("group_A_3").innerHTML = "<h2>"+group_A[2].name+"<br>"+group_A[2].img;
        document.getElementById("group_A_4").innerHTML = "<h2>"+group_A[3].name+"<br>"+group_A[3].img; 
    group_B = [new_list[5], new_list[6], new_list[7], new_list[8]];
        document.getElementById("group_B_1").innerHTML = "<h2>"+group_B[0].name+"<br>"+group_B[0].img;
        document.getElementById("group_B_2").innerHTML = "<h2>"+group_B[1].name+"<br>"+group_B[1].img;
        document.getElementById("group_B_3").innerHTML = "<h2>"+group_B[2].name+"<br>"+group_B[2].img;
        document.getElementById("group_B_4").innerHTML = "<h2>"+group_B[3].name+"<br>"+group_B[3].img;   
    group_C = [new_list[9], new_list[10], new_list[11], new_list[12]];
        document.getElementById("group_C_1").innerHTML = "<h2>"+group_C[0].name+"<br>"+group_C[0].img;
        document.getElementById("group_C_2").innerHTML = "<h2>"+group_C[1].name+"<br>"+group_C[1].img;
        document.getElementById("group_C_3").innerHTML = "<h2>"+group_C[2].name+"<br>"+group_C[2].img;
        document.getElementById("group_C_4").innerHTML = "<h2>"+group_C[3].name+"<br>"+group_C[3].img;    
    group_D = [new_list[13], new_list[14], new_list[15], new_list[16]];
        document.getElementById("group_D_1").innerHTML = "<h2>"+group_D[0].name+"<br>"+group_D[0].img;
        document.getElementById("group_D_2").innerHTML = "<h2>"+group_D[1].name+"<br>"+group_D[1].img;
        document.getElementById("group_D_3").innerHTML = "<h2>"+group_D[2].name+"<br>"+group_D[2].img;
        document.getElementById("group_D_4").innerHTML = "<h2>"+group_D[3].name+"<br>"+group_D[3].img;   
    group_E = [new_list[17], new_list[18], new_list[19], new_list[20]];
        document.getElementById("group_E_1").innerHTML = "<h2>"+group_E[0].name+"<br>"+group_E[0].img;
        document.getElementById("group_E_2").innerHTML = "<h2>"+group_E[1].name+"<br>"+group_E[1].img;
        document.getElementById("group_E_3").innerHTML = "<h2>"+group_E[2].name+"<br>"+group_E[2].img;
        document.getElementById("group_E_4").innerHTML = "<h2>"+group_E[3].name+"<br>"+group_E[3].img; 
    group_F = [new_list[21], new_list[22], new_list[23], new_list[24]];        
        document.getElementById("group_F_1").innerHTML = "<h2>"+group_F[0].name+"<br>"+group_F[0].img;
        document.getElementById("group_F_2").innerHTML = "<h2>"+group_F[1].name+"<br>"+group_F[1].img;
        document.getElementById("group_F_3").innerHTML = "<h2>"+group_F[2].name+"<br>"+group_F[2].img;
        document.getElementById("group_F_4").innerHTML = "<h2>"+group_F[3].name+"<br>"+group_F[3].img; 
    group_G = [new_list[25], new_list[26], new_list[27], new_list[28]];        
        document.getElementById("group_G_1").innerHTML = "<h2>"+group_G[0].name+"<br>"+group_G[0].img;
        document.getElementById("group_G_2").innerHTML = "<h2>"+group_G[1].name+"<br>"+group_G[1].img;
        document.getElementById("group_G_3").innerHTML = "<h2>"+group_G[2].name+"<br>"+group_G[2].img;
        document.getElementById("group_G_4").innerHTML = "<h2>"+group_G[3].name+"<br>"+group_G[3].img;  
    group_H = [new_list[29], new_list[30], new_list[31], new_list[0]];
        document.getElementById("group_H_1").innerHTML = "<h2>"+group_H[0].name+"<br>"+group_H[0].img;
        document.getElementById("group_H_2").innerHTML = "<h2>"+group_H[1].name+"<br>"+group_H[1].img;
        document.getElementById("group_H_3").innerHTML = "<h2>"+group_H[2].name+"<br>"+group_H[2].img;
        document.getElementById("group_H_4").innerHTML = "<h2>"+group_H[3].name+"<br>"+group_H[3].img;  

        console.log("GRUPO A --> ", group_A);
            
//======================================


//======================================Função que cria um Rank dos times (começo)
function ranking(inputArray){ 

    //-----------------------------------------FUNÇÕES DA FUNÇÃO (começo)
    //Função necessária para ter uma ordem crescente correta
    function compare_numbers(a, b) {
        return a - b;
    }

    //função que compara os gols
    function compare_goals(inputArray){
        if(inputArray[0].acc_goals > inputArray[1].acc_goals){
            inputArray[0].points += 0.1;        
        }
        else if(inputArray[0].acc_goals < inputArray[1].acc_goals){
            inputArray[1].points += 0.1;; 
        }
        else{      
            lucky = [inputArray[0], inputArray[1]];
            shuffleArray(lucky) ;

            lucky[0].points += 0.1;  
        }
    }    

    //Função que rankeia por pontos
    function rank_points(inputArray){
        for(i=0; i<4; i+=1){
            if( inputArray[i].points == rank_array_points[3]){
                points_number_1 = inputArray[i];
            }
            if( inputArray[i].points == rank_array_points[2]){
                points_number_2 = inputArray[i];
            }
            if( inputArray[i].points == rank_array_points[1]){
                points_number_3 = inputArray[i];
            }
            if( inputArray[i].points == rank_array_points[0]){
                points_number_4 = inputArray[i];  
            }        
        } 

        new_Array_points = [points_number_1, points_number_2,
                            points_number_3, points_number_4];

        return new_Array_points;
    }

    //Função que Verifica se é preciso comparar os gols dos times como forma de desempate
    function diff_goals(inputArray){
    for(i=0; i<4; i+=1){
            if (inputArray[0].points == inputArray[1].points){
                compare_goals([inputArray[0], inputArray[1]]);            
            } 
            if (inputArray[0].points == inputArray[2].points){
                compare_goals([inputArray[0], inputArray[2]]);
            } 
            if (inputArray[0].points == inputArray[3].points){
                compare_goals([inputArray[0], inputArray[3]]);
            } 
            if (inputArray[1].points == inputArray[2].points){
                compare_goals([inputArray[1], inputArray[2]]);
            } 
            if (inputArray[1].points == inputArray[3].points){
                compare_goals([inputArray[1], inputArray[3]]);
            } 
            if (inputArray[2].points == inputArray[3].points){
                compare_goals([inputArray[2], inputArray[3]]);
            } 
        } 
    }    

    //Função para retirar os pontos adicionados para tomar decisão
    function normalize_points(inputArray){
        if((new_Array_points[0].points % 1) != 0){
            resto = new_Array_points[0].points % 1;
            new_Array_points[0].points = new_Array_points[0].points - resto;
        }
        if((new_Array_points[1].points % 1) != 0){
            resto = new_Array_points[1].points % 1;
            new_Array_points[1].points = new_Array_points[1].points - resto;
        }
        if((new_Array_points[2].points % 1) != 0){
            resto = new_Array_points[2].points % 1;
            new_Array_points[2].points = new_Array_points[2].points - resto;
        }
        if((new_Array_points[3].points % 1) != 0){
            resto = new_Array_points[3].points % 1;
            new_Array_points[3].points = new_Array_points[3].points - resto;
        }
    }

    //Função que gera o vetor de pontos atualizado
    function att_points(inputArray){
        //array dos pontos
        points_array = [inputArray[0].points, inputArray[1].points,
        inputArray[2].points, inputArray[3].points]    

        //Coloca em ordem crescente
        rank_array_points = points_array.sort(compare_numbers);

        return rank_array_points;
    }
    //-----------------------------------------FUNÇÕES DA FUNÇÃO (final)    

    //caso tenha 2 valores repetidos
    att_points(inputArray);
    diff_goals(inputArray);
    rank_points(inputArray);
  
    //caso tenha 3 valores repetidos
    att_points(inputArray);
    diff_goals(inputArray);
    rank_points(inputArray);
    
    //caso tenha 4 valores repetidos (máximo de repetições)
    att_points(inputArray);
    diff_goals(inputArray);
    rank_points(inputArray);
    
    //Retirando os pontos auxiliares adicionados
    normalize_points(inputArray);  
    
    winners = [new_Array_points[0], new_Array_points[1]];
    return winners;
}
//======================================Função que cria um Rank dos times (final)


//======================================Funções que criam as partidas (começo)
//-----Função Embaralhar grupo 
function ramdom_group(inputArray, num){
    if(num == 2){
        new_Array  = [inputArray[3], inputArray[0], inputArray[1], inputArray[2]];
    }
    else if(num == 3){
        new_Array  = [inputArray[1], inputArray[3], inputArray[2], inputArray[0]];
    }

    return new_Array;
}


//-----Função que realiza as partida individuais
function play_match(inputArray){

    //Realizando partida
    gols_team_1 = Math.floor(Math.random() * 10);
    gols_team_2 = Math.floor(Math.random() * 10);

    //Verificando situação do jogo (vitória / derrota / empate)
    if(gols_team_1 > gols_team_2){
        inputArray[0].points += 3;
    }   
    else if(gols_team_1 < gols_team_2){
        inputArray[1].points += 3;
    }
    else{
        inputArray[0].points += 1;
        inputArray[1].points += 1;
    }

    //gols da partida
    inputArray[0].goals = gols_team_1;
    inputArray[1].goals = gols_team_2;

    //acumulando os gols do time
    inputArray[0].acc_goals += gols_team_1;
    inputArray[1].acc_goals += gols_team_2;
}


//-----Função que faz 4 partidas de uma vez
function match_group(inputArray){
    //jogo 1
    confronto_1 = [inputArray[0], inputArray[1]];

    //jogo 2
    confronto_2 = [inputArray[2], inputArray[3]];

    //Jogos feitos
    play_match(confronto_1);
    play_match(confronto_2);
}
//======================================Funções que criam as partidas (final)

//======================================Começando as simulações dos jogos
//====================================Fase de grupos (começo)
img_object(new_list, 40);
//Partidas 1
match_group(group_A);    
    document.getElementById("group_A_pair1_match1_t1").innerHTML = "<h2>"+group_A[0].name+"</h2>"+group_A[0].img+"<p>Gols: "+group_A[0].goals+"</p>";
    document.getElementById("group_A_pair1_match1_t2").innerHTML = "<h2>"+group_A[1].name+"</h2>"+group_A[1].img+"<p>Gols: "+group_A[1].goals+"</p>";
    document.getElementById("group_A_pair2_match1_t1").innerHTML = "<h2>"+group_A[2].name+"</h2>"+group_A[2].img+"<p>Gols: "+group_A[2].goals+"</p>";
    document.getElementById("group_A_pair2_match1_t2").innerHTML = "<h2>"+group_A[3].name+"</h2>"+group_A[3].img+"<p>Gols: "+group_A[3].goals+"</p>";  
  
match_group(group_B);
    document.getElementById("group_B_pair1_match1_t1").innerHTML = "<h2>"+group_B[0].name+"</h2>"+group_B[0].img+"<p>Gols: "+group_B[0].goals+"</p>";
    document.getElementById("group_B_pair1_match1_t2").innerHTML = "<h2>"+group_B[1].name+"</h2>"+group_B[1].img+"<p>Gols: "+group_B[1].goals+"</p>";
    document.getElementById("group_B_pair2_match1_t1").innerHTML = "<h2>"+group_B[2].name+"</h2>"+group_B[2].img+"<p>Gols: "+group_B[2].goals+"</p>";
    document.getElementById("group_B_pair2_match1_t2").innerHTML = "<h2>"+group_B[3].name+"</h2>"+group_B[3].img+"<p>Gols: "+group_B[3].goals+"</p>"; 

match_group(group_C);
    document.getElementById("group_C_pair1_match1_t1").innerHTML = "<h2>"+group_C[0].name+"</h2>"+group_C[0].img+"<p>Gols: "+group_C[0].goals+"</p>";
    document.getElementById("group_C_pair1_match1_t2").innerHTML = "<h2>"+group_C[1].name+"</h2>"+group_C[1].img+"<p>Gols: "+group_C[1].goals+"</p>";
    document.getElementById("group_C_pair2_match1_t1").innerHTML = "<h2>"+group_C[2].name+"</h2>"+group_C[2].img+"<p>Gols: "+group_C[2].goals+"</p>";
    document.getElementById("group_C_pair2_match1_t2").innerHTML = "<h2>"+group_C[3].name+"</h2>"+group_C[3].img+"<p>Gols: "+group_C[3].goals+"</p>"; 
match_group(group_D);
    document.getElementById("group_D_pair1_match1_t1").innerHTML = "<h2>"+group_D[0].name+"</h2>"+group_D[0].img+"<p>Gols: "+group_D[0].goals+"</p>";
    document.getElementById("group_D_pair1_match1_t2").innerHTML = "<h2>"+group_D[1].name+"</h2>"+group_D[1].img+"<p>Gols: "+group_D[1].goals+"</p>";
    document.getElementById("group_D_pair2_match1_t1").innerHTML = "<h2>"+group_D[2].name+"</h2>"+group_D[2].img+"<p>Gols: "+group_D[2].goals+"</p>";
    document.getElementById("group_D_pair2_match1_t2").innerHTML = "<h2>"+group_D[3].name+"</h2>"+group_D[3].img+"<p>Gols: "+group_D[3].goals+"</p>"; 
match_group(group_E);
    document.getElementById("group_E_pair1_match1_t1").innerHTML = "<h2>"+group_E[0].name+"</h2>"+group_E[0].img+"<p>Gols: "+group_E[0].goals+"</p>";
    document.getElementById("group_E_pair1_match1_t2").innerHTML = "<h2>"+group_E[1].name+"</h2>"+group_E[1].img+"<p>Gols: "+group_E[1].goals+"</p>";
    document.getElementById("group_E_pair2_match1_t1").innerHTML = "<h2>"+group_E[2].name+"</h2>"+group_E[2].img+"<p>Gols: "+group_E[2].goals+"</p>";
    document.getElementById("group_E_pair2_match1_t2").innerHTML = "<h2>"+group_E[3].name+"</h2>"+group_E[3].img+"<p>Gols: "+group_E[3].goals+"</p>"; 
match_group(group_F);
    document.getElementById("group_F_pair1_match1_t1").innerHTML = "<h2>"+group_F[0].name+"</h2>"+group_F[0].img+"<p>Gols: "+group_F[0].goals+"</p>";
    document.getElementById("group_F_pair1_match1_t2").innerHTML = "<h2>"+group_F[1].name+"</h2>"+group_F[1].img+"<p>Gols: "+group_F[1].goals+"</p>";
    document.getElementById("group_F_pair2_match1_t1").innerHTML = "<h2>"+group_F[2].name+"</h2>"+group_F[2].img+"<p>Gols: "+group_F[2].goals+"</p>";
    document.getElementById("group_F_pair2_match1_t2").innerHTML = "<h2>"+group_F[3].name+"</h2>"+group_F[3].img+"<p>Gols: "+group_F[3].goals+"</p>"; 
match_group(group_G);
    document.getElementById("group_G_pair1_match1_t1").innerHTML = "<h2>"+group_G[0].name+"</h2>"+group_G[0].img+"<p>Gols: "+group_G[0].goals+"</p>";
    document.getElementById("group_G_pair1_match1_t2").innerHTML = "<h2>"+group_G[1].name+"</h2>"+group_G[1].img+"<p>Gols: "+group_G[1].goals+"</p>";
    document.getElementById("group_G_pair2_match1_t1").innerHTML = "<h2>"+group_G[2].name+"</h2>"+group_G[2].img+"<p>Gols: "+group_G[2].goals+"</p>";
    document.getElementById("group_G_pair2_match1_t2").innerHTML = "<h2>"+group_G[3].name+"</h2>"+group_G[3].img+"<p>Gols: "+group_G[3].goals+"</p>"; 
match_group(group_H);
    document.getElementById("group_H_pair1_match1_t1").innerHTML = "<h2>"+group_H[0].name+"</h2>"+group_H[0].img+"<p>Gols: "+group_H[0].goals+"</p>";
    document.getElementById("group_H_pair1_match1_t2").innerHTML = "<h2>"+group_H[1].name+"</h2>"+group_H[1].img+"<p>Gols: "+group_H[1].goals+"</p>";
    document.getElementById("group_H_pair2_match1_t1").innerHTML = "<h2>"+group_H[2].name+"</h2>"+group_H[2].img+"<p>Gols: "+group_H[2].goals+"</p>";
    document.getElementById("group_H_pair2_match1_t2").innerHTML = "<h2>"+group_H[3].name+"</h2>"+group_H[3].img+"<p>Gols: "+group_H[3].goals+"</p>";  
    
//Partidas 2
group_A = ramdom_group(group_A, 2)
match_group(group_A);    
    console.log("PROVA --> ", group_A);
    document.getElementById("group_A_pair1_match2_t1").innerHTML = "<h2>"+group_A[0].name+"</h2>"+group_A[0].img+"<p>Gols: "+group_A[0].goals+"</p>";
    document.getElementById("group_A_pair1_match2_t2").innerHTML = "<h2>"+group_A[1].name+"</h2>"+group_A[1].img+"<p>Gols: "+group_A[1].goals+"</p>";
    document.getElementById("group_A_pair2_match2_t1").innerHTML = "<h2>"+group_A[2].name+"</h2>"+group_A[2].img+"<p>Gols: "+group_A[2].goals+"</p>";
    document.getElementById("group_A_pair2_match2_t2").innerHTML = "<h2>"+group_A[3].name+"</h2>"+group_A[3].img+"<p>Gols: "+group_A[3].goals+"</p>";  
  
group_B = ramdom_group(group_B, 2)
match_group(group_B);
    document.getElementById("group_B_pair1_match2_t1").innerHTML = "<h2>"+group_B[0].name+"</h2>"+group_B[0].img+"<p>Gols: "+group_B[0].goals+"</p>";
    document.getElementById("group_B_pair1_match2_t2").innerHTML = "<h2>"+group_B[1].name+"</h2>"+group_B[1].img+"<p>Gols: "+group_B[1].goals+"</p>";
    document.getElementById("group_B_pair2_match2_t1").innerHTML = "<h2>"+group_B[2].name+"</h2>"+group_B[2].img+"<p>Gols: "+group_B[2].goals+"</p>";
    document.getElementById("group_B_pair2_match2_t2").innerHTML = "<h2>"+group_B[3].name+"</h2>"+group_B[3].img+"<p>Gols: "+group_B[3].goals+"</p>"; 
    
group_C = ramdom_group(group_C, 2)
match_group(group_C);
    document.getElementById("group_C_pair1_match2_t1").innerHTML = "<h2>"+group_C[0].name+"</h2>"+group_C[0].img+"<p>Gols: "+group_C[0].goals+"</p>";
    document.getElementById("group_C_pair1_match2_t2").innerHTML = "<h2>"+group_C[1].name+"</h2>"+group_C[1].img+"<p>Gols: "+group_C[1].goals+"</p>";
    document.getElementById("group_C_pair2_match2_t1").innerHTML = "<h2>"+group_C[2].name+"</h2>"+group_C[2].img+"<p>Gols: "+group_C[2].goals+"</p>";
    document.getElementById("group_C_pair2_match2_t2").innerHTML = "<h2>"+group_C[3].name+"</h2>"+group_C[3].img+"<p>Gols: "+group_C[3].goals+"</p>"; 

group_D = ramdom_group(group_D, 2)
match_group(group_D);
    document.getElementById("group_D_pair1_match2_t1").innerHTML = "<h2>"+group_D[0].name+"</h2>"+group_D[0].img+"<p>Gols: "+group_D[0].goals+"</p>";
    document.getElementById("group_D_pair1_match2_t2").innerHTML = "<h2>"+group_D[1].name+"</h2>"+group_D[1].img+"<p>Gols: "+group_D[1].goals+"</p>";
    document.getElementById("group_D_pair2_match2_t1").innerHTML = "<h2>"+group_D[2].name+"</h2>"+group_D[2].img+"<p>Gols: "+group_D[2].goals+"</p>";
    document.getElementById("group_D_pair2_match2_t2").innerHTML = "<h2>"+group_D[3].name+"</h2>"+group_D[3].img+"<p>Gols: "+group_D[3].goals+"</p>"; 

group_E = ramdom_group(group_E, 2)
match_group(group_E);
    document.getElementById("group_E_pair1_match2_t1").innerHTML = "<h2>"+group_E[0].name+"</h2>"+group_E[0].img+"<p>Gols: "+group_E[0].goals+"</p>";
    document.getElementById("group_E_pair1_match2_t2").innerHTML = "<h2>"+group_E[1].name+"</h2>"+group_E[1].img+"<p>Gols: "+group_E[1].goals+"</p>";
    document.getElementById("group_E_pair2_match2_t1").innerHTML = "<h2>"+group_E[2].name+"</h2>"+group_E[2].img+"<p>Gols: "+group_E[2].goals+"</p>";
    document.getElementById("group_E_pair2_match2_t2").innerHTML = "<h2>"+group_E[3].name+"</h2>"+group_E[3].img+"<p>Gols: "+group_E[3].goals+"</p>"; 

group_F = ramdom_group(group_F, 2)
match_group(group_F);
    document.getElementById("group_F_pair1_match2_t1").innerHTML = "<h2>"+group_F[0].name+"</h2>"+group_F[0].img+"<p>Gols: "+group_F[0].goals+"</p>";
    document.getElementById("group_F_pair1_match2_t2").innerHTML = "<h2>"+group_F[1].name+"</h2>"+group_F[1].img+"<p>Gols: "+group_F[1].goals+"</p>";
    document.getElementById("group_F_pair2_match2_t1").innerHTML = "<h2>"+group_F[2].name+"</h2>"+group_F[2].img+"<p>Gols: "+group_F[2].goals+"</p>";
    document.getElementById("group_F_pair2_match2_t2").innerHTML = "<h2>"+group_F[3].name+"</h2>"+group_F[3].img+"<p>Gols: "+group_F[3].goals+"</p>"; 

group_G = ramdom_group(group_G, 2)
match_group(group_G);
    document.getElementById("group_G_pair1_match2_t1").innerHTML = "<h2>"+group_G[0].name+"</h2>"+group_G[0].img+"<p>Gols: "+group_G[0].goals+"</p>";
    document.getElementById("group_G_pair1_match2_t2").innerHTML = "<h2>"+group_G[1].name+"</h2>"+group_G[1].img+"<p>Gols: "+group_G[1].goals+"</p>";
    document.getElementById("group_G_pair2_match2_t1").innerHTML = "<h2>"+group_G[2].name+"</h2>"+group_G[2].img+"<p>Gols: "+group_G[2].goals+"</p>";
    document.getElementById("group_G_pair2_match2_t2").innerHTML = "<h2>"+group_G[3].name+"</h2>"+group_G[3].img+"<p>Gols: "+group_G[3].goals+"</p>"; 

group_H = ramdom_group(group_H, 2)
match_group(group_H);
    document.getElementById("group_H_pair1_match2_t1").innerHTML = "<h2>"+group_H[0].name+"</h2>"+group_H[0].img+"<p>Gols: "+group_H[0].goals+"</p>";
    document.getElementById("group_H_pair1_match2_t2").innerHTML = "<h2>"+group_H[1].name+"</h2>"+group_H[1].img+"<p>Gols: "+group_H[1].goals+"</p>";
    document.getElementById("group_H_pair2_match2_t1").innerHTML = "<h2>"+group_H[2].name+"</h2>"+group_H[2].img+"<p>Gols: "+group_H[2].goals+"</p>";
    document.getElementById("group_H_pair2_match2_t2").innerHTML = "<h2>"+group_H[3].name+"</h2>"+group_H[3].img+"<p>Gols: "+group_H[3].goals+"</p>"; 

//Partidas 3
group_A = ramdom_group(group_A, 3)
match_group(group_A);    
    document.getElementById("group_A_pair1_match3_t1").innerHTML = "<h2>"+group_A[0].name+"</h2>"+group_A[0].img+"<p>Gols: "+group_A[0].goals+"</p>";
    document.getElementById("group_A_pair1_match3_t2").innerHTML = "<h2>"+group_A[1].name+"</h2>"+group_A[1].img+"<p>Gols: "+group_A[1].goals+"</p>";
    document.getElementById("group_A_pair2_match3_t1").innerHTML = "<h2>"+group_A[2].name+"</h2>"+group_A[2].img+"<p>Gols: "+group_A[2].goals+"</p>";
    document.getElementById("group_A_pair2_match3_t2").innerHTML = "<h2>"+group_A[3].name+"</h2>"+group_A[3].img+"<p>Gols: "+group_A[3].goals+"</p>";  

group_B = ramdom_group(group_B, 3)  
match_group(group_B);
    document.getElementById("group_B_pair1_match3_t1").innerHTML = "<h2>"+group_B[0].name+"</h2>"+group_B[0].img+"<p>Gols: "+group_B[0].goals+"</p>";
    document.getElementById("group_B_pair1_match3_t2").innerHTML = "<h2>"+group_B[1].name+"</h2>"+group_B[1].img+"<p>Gols: "+group_B[1].goals+"</p>";
    document.getElementById("group_B_pair2_match3_t1").innerHTML = "<h2>"+group_B[2].name+"</h2>"+group_B[2].img+"<p>Gols: "+group_B[2].goals+"</p>";
    document.getElementById("group_B_pair2_match3_t2").innerHTML = "<h2>"+group_B[3].name+"</h2>"+group_B[3].img+"<p>Gols: "+group_B[3].goals+"</p>"; 

group_C = ramdom_group(group_C, 3)
match_group(group_C);
    document.getElementById("group_C_pair1_match3_t1").innerHTML = "<h2>"+group_C[0].name+"</h2>"+group_C[0].img+"<p>Gols: "+group_C[0].goals+"</p>";
    document.getElementById("group_C_pair1_match3_t2").innerHTML = "<h2>"+group_C[1].name+"</h2>"+group_C[1].img+"<p>Gols: "+group_C[1].goals+"</p>";
    document.getElementById("group_C_pair2_match3_t1").innerHTML = "<h2>"+group_C[2].name+"</h2>"+group_C[2].img+"<p>Gols: "+group_C[2].goals+"</p>";
    document.getElementById("group_C_pair2_match3_t2").innerHTML = "<h2>"+group_C[3].name+"</h2>"+group_C[3].img+"<p>Gols: "+group_C[3].goals+"</p>"; 

group_D = ramdom_group(group_D, 3)
match_group(group_D);
    document.getElementById("group_D_pair1_match3_t1").innerHTML = "<h2>"+group_D[0].name+"</h2>"+group_D[0].img+"<p>Gols: "+group_D[0].goals+"</p>";
    document.getElementById("group_D_pair1_match3_t2").innerHTML = "<h2>"+group_D[1].name+"</h2>"+group_D[1].img+"<p>Gols: "+group_D[1].goals+"</p>";
    document.getElementById("group_D_pair2_match3_t1").innerHTML = "<h2>"+group_D[2].name+"</h2>"+group_D[2].img+"<p>Gols: "+group_D[2].goals+"</p>";
    document.getElementById("group_D_pair2_match3_t2").innerHTML = "<h2>"+group_D[3].name+"</h2>"+group_D[3].img+"<p>Gols: "+group_D[3].goals+"</p>"; 

group_E = ramdom_group(group_E, 3)
match_group(group_E);
    document.getElementById("group_E_pair1_match3_t1").innerHTML = "<h2>"+group_E[0].name+"</h2>"+group_E[0].img+"<p>Gols: "+group_E[0].goals+"</p>";
    document.getElementById("group_E_pair1_match3_t2").innerHTML = "<h2>"+group_E[1].name+"</h2>"+group_E[1].img+"<p>Gols: "+group_E[1].goals+"</p>";
    document.getElementById("group_E_pair2_match3_t1").innerHTML = "<h2>"+group_E[2].name+"</h2>"+group_E[2].img+"<p>Gols: "+group_E[2].goals+"</p>";
    document.getElementById("group_E_pair2_match3_t2").innerHTML = "<h2>"+group_E[3].name+"</h2>"+group_E[3].img+"<p>Gols: "+group_E[3].goals+"</p>"; 

group_F = ramdom_group(group_F, 3)
match_group(group_F);
    document.getElementById("group_F_pair1_match3_t1").innerHTML = "<h2>"+group_F[0].name+"</h2>"+group_F[0].img+"<p>Gols: "+group_F[0].goals+"</p>";
    document.getElementById("group_F_pair1_match3_t2").innerHTML = "<h2>"+group_F[1].name+"</h2>"+group_F[1].img+"<p>Gols: "+group_F[1].goals+"</p>";
    document.getElementById("group_F_pair2_match3_t1").innerHTML = "<h2>"+group_F[2].name+"</h2>"+group_F[2].img+"<p>Gols: "+group_F[2].goals+"</p>";
    document.getElementById("group_F_pair2_match3_t2").innerHTML = "<h2>"+group_F[3].name+"</h2>"+group_F[3].img+"<p>Gols: "+group_F[3].goals+"</p>";
    
group_G = ramdom_group(group_G, 3)
match_group(group_G);
    document.getElementById("group_G_pair1_match3_t1").innerHTML = "<h2>"+group_G[0].name+"</h2>"+group_G[0].img+"<p>Gols: "+group_G[0].goals+"</p>";
    document.getElementById("group_G_pair1_match3_t2").innerHTML = "<h2>"+group_G[1].name+"</h2>"+group_G[1].img+"<p>Gols: "+group_G[1].goals+"</p>";
    document.getElementById("group_G_pair2_match3_t1").innerHTML = "<h2>"+group_G[2].name+"</h2>"+group_G[2].img+"<p>Gols: "+group_G[2].goals+"</p>";
    document.getElementById("group_G_pair2_match3_t2").innerHTML = "<h2>"+group_G[3].name+"</h2>"+group_G[3].img+"<p>Gols: "+group_G[3].goals+"</p>";
    
group_H = ramdom_group(group_H, 3)
match_group(group_H);
    document.getElementById("group_H_pair1_match3_t1").innerHTML = "<h2>"+group_H[0].name+"</h2>"+group_H[0].img+"<p>Gols: "+group_H[0].goals+"</p>";
    document.getElementById("group_H_pair1_match3_t2").innerHTML = "<h2>"+group_H[1].name+"</h2>"+group_H[1].img+"<p>Gols: "+group_H[1].goals+"</p>";
    document.getElementById("group_H_pair2_match3_t1").innerHTML = "<h2>"+group_H[2].name+"</h2>"+group_H[2].img+"<p>Gols: "+group_H[2].goals+"</p>";
    document.getElementById("group_H_pair2_match3_t2").innerHTML = "<h2>"+group_H[3].name+"</h2>"+group_H[3].img+"<p>Gols: "+group_H[3].goals+"</p>"; 

//Rankeando
ranking(group_A)
    winners_A = winners;
    console.log("A --> ", winners_A);
ranking(group_B)
    winners_B = winners;
    console.log("B --> ", winners_B);
ranking(group_C)
    winners_C = winners;
    console.log("C --> ", winners_C);
ranking(group_D)
    winners_D = winners;
    console.log("D --> ", winners_D);
ranking(group_E)
    winners_E = winners;
    console.log("E --> ", winners_E);
ranking(group_F)
    winners_F = winners;
    console.log("F --> ", winners_F);
ranking(group_G)
    winners_G = winners;
    console.log("G --> ", winners_G);
ranking(group_H)
    winners_H = winners;
    console.log("H --> ", winners_H);

//====================================Fase de grupos (final)

//====================================Oitavas (começo)

teams_oitavas = [winners_A[0], winners_A[1], winners_B[0], winners_B[1],
                 winners_C[0], winners_C[1], winners_D[0], winners_D[1],
                 winners_E[0], winners_E[1], winners_F[0], winners_F[1],
                 winners_G[0], winners_G[1], winners_H[0], winners_H[1]]

console.log("Times das oitavas --> ", teams_oitavas);


