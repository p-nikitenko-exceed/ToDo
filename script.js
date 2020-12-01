window.onload = function () {
    $(function(){
        const tasks = []
       
        
        
        $( 'button' ).on( 'click' ,()=>{

             randomNum = ( max ) =>{

                return  Math.floor( Math.random() * Math.floor( max ) )            
            
            }

            r = randomNum(255)
            g = randomNum(255)
            b = randomNum(255)
            randomColor = 'rgb('+r+','+g+','+b+')'
            
            const task = {} 
            let input =$( '#in' ).val().trim()
            task.text = input
            let checkBox = $('<input type = checkbox>')
            $('#out').append(checkBox)

            let label = $( '<lable></label>' )
            label.css('background-color', randomColor)
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