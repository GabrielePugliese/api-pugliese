let btn = document.querySelector(".hitMe")
        let url = "https://api.chucknorris.io/jokes/random"
        let risorsa


        btn.addEventListener("click", function (e) {
            e.preventDefault()

            risorsa = fetch(url).then(
                function (resp) {
                    console.log(risorsa)
                    console.log(resp)

                    return resp.json()
                }
            ).then(
                function (data) {
                    console.log(data.value)
                }
            ).catch(
                function (err) {
                    console.log(err)
                }
            )

            console.log(risorsa)
        })