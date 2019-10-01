/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      let result;
      
      for(let key in config){
        if (key == focus) {
          result = config[key];
        }
      }

      if(knowsProgramming){
        
        return Math.ceil(800/result);
      }
      else {
        return Math.ceil(1300/result);
      }
  };
  