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

    //criando grupos randômicos
    group_A = [new_list[1], new_list[2], new_list[3], new_list[4]];
    group_B = [new_list[5], new_list[6], new_list[7], new_list[8]];
    group_C = [new_list[9], new_list[10], new_list[11], new_list[12]];
    group_D = [new_list[13], new_list[14], new_list[15], new_list[16]];
    group_E = [new_list[17], new_list[18], new_list[19], new_list[20]];
    group_F = [new_list[21], new_list[22], new_list[23], new_list[24]];
    group_G = [new_list[25], new_list[26], new_list[27], new_list[28]];
    group_H = [new_list[29], new_list[30], new_list[31], new_list[0]];
//======================================


//======================================Começando as simulações dos jogos

//======================================Função que cria um Rank dos times
function ranking(inputArray){ 

    //-----------------------------------------FUNÇÕES DA FUNÇÃO (começo)
    //Função necessária para ter uma ordem crescente correta
    function compare_numbers(a, b) {
        return a - b;
    }

    //função que compara os gols
    function compare_goals(inputArray){
        if(inputArray[0].goals > inputArray[1].goals){
            inputArray[0].points += 0.1;        
        }
        else if(inputArray[0].goals < inputArray[1].goals){
            inputArray[1].points += 0.1;; 
        }
        else{
            console.log("Iguais, sortear time!!!");

            lucky = [inputArray[0], inputArray[1]];
            shuffleArray(lucky) ;

            console.log(inputArray);
            console.log(lucky);

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
    
    //Faz o array final com o rank feito e sem repetições
    //normalize_points(new_Array_points);

    console.log("ARRAY INPUT ---> ", inputArray); 
    console.log("ARRAY FINAL ---> ", new_Array_points);
    console.log("VECTOR POINTS --->  ", rank_array_points);
}


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

    //acumulando os gols do time
    inputArray[0].goals += gols_team_1;
    inputArray[1].goals += gols_team_2;
}


//-----Função que faz 4 partidas de uma vez, funcionando até a semi-final
function match_group(inputArray){
    //jogo 1
    confronto_1 = [inputArray[0], inputArray[1]];

    //jogo 2
    confronto_2 = [inputArray[2], inputArray[3]];

    //Jogos feitos
    play_match(confronto_1);
    play_match(confronto_2);
}


//Partidas 1
match_group(group_A);
match_group(group_B);
match_group(group_C);
match_group(group_D);
match_group(group_E);
match_group(group_F);
match_group(group_G);
match_group(group_H);

//Partidas 2
match_group(ramdom_group(group_A, 2));
match_group(ramdom_group(group_B, 2));
match_group(ramdom_group(group_C, 2));
match_group(ramdom_group(group_D, 2));
match_group(ramdom_group(group_E, 2));
match_group(ramdom_group(group_F, 2));
match_group(ramdom_group(group_G, 2));
match_group(ramdom_group(group_H, 2));

//Partidas 3
match_group(ramdom_group(group_A, 3));
match_group(ramdom_group(group_B, 3));
match_group(ramdom_group(group_C, 3));
match_group(ramdom_group(group_D, 3));
match_group(ramdom_group(group_E, 3));
match_group(ramdom_group(group_F, 3));
match_group(ramdom_group(group_G, 3));
match_group(ramdom_group(group_H, 3));

//Rankeando
ranking(group_A);

//=============Fim das Oitavas


