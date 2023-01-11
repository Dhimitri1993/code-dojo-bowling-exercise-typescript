export function answer(game: string): number {
  let frames: string[] = [];
  frames = game.split('|');

  let score = 0;

  const hasBonus = frames[9] === 'X' || frames[9][1] === '/';

  for (let i = 0; i < 9; i++) {
     score += calculateFrameScore(frames, i);
  }
  
  score += calculateFrameScore(frames, 9);
  
  return score;
}


function calculateFrameScore(frames: string[], i: number): number {
     let score = 0;
     const frameResult = frames[i];
     const firstBall = frameResult[0];
     const secondBall = frameResult[1];
     
     if (firstBall === 'X') {
        score += 10;
        let nextIndex = i + 1 === 10 ? 11 : i + 1;       
        if (frames[nextIndex] === 'X') {
            score += 10;
            let nextIndex = i + 2;
            if (i + 2 === 10) {
                nextIndex = 11;            
            }
            score += calculateSingleBallScore(frames[nextIndex][0]);
        } else {           
            score += calculatePins(frames[nextIndex]);             
        }
     } else if (firstBall !== '-') {
        const firstBallScore = parseInt(firstBall);
        score += firstBallScore;
        if (secondBall !== '-') {
          score += 10 - firstBallScore;
          const nextFrameFirstBall = frames[i + 1 === 10 ? 11 : i + 1][0]; 
          
          score += calculateSingleBallScore(nextFrameFirstBall);
        }     
     } else {
        if (secondBall !== '-') {
            if (secondBall === '/') {
               score += 10;
            } else {
               score += parseInt(secondBall);
            }
        }
     }
     
     return score;
}


function calculateSingleBallScore(result: string): number {
      if (result === 'X') {
           return 10;
      } else if (result === '-') {
           return 0;
      } else {
           return parseInt(result);
      }
}

function calculatePins(frameResult: string): number {
  const firstBall = frameResult[0];
  const secondBall = frameResult[1];
  
  let pins = 0;
  
  if (firstBall === 'X') {
    pins = 10;
  } else if (firstBall === '-') {
    pins = 0;
  } else {
    pins += parseInt(firstBall);
  }

  if (secondBall === undefined) {
  } else if (secondBall === 'X') {
    pins += 10;
  } else if (secondBall !== '-') {
    if (secondBall === '/') {
      return 10;
    } else {
      pins += parseInt(secondBall);
    }   
  }
  
  return pins;
}
