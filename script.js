window.onload = function () {
    $(function () {
        const tasks = []
        const colors = ['rgb(255, 224, 131)', 'rgb(103, 215, 229)',
            'rgb(145, 112, 203)', 'rgb(243, 121, 162)',
            'rgb(242, 108, 105)', 'rgb(94, 179, 246)'
        ]
        takeColor = ''
        randomColor = () => {

            let randomElement = colors[Math.floor(Math.random() * colors.length)]
            return randomElement

        }

        //function takeColor() {

          $('.colorPalette').on('click', '.colorButton', function () {

                a = $(this).css('background-color')
                a =
                console.log(a)
                return a
                
            })
         
        //}
        // checkcolor = takeColor()
        // console.log(checkcolor)

        function chk() {

            $('#out').on('change', '.check', function () {
                if ($(this).is(':checked')) {
                    $(this).parent().css('background-color','red')
                    console.log($(this))
                }
            })
        }



        $('#add').on('click', () => {
            const task = {}
            let input = $('#in').val().trim()
            let li = $('<li class = liit></li>')
            let checkBox = $('<input type = checkbox  class = check>')

            task.text = input
            li.css('background-color', randomColor())
            li.text(task.text)
            li.append(checkBox)
            $('#out').append(li, '<br>')

            tasks.push(task)
        })

        chk()


    })



}