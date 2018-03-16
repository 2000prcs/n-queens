/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  // get the boards by using n (matrix)
  var matrix = new Board({n:n});
  var rows = matrix.rows(n);
  
  // check rows by iterating through each rows 
  matrix.togglePiece(0,0);
  for(var i = 1; i < rows.length; i ++){
    // if there's no conflict, pick one index, and toggle (one rock per one index)
    matrix.togglePiece(i, i);
  }

  // return a matrix as a solution 
  solution = rows;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var matrix = new Board({n:n});

  var innerFunction = function(row){
    if(row === n){
      solutionCount++;
      return;
    }
    for (var column = 0; column < n; column++) {
      matrix.togglePiece(row, column);
      if (!matrix.hasAnyRooksConflicts()) {
        innerFunction(row + 1);
      } 
        matrix.togglePiece(row, column);
    }
  }
  innerFunction(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  var matrix = new Board({n:n}); 
  var solution = matrix.rows(); 

  var innerFunction = function(row){
    if(row === n){
      // making a copy of matrix.rows() so not mutating original 
      // if I just do matrix.rows().slice() -> it makes a shallow copy (which inner rows still points to the original)
      solution = _.map(matrix.rows(), function(row){
        return row.slice();
      });
      return;
    }
  
    for(var column = 0; column < n; column++) {
      matrix.togglePiece(row, column);
      if (!matrix.hasAnyQueenConflictsOn(row, column)){
        innerFunction(row + 1);
      } 
        matrix.togglePiece(row, column);
      
    }
  }
  innerFunction(0);

  // return a matrix as a solution 
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var matrix = new Board({n:n});

  var innerFunction = function(row){
    if(row === n){
      solutionCount++;
      return;
    }
    for (var column = 0; column < n; column++) {
      matrix.togglePiece(row, column);
      if (!matrix.hasAnyQueensConflicts()) {
        innerFunction(row + 1);
      } 
        matrix.togglePiece(row, column);
    }
  }
  innerFunction(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
