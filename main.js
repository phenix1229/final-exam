const makeParagraph = (arr) => {
  return arr.join(' ');
}

const averageDogAge = (arr) => {
  let count = 0;
  let ageTotal = 0
  arr.forEach(item => {
    if (item.species === 'dog'){
      ageTotal+= item.age;
      count++;
    }
  })
  return ageTotal/count
}

const addToDigits = (arg1, arg2) => {
  const newStr = arg1.toString();
  let result = '';
  for (const i of newStr){
    let answer = ''
    let total = Number(i) + Number(arg2)
    if (total >= 10){
      answerStr = total.toString()
      answer = answerStr[answerStr.length -1];
      result+= answer;
    } else if (total < 10){
      answer = total.toString();
      result+= answer;
    }
  }
  return Number(result)
}

const nightOwls = (arr) => {
  return arr.filter(item => item.asleep === false && item.localTime >= 100 && item.localTime <= 400)
}

const nap = (arr) => {
  const newArr = [...arr];
  newArr.forEach(item => {
    if (item.asleep === false && item.localTime >= 100 && item.localTime <= 400){
    item.asleep = true;
    }
  })
  return newArr;
}

const findIndices = (arr, func) => {
  const result = [];
  for (i = 0; i < arr.length; i++){
    if (func(arr[i])){
      result.push(i)
    }
  }
  return result;
}

const Faqtory = () => {
  return {
  questions: [],
  length: 0,

  addQuestion: function (str){
    question = {
      text: str,
      id: this.length
    }
    this.questions.push(question);
    this.length++;
  },

  answerQuestion: function (num, str){
    const question = this.questions[num];
    if (!question.answer){
      question.answer = str;
    }
  }
  }
}


class Dog {
  constructor(name, breed, color){
    return {name: name, breed: breed, color: color,}
  }

  makeNoise(){
    return 'Woof.'
  }
}

class GreatDane extends Dog{
  constructor(name, color){
    super(name, 'Great Dane', color)
  }

  makeNoise(){
    return super.makeNoise().toUpperCase()
  }
}

class Beagle extends Dog{
  constructor(name){
    super(name, 'Beagle', 'white/black/brown')
  }

  makeNoise(){
    return 'Awooooooooo.';
  }
}

class Pointer extends Dog{
  constructor(name, color, pointOrNot){
    super(name, 'Pointer', color);
    points = pointsOrNot;
  }

  point(){
    if (this.points){
      return 'Over there!';
    } else if (!this.points){
      return 'Woof.'
    }
  }
}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}