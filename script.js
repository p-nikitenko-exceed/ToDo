window.onload = function () {
    $(function () {
        const tasks = []
        const colors = ['rgb(255, 224, 131)', 'rgb(103, 215, 229)',
            'rgb(145, 112, 203)', 'rgb(243, 121, 162)',
            'rgb(242, 108, 105)', 'rgb(94, 179, 246)'
        ]
        takeColor = 'rgb(255, 224, 131)'
        randomColor = () => {

            let randomElement = colors[Math.floor(Math.random() * colors.length)]
            return randomElement

        }
       

        $('.colorPalette').on('click', '.colorButton', function () {

            takeColor = $(this).css('background-color')
            
            

            return takeColor

        })


        function chk() {

            $('#out').on('change', '.check', function () {
                if ($(this).is(':checked')) {
                    $(this).parent().parent().css('background-color', takeColor)

                }
            })
        }


        $('#add').on('click', () => {
            const task = {}
            let input = $('#in').val().trim()
            let li = $('<li></li>')
            let checkBox = $('<input type = checkbox  class = check>')
            let div = $('<div class = divCheckbox></div>')
            let divText = $('<div class = divText></div>')
            div.append(checkBox)
            task.text = input
            li.css('background-color', randomColor())
            divText.text(task.text)
            li.append(div, divText)
            $('#out').append(li)

            tasks.push(task)


        })

        chk()

    })



}