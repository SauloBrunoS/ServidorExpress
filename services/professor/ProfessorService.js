const ProfessorModel = require('../../models/professor/ProfessorModel')

let professors = [
    {_id:0, name:"Jefferson", university:"UFC - Campus Quixadá", degree: "doutorado"},
    {_id:1, name: "Wladimir", university:"UFC - Campus do PICI", degree: "mestrado"},
    {_id:2, name:"Aragão", university:"UECE", degree: "graduado"}
]

let _id = 3

class ProfessorService {

    static list(){
        return professors
    }

    static create(data){
        let professor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree
        )
        professors.push(professor)
        return professor
    }

    static update(_id, data){
        for(let p of professors){
            if(p._id == _id){
                p.name = data.name
                p.university = data.university
                p.degree = data.degree
                return p;
            }
        }
        return null;
    }

    static delete(_id){
        for(let i = 0; i < professors.length; i++){
            if(professors[i]._id == _id){
                professors.splice(i, 1)
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for(let i = 0; i < professors.length; i++){
            if(professors[i]._id == _id){
                return professors[i];
            }
        }
        return {};
    }

}

module.exports = ProfessorService