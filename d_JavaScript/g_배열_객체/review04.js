class Scores{
  constructor(id, subject, score){
    this.id = id;
    this.subject = subject;
    this.score = score;
  }
}


class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.scores = [];
  }

  getAverageScore(){
    const average = this.scores.reduce((acc,cur) => acc+cur,0)/this.scores.length;
  }


}



class GradeManagement{
  constructor(){
    this.Students = [];
    this.nextStudentId = 1;
  }

  addStudent(name, scores){
     w
  }


}

