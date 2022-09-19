let random = 0;
        let result = "";

        function frock1(){
            document.getElementById('choosed1').innerHTML = "<img src='photos/rock.svg' />";
            check(1);
        }
        function fpaper1(){
            document.getElementById('choosed1').innerHTML = "<img src='photos/paper.svg' />";
            check(2);
        }
        function fscr1(){
            document.getElementById('choosed1').innerHTML = "<img src='photos/scissors.svg' />";
            check(3);
        }

        function check(value){
            random = Math.floor((Math.random() * 3) + 1);
            if(value == random){
                result= "It's a Tie";
                document.getElementById('result').innerHTML = result;
            }else if(value == 1){
                if(random == 2){
                    result= "You Lose";
                    document.getElementById('result').innerHTML = result;
                }else{
                    result = "You Won";
                    document.getElementById('result').innerHTML = result;
                }
            }
            else if(value == 2){
                if(random == 3){
                    result= "You Lose";
                    document.getElementById('result').innerHTML = result;
                }else{
                    result = "You Won";
                    document.getElementById('result').innerHTML = result;
                }
            }
            else if(value == 3){
                if(random == 1){
                    result= "You Lose";
                    document.getElementById('result').innerHTML = result;
                }else{
                    result = "You Won";
                    document.getElementById('result').innerHTML = result;
                }
            }
            if(random == 1){
                document.getElementById('choosed2').innerHTML = "<img src='photos/rock.svg' />";
            }else if(random == 2){
                document.getElementById('choosed2').innerHTML = "<img src='photos/paper.svg' />";
            }else{
                document.getElementById('choosed2').innerHTML = "<img src='photos/scissors.svg' />";
            }
            updateTable(value, result, random);
        }

        function updateTable(value, result, random){
            let table = document.getElementsByTagName('table')[0];
            let row = table.insertRow(1);
            let cell0 = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);

            if(value == 1){
                cell0.innerHTML = "<img src='photos/rock.svg' />";
            }else if(value == 2){
                cell0.innerHTML = "<img src='photos/paper.svg' />";
            }else{
                cell0.innerHTML = "<img src='photos/scissors.svg' />";
            }

            cell1.innerHTML = result;

            if(random == 1){
                cell2.innerHTML = "<img src='photos/rock.svg' />";
            }else if(random == 2){
                cell2.innerHTML = "<img src='photos/paper.svg' />";
            }else{
                cell2.innerHTML = "<img src='photos/scissors.svg' />";
            }
        }
        function showTable(){
            document.getElementById('table-Container').style.display = "block";
        }
