window.onload = function () {
    $(function(){
        const tasks = []
        
        $( '#add' ).on( 'click' ,()=>{

             randomNum = ()=> {

                 r = Math.floor(Math.random() * Math.floor(255))
                 g = Math.floor(Math.random() * Math.floor(255))
                 b = Math.floor(Math.random() * Math.floor(255))
                 randomColor = 'rgb(' + r + ',' + g + ',' + b + ')'
                 return randomColor
             }

            const task = {} 
            let input =$( '#in' ).val().trim()
            task.text = input
            let checkBox = $('<input type = checkbox>')
            $('#out').append(checkBox)

            let label = $( '<lable></label>' )
            label.css('background-color', randomNum())
            label.text( task.text )
            $('#out').append( label ,'<br>' )
            
            tasks.push( task )

            // if (checkBox.is(':checked')){
                
            //     alert('work')
            //     }else{
            //         alert('not work')
            // }
                
            
        
        } )
        
    })
    
}