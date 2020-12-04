window.onload = function () {
  $(function () {
    const tasks = []
    const colors = [
      'rgb(255, 224, 131)',
      'rgb(103, 215, 229)',
      'rgb(145, 112, 203)',
      'rgb(243, 121, 162)',
      'rgb(242, 108, 105)',
      'rgb(94, 179, 246)',
    ]
    takeColor = 'rgb(255, 224, 131)'
    randomColor = () => {
      let randomElement = colors[Math.floor(Math.random() * colors.length)]
      return randomElement
    }

    $('.colorPalette').on('click', '.colorButton', function () {
      $('.colorButton').removeClass('activButton')
      takeColor = $(this).css('background-color')
      $('.check').each(function () {
        if ($(this).is(':checked')) {
          $(this).parent().parent().css('background-color', takeColor)
        }
      })

      $(this).addClass('activButton')
      return takeColor
    })

    function check() {
      $('#out').on('change', '.check', function () {
        if ($(this).is(':checked')) {
          $(this).parent().parent().css('background-color', takeColor)
        }
      })
    }

    $(document).ready(function () {
      $('#in').keydown(function (e) {
        if (e.keyCode == 13) {
          const task = {}

          let li = $('<li></li>')
          let checkBox = $('<input type = checkbox  class = check>')
          let div = $('<div class = divCheckbox></div>')
          let divText = $('<div class = divText></div>')
          div.append(checkBox)
          if ($('#in').val().trim() == '') {
            return $('#in').val('')
          } else {
            task.text = $('#in').val().trim()
            li.css('background-color', randomColor())
            divText.text(task.text)
            li.append(div, divText)
            $('#out').append(li)

            tasks.push(task)
            $('#in').val('')
          }
        }
      })
    })

    $('#add').on('click', function () {
      const task = {}

      let li = $('<li></li>')
      let checkBox = $('<input type = checkbox  class = check>')
      let div = $('<div class = divCheckbox></div>')
      let divText = $('<div class = divText></div>')
      div.append(checkBox)
      if ($('#in').val().trim() == '') {
        return $('#in').val('')
      } else {
        task.text = $('#in').val().trim()
        li.css('background-color', randomColor())
        divText.text(task.text)
        li.append(div, divText)
        $('#out').append(li)

        tasks.push(task)
        $('#in').val('')
      }
    })

    check()
  })
}
