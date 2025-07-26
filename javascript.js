
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            for(i=1; i<=10; i++ ){
                result+=` ${input} X ${i} = ${input*i} <br>`
            }
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = `Your Entered ${input} So It's Table is:<br> ${result} `;
        }   
    