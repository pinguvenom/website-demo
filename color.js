var Body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor: function(color) {
        var a_list = document.querySelectorAll('a');
        var i = 0;
        while (i < a_list.length) {
            a_list[i].style.color = color;
            i = i + 1;
        }
    }
}

function nightDayHandler(self) {
    if (self.value === 'day') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('powderblue')
        self.value = 'night';
    }
    else if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('blue')
        self.value = 'day'
    }
}