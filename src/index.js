module.exports = function check(str, bracketsConfig) {
  console.log(str, bracketsConfig);
    const replacer = (string) => {
      return string === undefined ? 0
      : string.replace(/\(\)|\[\]|\{\}|\|\||12|34|56|77|88/g, "");
    }
    const brackets = (matrix) => {
      for(let i = 0; i < str.length; i++){
          matrix = replacer(matrix)
      }
      return matrix.length === 0 
    }
    return str === undefined ? true : brackets(str)
}
