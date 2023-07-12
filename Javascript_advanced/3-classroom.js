function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
        }   
        students = [];
        for (var i = 0; i < numbersOfStudents.length; i++)
        {
            numbersOfStudents[i] = students(i);
            students[i] = studentSeat(i);
        }

        return studentSeat();
        
    }
